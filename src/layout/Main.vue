<template>
	<div class="flex flex-col items-center">
		<div class="layout-container">
			<nav class="navbar py-10">
				<img src="@/assets/images/logo.png" alt="logo" class="logo absolute left-5 top-1/2 -translate-y-1/2" />

				<!-- Desktop Navigation -->
				<div class="desktop-nav flex gap-x-3 items-center text-[#195699] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
					<a href="#">{{ $t('nav.student') }}</a>
					<a href="#">{{ $t('nav.school') }}</a>
					<a href="#">{{ $t('nav.company') }}</a>
				</div>

				<!-- Desktop Right Side -->
				<div class="desktop-right flex items-center absolute right-5 top-1/2 -translate-y-1/2">
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

				<!-- Mobile Hamburger Button -->
				<button class="mobile-menu-btn absolute right-5 top-1/2 -translate-y-1/2" @click="toggleMenu">
					<svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/>
					</svg>
					<svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/>
					</svg>
				</button>

				<!-- Mobile Menu -->
				<div v-if="isMenuOpen" class="mobile-menu">
					<a href="#" @click="toggleMenu">{{ $t('nav.student') }}</a>
					<a href="#" @click="toggleMenu">{{ $t('nav.school') }}</a>
					<a href="#" @click="toggleMenu">{{ $t('nav.company') }}</a>
					<div class="flex items-center gap-x-2 mt-4">
						<select name="lang" v-model="currentLocale" @change="changeLocale">
							<option value="en">English</option>
							<option value="id">Bahasa Indonesia</option>
						</select>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
							<rect width="24" height="24" fill="none" />
							<path fill="currentColor"
								d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" />
						</svg>
					</div>
				</div>
			</nav>
			<main>
				<RouterView />
			</main>
			<footer>
				<div class="flex items-start justify-between mx-10 my-15">
					<div class="max-w-[400px]">
						<img src="@/assets/images/logo.png" alt="logo" class="logo mb-3" />
						<p class="text-[#818C9F] text-sm">{{ $t('footer.description') }}</p>
						<div class="flex mt-5 gap-x-3">
							<a href="https://play.google.com/store/apps/details?id=com.frisidea.careersupport.candidate&pli=1" target="_blank"><img src="@/assets/images/google_play_button.png" alt="google play" class="h-[40px] cursor-pointer"></a>
							<a href="https://apps.apple.com/id/app/career-support-candidate/id1524249229?platform=iphone" target="_blank"><img src="@/assets/images/app_store_button.png" alt="app store" class="h-[40px] cursor-pointer"></a>
						</div>
					</div>

					<div class="text-[#818C9F]">
						<p class="font-medium">{{ $t('footer.products') }}</p>
						<a href="https://jobfair.career.support/" target="_blank"><p class="mt-3 text-sm cursor-pointer">Job Fairs</p></a>
						<a href="https://skillhub.id/" target="_blank"><p class="mt-3 text-sm cursor-pointer">Skill</p></a>
					</div>

					<div class="text-[#818C9F]">
						<p class="font-medium">{{ $t('footer.partnership') }}</p>
						<a href="https://career.support/bkk/" target="_blank"><p class="mt-3 text-sm cursor-pointer">{{ $t('footer.school_university') }}</p></a>
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

					<p class="text-sm text-[#818C9F] mb-8">{{ $t('footer.complete_solution') }}</p>
					<div class="flex justify-between">
						<p class="text-sm text-[#818C9F]">Copyright 2025 © Career Support - PT. Global Digital Pro</p>
						<a href="https://www.career.support/terms-and-conditions/" target="_blank"><p class="text-sm text-[#818C9F]">Terms & conditions</p></a>
					</div>
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
const isMenuOpen = ref(false)

const changeLocale = async () => {
	await setI18nLanguage(currentLocale.value)
}

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value
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

/* Mobile menu hidden by default */
.mobile-menu-btn {
	display: none;
}

.mobile-menu {
	display: none;
}

/* Mobile styles */
@media (max-width: 768px) {
	.desktop-nav {
		display: none;
	}

	.desktop-right {
		display: none;
	}

	.mobile-menu-btn {
		display: block;
		background: none;
		border: none;
		color: #195699;
		cursor: pointer;
		padding: 0.5rem;
	}

	.mobile-menu {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		background: white;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		padding: 1rem;
		z-index: 50;
	}

	.mobile-menu a {
		padding: 0.75rem;
		color: #195699;
		text-decoration: none;
		border-bottom: 1px solid #e5e7eb;
	}

	.mobile-menu a:hover {
		background-color: #f3f4f6;
	}

	.layout-container {
		max-width: 100% !important;
		width: 100%;
		padding: 0 0.5rem;
	}

	footer .flex.items-start.justify-between {
		flex-direction: column;
		gap: 2rem;
	}

	footer .mx-10 {
		margin-left: 1rem !important;
		margin-right: 1rem !important;
	}
}

/* Desktop styles */
@media (min-width: 769px) {
	.layout-container {
		max-width: 1600px;
		width: 100%;
	}
}
</style>