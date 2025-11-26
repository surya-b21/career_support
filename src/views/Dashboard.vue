<template>
	<!-- Section 1 -->
	<div class="bg-[#EDF3F9] text-center my-3 mx-7 p-10 rounded-xl">
		<span class="text-[#155DFC]">#1 Career Center Platform in Indonesia</span>

		<p class="text-[#08151E] font-semibold text-6xl my-5">Ready to Develop Your Career? <br/> Start the First Step with the Career Support App</p>

		<p class="text-[#818C9F]">Career Support App is a digital career platform that helps students create professional profiles, access internship & job vacancies, and develop skills through online courses in Skillhub. All from one application!</p>

		<div class="flex justify-center gap-x-5 mt-10">
			<button type="button" class="custom-button">Career Support App</button>
			<button type="button" class="custom-button">School Portal</button>
		</div>

		<img src="@/assets/images/rafiki.png" alt="Career Support App" class="mx-auto mt-5">
	</div>

	<!-- Section 2 -->
	<p class="text-4xl leading-15 font-semibold text-center mt-20 mb-5">Why is an All-In-One Career Center <br/>Management Platform Important?</p>
	<p class="text-center text-[#4B4B4B] mb-15">Various needs can be answered with one digital platform. Career Support helps you improve the performance <br/> of your career center with the spirit of Go Digital and National.</p>

	<div class="bg-[#EDF3F9] text-center my-3 mx-7 p-10 rounded-xl grid grid-cols-4 gap-x-15">
		<div>
			<p class="text-4xl text-[#4682C4] mb-5 font-semibold">92%</p>
			<p class="text-sm text-[#1D3752]">The number of relevant job vacancy information is minimal</p>
		</div>
		<div>
			<p class="text-4xl text-[#4682C4] mb-5 font-semibold">83%</p>
			<p class="text-sm text-[#1D3752]">Corporate partnership networks are difficult to access</p>
		</div>
		<div>
			<p class="text-4xl text-[#4682C4] mb-5 font-semibold">80%</p>
			<p class="text-sm text-[#1D3752]">Student & alumni database is incomplete</p>
		</div>
		<div>
			<p class="text-4xl text-[#4682C4] mb-5 font-semibold">76%</p>
			<p class="text-sm text-[#1D3752]">Skill training for students & alumni is still lacking</p>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped>
.custom-button {
	background-color: #ED1966;
	color: white;
	padding: 0.75rem 1.75rem;
	border-radius: 0.5rem;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

.custom-button:hover {
	background-color: #C01452;
}
</style>