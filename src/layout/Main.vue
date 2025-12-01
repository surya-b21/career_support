<template>
	<div class="flex flex-col items-center">
		<div class="max-w-400">
			<nav class="navbar py-10">
				<img src="@/assets/images/logo.png" alt="logo" class="logo absolute left-5 top-1/2 -translate-y-1/2" />

				<div
				class="flex gap-x-3 items-center text-[#195699] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
				<a href="#">{{ $t('nav.student') }}</a>
				<a href="#">{{ $t('nav.school') }}</a>
				<a href="#">{{ $t('nav.company') }}</a>
			</div>

				<div class="flex items-center absolute right-5 top-1/2 -translate-y-1/2 ">
				<select name="lang" class="mr-3" v-model="currentLocale" @change="changeLocale">
					<option value="en">English</option>
					<option value="id">Bahasa Indonesia</option>
				</select>
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
					<rect width="24" height="24" fill="none" />
					<path fill="currentColor"
						d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" />
				</svg>
			</div>
			</nav>
			<main>
				<RouterView />
			</main>
			<footer>
				<div class="flex items-start justify-between mx-10 my-15">
					<div>
						<img src="@/assets/images/logo.png" alt="logo" class="logo mb-3" />
						<div
							class="bg-[#3F8CE1] hover:bg-[#2C6BCC] text-white inline-block p-2 rounded-full cursor-pointer">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
								<rect width="24" height="24" fill="none" />
								<path fill="currentColor"
									d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
							</svg>
						</div>
						<div
							class="bg-[#3F8CE1] hover:bg-[#2C6BCC] text-white inline-block p-2 rounded-full ml-2 cursor-pointer">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
								<rect width="24" height="24" fill="none" />
								<path fill="currentColor"
									d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396z" />
							</svg>
						</div>
						<div
							class="bg-[#3F8CE1] hover:bg-[#2C6BCC] text-white inline-block p-2 rounded-full ml-2 cursor-pointer">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
								<rect width="24" height="24" fill="none" />
								<path fill="currentColor"
									d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
							</svg>
						</div>
						<div
							class="bg-[#3F8CE1] hover:bg-[#2C6BCC] text-white inline-block p-2 rounded-full ml-2 cursor-pointer">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
								<rect width="24" height="24" fill="none" />
								<path fill="currentColor"
									d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" />
							</svg>
						</div>
					</div>

					<div class="text-[#818C9F]">
						<p class="font-medium">{{ $t('footer.services') }}</p>
						<p class="mt-3 text-sm cursor-pointer">{{ $t('footer.industry_educational') }}</p>
						<p class="mt-3 text-sm cursor-pointer">{{ $t('footer.entrepreneurship_incubation') }}</p>
						<p class="mt-3 text-sm cursor-pointer">{{ $t('footer.training_skill_development') }}</p>
						<p class="mt-3 text-sm cursor-pointer">{{ $t('footer.technology_integration') }}</p>
					</div>

					<div class="text-[#818C9F]">
						<p class="font-medium">{{ $t('footer.partnership') }}</p>
						<p class="mt-3 text-sm cursor-pointer">{{ $t('footer.school_university') }}</p>
						<p class="mt-3 text-sm cursor-pointer">{{ $t('footer.companies') }}</p>
					</div>

					<div class="text-[#818C9F]">
						<p class="font-medium">{{ $t('footer.registered_member') }}</p>
						<img src="@/assets/images/komdigi.png" alt="komdigi" class="mt-5" style="height: 50px;">
						<img src="@/assets/images/kemenko.png" alt="kemenko" style="height: 150px;">
						<img src="@/assets/images/kadin.png" alt="kadin" style="height: 75px;">
					</div>
				</div>

				<div class="mx-10 my-5">
					<hr class="border-[#818C9F] mb-10" />

					<p class="text-sm text-[#818C9F] mb-8">Copyright 2025 © Career Support - PT. Global Digital Pro</p>
					<p class="text-sm text-[#818C9F]">{{ $t('footer.complete_solution') }}</p>
				</div>
			</footer>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { setI18nLanguage } from '@/plugins/i18n'

const { locale } = useI18n()
const currentLocale = ref(locale.value)

const changeLocale = async () => {
	await setI18nLanguage(currentLocale.value)
}
</script>

<style scoped>
.navbar {
	width: 100%;
	position: relative;
}

.logo {
	height: 30px;
}
</style>