<template>
	<nav class="navbar py-10">
		<!-- Navigation content -->
		 <img src="@/assets/images/logo.png" alt="logo" class="logo absolute left-5 top-1/2 -translate-y-1/2" />

		 <div class="flex gap-x-3 items-center text-[#195699] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
			<a href="#">Students/Alumni</a>
			<a href="#">School/Higher Education</a>
			<a href="#">Company</a>
		 </div>

		 <div class="flex items-center absolute right-5 top-1/2 -translate-y-1/2 ">
			<select name="lang" class="mr-3">
				<option value="en">English</option>
				<option value="fr">ID</option>
			</select>
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
				<rect width="24" height="24" fill="none" />
				<path fill="currentColor" d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" />
			</svg>
		 </div>
	</nav>
	<main>
		<slot></slot>
	</main>
</template>

<script lang="ts" setup></script>

<style scoped>
.navbar {
	width: 100%;
	position: relative;
}
.navbar .logo {
	height: 30px;
}
</style>