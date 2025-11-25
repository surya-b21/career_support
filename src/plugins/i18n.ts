import { createI18n, type I18n, type LocaleMessages, type VueMessageType } from 'vue-i18n';

// 1. Define the type for the supported locales
type MessageLoader = () => Promise<{ default: LocaleMessages<VueMessageType> }>;

// 2. Map of supported locales and their dynamic import functions
const messages: Record<string, MessageLoader> = {
  en: () => import('@/locales/en.json'),
  id: () => import('@/locales/id.json'),
  // Add more languages here
};

// 3. Define the initial, empty I18n instance
const i18n = createI18n({
  // Composition API mode is required for Nuxt/Vue 3
  legacy: false,
  globalInjection: true,
  locale: 'en', // Initial locale
  fallbackLocale: 'en',
  // Initialize with empty messages to be filled dynamically
  messages: {}
});

// 4. Function to load locale messages dynamically
async function loadLocaleMessages(i18nInstance: I18n<any, any, any, any, false>, locale: string): Promise<void> {
  const fileLoader = messages[locale];
  
  // Check if the file loader exists and if the messages for this locale haven't been loaded yet
  if (fileLoader && !i18nInstance.global.messages.value[locale]) {
    try {
      const messageModule = await fileLoader();
      // Set the loaded messages to the global scope
      i18nInstance.global.setLocaleMessage(locale, messageModule.default);
    } catch (error) {
      console.error(`Error loading locale messages for ${locale}:`, error);
    }
  }
}

// 5. Export the primary function to switch and load the language
export async function setI18nLanguage(locale: string): Promise<void> {
  // 1. Load the messages for the new locale
  await loadLocaleMessages(i18n, locale);
  
  // 2. Set the global locale value
  i18n.global.locale.value = locale;
  
  // 3. Update the HTML lang attribute for accessibility
  document.querySelector('html')?.setAttribute('lang', locale);
}

// Load the initial locale messages immediately
setI18nLanguage(i18n.global.locale.value);

export default i18n;