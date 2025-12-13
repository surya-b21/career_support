<template>
	<!-- Section 1 -->
	<div class="bg-[#EDF3F9] text-center my-5 mx-10 p-10 rounded-xl">
		<span class="text-[#155DFC] md:text-2xl">{{ $t('home.first_career_center') }}</span>

		<p class="text-[#08151E] font-semibold text-2xl md:text-6xl my-5" v-html="$t('home.ready_to_develop')"></p>

		<p class="text-[#818C9F] md:text-2xl">{{ $t('home.career_support_app_description') }}</p>

		<div class="flex flex-col md:flex-row justify-center gap-y-5 md:gap-y-0 gap-x-5 mt-10">
			<button type="button" class="custom-button" @click="scrollToSection('cs-app')">{{ $t('home.career_support_app') }}</button>
			<button type="button" class="custom-button" @click="scrollToSection('cs-schools')">{{ $t('home.career_center_portal') }}</button>
		</div>

		<img src="@/assets/images/rafiki.png" alt="Career Support App" class="mx-auto mt-5">
	</div>

	<!-- Section 2 -->
	<div class="flex flex-col">
		<p class="text-xl md:text-4xl md:leading-15 font-semibold text-center mt-5 md:mt-20 mb-5 text-[#12141D]" v-html="$t('home.why_aio_career')"></p>
		<p class="text-center text-[#4B4B4B] mb-5 md:mb-15 mx-0 md:mx-85 md:text-xl">{{ $t('home.various_needs') }}</p>
	</div>

	<div class="bg-[#EDF3F9] text-center my-5 mx-10 p-10 rounded-xl grid grid-cols-1 md:grid-cols-4 gap-x-0 md:gap-x-15 gap-y-10 md:gap-y-0">
		<div>
			<p class="text-4xl text-[#4682C4] mb-5 font-semibold">92%</p>
			<p class="text-sm text-[#1D3752] md:text-xl">{{ $t('home.number_of_relevant_jobs') }}</p>
		</div>
		<div>
			<p class="text-4xl text-[#4682C4] mb-5 font-semibold">83%</p>
			<p class="text-sm text-[#1D3752] md:text-xl">{{ $t('home.corporate_partnership') }}</p>
		</div>
		<div>
			<p class="text-4xl text-[#4682C4] mb-5 font-semibold">80%</p>
			<p class="text-sm text-[#1D3752] md:text-xl">{{ $t('home.stundent_n_alumni_database') }}</p>
		</div>
		<div>
			<p class="text-4xl text-[#4682C4] mb-5 font-semibold">76%</p>
			<p class="text-sm text-[#1D3752] md:text-xl">{{ $t('home.skill_training_for_student') }}</p>
		</div>
	</div>

	<!-- Section 3 -->
	<div class="m-5 md:m-20 flex items-start" id="cs-app">
		<img src="@/assets/images/section3.png" alt="phone image" class="hidden md:block" style="height: 725px;">
		<div class="text-[#171717] md:ml-15 flex flex-col items-start">
			<p class="text-2xl md:text-4xl md:leading-15 font-semibold text-center md:text-left">{{ $t('home.what_you_can_do') }}</p>
			<p class="md:text-xl my-5 text-center md:text-left">{{ $t('home.create_profile_apply_jobs') }}</p>

			<div class="flex flex-col md:flex-row justify-center md:gap-x-5 gap-y-5 md:gap-y-0 mx-auto md:mx-0">
				<a href="https://apps.apple.com/id/app/career-support-candidate/id1524249229" target="_blank" class="custom-button text-center">{{ $t('home.download_for_ios') }}</a>
				<a href="https://play.google.com/store/apps/details?id=com.frisidea.careersupport.candidate" target="_blank" class="custom-button text-center">{{ $t('home.download_for_android') }}</a>
			</div>

			<div class="flex flex-col gap-y-6 mt-5">
				<div class="custom-list-tile">
					<div class="rounded-full w-5 h-2.5 md:w-3 md:h-3 bg-[#ED1966] mx-2"></div>
					<span class="text-[#171717] text-xl">{{ $t('home.apply_for_jobs') }}</span>
				</div>
				<div class="custom-list-tile">
					<div class="rounded-full w-6 h-2.5 md:w-3 md:h-3 bg-[#ED1966] mx-2"></div>
					<span class="text-[#171717] text-xl">{{ $t('home.create_automatic_cv') }}</span>
				</div>
				<div class="custom-list-tile">
					<div class="rounded-full w-4 h-2.5 md:w-3 md:h-3 bg-[#ED1966] mx-2"></div>
					<span class="text-[#171717] text-xl">{{ $t('home.find_job_opportunities') }}</span>
				</div>
				<div class="custom-list-tile">
					<div class="rounded-full w-5 h-2.5 md:w-3 md:h-3 bg-[#ED1966] mx-2"></div>
					<span class="text-[#171717] text-xl">{{ $t('home.participate_in_job_fairs') }}</span>
				</div>
				<div class="custom-list-tile">
					<div class="rounded-full w-6 h-2.5 md:w-3 md:h-3 bg-[#ED1966] mx-2"></div>
					<span class="text-[#171717] text-xl">{{ $t('home.take_exclusive_courses') }}</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Section 4 -->
	<div class="w-full bg-[#EDF3F9] p-5 md:p-20 flex flex-col items-center" id="cs-schools">
		<p class="text-2xl md:text-4xl md:leading-15 font-semibold text-center">{{ $t('home.career_support_app_for_schools') }}</p>
		<p class="md:text-lg text-center text-[#4B4B4B] mt-5">{{ $t('home.in_addition_to_supporting') }}</p>

		<a href="https://cdc.career.support/join" target="_blank" class="custom-button pill my-4 md:my-8">{{ $t('home.register_now') }}!</a>

		<div class="flex flex-col md:flex-row gap-y-5 md:gap-x-5 w-full mt-5">
			<div class="bg-white p-5 rounded-xl w-full">
				<div
					class="bg-[#FAFAFA] border border-[#E3E3E3] w-10 h-10 rounded-full flex items-center justify-center mt-2 mb-5">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						<rect width="24" height="24" fill="none" />
						<g fill="none" stroke="currentColor" stroke-width="1.5">
							<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z" />
							<path stroke-linecap="round"
								d="m15.5 9l.172.172c1.333 1.333 2 2 2 2.828s-.667 1.495-2 2.828L15.5 15m-2.206-7.83L12 12l-1.294 4.83M8.5 9l-.171.172c-1.334 1.333-2 2-2 2.828s.666 1.495 2 2.828L8.5 15" />
						</g>
					</svg>
				</div>

				<p class="md:text-2xl font-semibold">{{ $t('home.monitor_student_development') }}</p>
				<p class="text-[#8A8A8A] mt-3 md:text-lg">{{ $t('home.with_the_career_support_dashboard') }}</p>
			</div>
			<div class="bg-white p-5 rounded-xl w-full">
				<div
					class="bg-[#FAFAFA] border border-[#E3E3E3] w-10 h-10 rounded-full flex items-center justify-center mt-2 mb-5">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						<rect width="24" height="24" fill="none" />
						<g fill="none" stroke="currentColor" stroke-width="1.5">
							<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z" />
							<path stroke-linecap="round"
								d="m15.5 9l.172.172c1.333 1.333 2 2 2 2.828s-.667 1.495-2 2.828L15.5 15m-2.206-7.83L12 12l-1.294 4.83M8.5 9l-.171.172c-1.334 1.333-2 2-2 2.828s.666 1.495 2 2.828L8.5 15" />
						</g>
					</svg>
				</div>
				<p class="md:text-2xl font-semibold">{{ $t('home.complete_professional_career_portal') }}</p>
				<p class="text-[#8A8A8A] mt-3 md:text-lg">{{ $t('home.schools_can_build') }}</p>
			</div>
		</div>
		<div class="flex flex-col md:flex-row gap-y-5 md:gap-x-5 w-full my-5">
			<div class="bg-white p-5 rounded-xl w-full">
				<div
					class="bg-[#FAFAFA] border border-[#E3E3E3] w-10 h-10 rounded-full flex items-center justify-center mt-2 mb-5">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						<rect width="24" height="24" fill="none" />
						<g fill="none" stroke="currentColor" stroke-width="1.5">
							<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z" />
							<path stroke-linecap="round"
								d="m15.5 9l.172.172c1.333 1.333 2 2 2 2.828s-.667 1.495-2 2.828L15.5 15m-2.206-7.83L12 12l-1.294 4.83M8.5 9l-.171.172c-1.334 1.333-2 2-2 2.828s.666 1.495 2 2.828L8.5 15" />
						</g>
					</svg>
				</div>

				<p class="md:text-2xl font-semibold">{{ $t('home.connect_students_to_industry') }}</p>
				<p class="text-[#8A8A8A] mt-3 md:text-lg">{{ $t('home.schools_can_directly_connect') }}</p>
			</div>
			<div class="bg-white p-5 rounded-xl w-full">
				<div
					class="bg-[#FAFAFA] border border-[#E3E3E3] w-10 h-10 rounded-full flex items-center justify-center mt-2 mb-5">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						<rect width="24" height="24" fill="none" />
						<g fill="none" stroke="currentColor" stroke-width="1.5">
							<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z" />
							<path stroke-linecap="round"
								d="m15.5 9l.172.172c1.333 1.333 2 2 2 2.828s-.667 1.495-2 2.828L15.5 15m-2.206-7.83L12 12l-1.294 4.83M8.5 9l-.171.172c-1.334 1.333-2 2-2 2.828s.666 1.495 2 2.828L8.5 15" />
						</g>
					</svg>
				</div>
				<p class="md:text-2xl font-semibold">{{ $t('home.integrated_alumni_data') }}</p>
				<p class="text-[#8A8A8A] mt-3 md:text-lg">{{ $t('home.track_alumni_and_their_career_development') }}</p>
			</div>
			<div class="bg-white p-5 rounded-xl w-full">
				<div
					class="bg-[#FAFAFA] border border-[#E3E3E3] w-10 h-10 rounded-full flex items-center justify-center mt-2 mb-5">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						<rect width="24" height="24" fill="none" />
						<g fill="none" stroke="currentColor" stroke-width="1.5">
							<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z" />
							<path stroke-linecap="round"
								d="m15.5 9l.172.172c1.333 1.333 2 2 2 2.828s-.667 1.495-2 2.828L15.5 15m-2.206-7.83L12 12l-1.294 4.83M8.5 9l-.171.172c-1.334 1.333-2 2-2 2.828s.666 1.495 2 2.828L8.5 15" />
						</g>
					</svg>
				</div>
				<p class="md:text-2xl font-semibold">{{ $t('home.full_support_and_guidance') }}</p>
				<p class="text-[#8A8A8A] mt-3 md:text-lg">{{ $t('home.career_support_provides_comprehensive') }}</p>
			</div>
		</div>
	</div>

	<!-- Section 5 -->
	<div class="p-5 md:p-20 flex flex-col items-center">
		<p class="text-2xl md:text-4xl md:leading-15 font-semibold text-center">{{ $t('home.confused_about_choosing_service') }}</p>
		<p class="md:text-lg text-center text-[#4B4B4B] my-5">{{ $t('home.in_addition_to_supporting') }}</p>

		<div class="flex flex-col md:flex-row gap-y-5 md:gap-x-5 w-full mt-5">
			<div class="bg-white border border-[#E3E3E3] p-5 rounded-xl w-full flex flex-col items-center">
				<div
					class="bg-[#FAFAFA] border border-[#E3E3E3] w-10 h-10 rounded-full flex items-center justify-center mt-2 mb-5">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						<rect width="24" height="24" fill="none" />
						<g fill="none" stroke="currentColor" stroke-width="1.5">
							<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z" />
							<path stroke-linecap="round"
								d="m15.5 9l.172.172c1.333 1.333 2 2 2 2.828s-.667 1.495-2 2.828L15.5 15m-2.206-7.83L12 12l-1.294 4.83M8.5 9l-.171.172c-1.334 1.333-2 2-2 2.828s.666 1.495 2 2.828L8.5 15" />
						</g>
					</svg>
				</div>

				<p class="text-xl font-semibold text-center">{{ $t('home.join_the_school_portal') }}</p>
				<p class="text-[#8A8A8A] my-3 text-center" style="font-size: 18px;">{{ $t('home.find_a_service_that_suits_your_needs') }}</p>

				<a href="https://cdc.career.support/join" target="_blank" class="custom-button pill my-4">{{ $t('home.register_now') }}</a>
			</div>
			<div class="bg-white border border-[#E3E3E3] p-5 rounded-xl w-full flex flex-col items-center">
				<div
					class="bg-[#FAFAFA] border border-[#E3E3E3] w-10 h-10 rounded-full flex items-center justify-center mt-2 mb-5">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						<rect width="24" height="24" fill="none" />
						<g fill="none" stroke="currentColor" stroke-width="1.5">
							<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z" />
							<path stroke-linecap="round"
								d="m15.5 9l.172.172c1.333 1.333 2 2 2 2.828s-.667 1.495-2 2.828L15.5 15m-2.206-7.83L12 12l-1.294 4.83M8.5 9l-.171.172c-1.334 1.333-2 2-2 2.828s.666 1.495 2 2.828L8.5 15" />
						</g>
					</svg>
				</div>
				<p class="text-xl font-semibold text-center">{{ $t('home.free_consultation') }}</p>
				<p class="text-[#8A8A8A] my-3 text-center" style="font-size: 18px;">{{ $t('home.our_school_consultant_is_ready_to_help_you') }}</p>

				<a href="http://wa.me/6281315938540" target="_blank" class="custom-button pill my-4">{{ $t('home.contact_us') }}</a>
			</div>
		</div>
	</div>

	<!-- Section 6 -->
	<div class="p-5 md:p-20 flex flex-col md:flex-row items-center gap-x-10">
		<div class="md:w-[50%]">
			<p class="text-2xl md:text-4xl md:leading-15 font-semibold text-center md:text-left">{{ $t('home.boost_your_skills') }}</p>
			<p class="text-lg text-[#4B4B4B] my-5 text-center md:text-left">{{ $t('home.skillhub_description') }}</p>

			<div class="flex justify-center md:justify-start my-5">
				<a href="https://skillhub.id/" target="_blank" class="custom-button">{{ $t('home.learn_more') }}</a>
			</div>

			<div class="flex flex-col gap-y-6 mt-3">
				<div class="custom-list-tile">
					<div class="rounded-full w-6 h-3 md:w-3 md:h-3 bg-[#ED1966] mx-2" style=""></div>
					<span class="text-[#171717] text-xl">{{ $t('home.material_tailored') }}</span>
				</div>
				<div class="custom-list-tile">
					<div class="rounded-full w-5 h-3 md:w-3 md:h-3 bg-[#ED1966] mx-2"></div>
					<span class="text-[#171717] text-xl">{{ $t('home.access_anytime') }}</span>
				</div>
				<div class="custom-list-tile">
					<div class="rounded-full w-6 h-3 md:w-3 md:h-3 bg-[#ED1966] mx-2"></div>
					<span class="text-[#171717] text-xl">{{ $t('home.additional_skills') }}</span>
				</div>
				<div class="custom-list-tile">
					<div class="rounded-full w-5.5 h-3 md:w-3 md:h-3 bg-[#ED1966] mx-2"></div>
					<span class="text-[#171717] text-xl">{{ $t('home.get_certificate') }}</span>
				</div>
				<div class="custom-list-tile">
					<div class="rounded-full w-5.5 h-3 md:w-3 md:h-3 bg-[#ED1966] mx-2"></div>
					<span class="text-[#171717] text-xl">{{ $t('home.skills_certificates_recorded') }}</span>
				</div>
			</div>
		</div>
		<div class="md:w-[50%] mt-10 md:mt-0">
			<img src="@/assets/images/skillhub.png" alt="skillhub image" class="rounded-xl">
		</div>
	</div>

	<!-- Section 7 -->
	 <div class="w-full bg-[#EDF3F9] p-5 md:p-20 flex flex-col items-center">
		<p class="text-2xl md:text-4xl md:leading-15 font-semibold text-center">{{ $t('home.connecting_students_with_world_of_work') }}</p>
		<p class="md:text-lg text-center text-[#4B4B4B] my-5">{{ $t('home.career_support_actively_supports') }}</p>

		<div class="flex items-center gap-x-2 md:gap-x-5">
			<button class="arrow-button" @click="previousSlide">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<rect width="24" height="24" fill="none" />
					<path fill="currentColor" fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
				</svg>
			</button>
			<div class="flex items-center justify-center gap-x-5 mt-5">
				<!-- Mobile: show only 1 card -->
				<div class="custom-card w-[250px] h-[265px] md:hidden" :key="currentSlide">
					<img class="image-container" :src="section7CardsContent[currentSlide]?.img" :alt="section7CardsContent[currentSlide]?.title" />

					<div class="flex items-center text-[#818C9F] my-2 md:my-5">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
							<rect width="24" height="24" fill="none" />
							<path fill="currentColor" fill-rule="evenodd" d="M7 1.75a.75.75 0 0 1 .75.75v.763c.662-.013 1.391-.013 2.194-.013h4.112c.803 0 1.532 0 2.194.013V2.5a.75.75 0 0 1 1.5 0v.827q.39.03.739.076c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87q.074.562.107 1.23a.75.75 0 0 1 .019.46c.027.801.027 1.712.027 2.743v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.031 0-1.942.027-2.744a.75.75 0 0 1 .02-.46q.032-.667.106-1.229c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238q.35-.046.739-.076V2.5A.75.75 0 0 1 7 1.75m-4.237 8c-.013.653-.013 1.396-.013 2.25v2c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2c0-.854 0-1.597-.013-2.25zm18.405-1.5H2.832q.024-.284.058-.54c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009q.034.255.058.539" clip-rule="evenodd" />
						</svg>
						<span class="ml-2">2026</span>
					</div>

					<p class="font-medium text-[#08151E]">{{ section7CardsContent[currentSlide]?.title }}</p>
				</div>

				<!-- Desktop: show 3 cards -->
				<div class="custom-card w-[350px] h-[352px] hidden md:block" v-for="index in [0, 1, 2]" :key="currentSlide + index">
					<img class="image-container" :src="section7CardsContent[currentSlide + index]?.img" :alt="section7CardsContent[currentSlide + index]?.title" />

					<div class="flex items-center text-[#818C9F] my-2 md:my-5">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
							<rect width="24" height="24" fill="none" />
							<path fill="currentColor" fill-rule="evenodd" d="M7 1.75a.75.75 0 0 1 .75.75v.763c.662-.013 1.391-.013 2.194-.013h4.112c.803 0 1.532 0 2.194.013V2.5a.75.75 0 0 1 1.5 0v.827q.39.03.739.076c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87q.074.562.107 1.23a.75.75 0 0 1 .019.46c.027.801.027 1.712.027 2.743v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.031 0-1.942.027-2.744a.75.75 0 0 1 .02-.46q.032-.667.106-1.229c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238q.35-.046.739-.076V2.5A.75.75 0 0 1 7 1.75m-4.237 8c-.013.653-.013 1.396-.013 2.25v2c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2c0-.854 0-1.597-.013-2.25zm18.405-1.5H2.832q.024-.284.058-.54c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009q.034.255.058.539" clip-rule="evenodd" />
						</svg>
						<span class="ml-2">2026</span>
					</div>

					<p class="text-lg font-medium text-[#08151E]">{{ section7CardsContent[currentSlide + index]?.title }}</p>
				</div>
			</div>
			<button class="arrow-button" @click="nextSlide">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<rect width="24" height="24" fill="none" />
					<path fill="currentColor" fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
				</svg>
			</button>
		</div>
	</div>

	<!-- Section 8 -->
	 <div class="w-full bg-[#195699] p-5 md:p-20 flex flex-col items-center">
		<p class="text-2xl md:text-4xl md:leading-15 font-semibold text-white text-center">{{ $t('home.career_success_stories') }}</p>
		<p class="md:text-lg text-[#4B4B4B] my-5 text-white text-center">{{ $t('home.see_how_career_support_helps') }}</p>

		<div class="flex items-center gap-x-3 md:gap-x-5 md:mb-5">
			<button class="button-category" :class="{ active: activeCategory === 'problem' }" @click="setCategory('problem')">
				{{ $t('home.problem') }}
			</button>
			<button class="button-category" :class="{ active: activeCategory === 'solution' }" @click="setCategory('solution')">
				{{ $t('home.solution') }}
			</button>
			<button class="button-category" :class="{ active: activeCategory === 'results_impact' }" @click="setCategory('results_impact')">
				{{ $t('home.results_impact') }}
			</button>
		</div>

		<div class="flex items-center gap-x-3 md:gap-x-5 mt-5">
			<button class="arrow-button" @click="previousSection8Slide">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<rect width="24" height="24" fill="none" />
					<path fill="currentColor" fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
				</svg>
			</button>
			<div class="bg-white flex flex-col md:flex-row align-start p-3 md:p-7 rounded-xl w-full gap-x-7 h-[500px] md:h-[308px]">
				<img :src="currentSection8Content?.img" alt="" class="w-[200px]">

				<div class="overflow-y-auto scrollbar-hide">
					<p class="text-3xl font-medium text-[#08151E] mb-3 md:mb-5">{{ currentSection8Content?.title }}</p>
					<p class="text-2xl text-[#4682C4] uppercase">{{ activeCategoryLabel }}</p>
					<p class="text-[#504C4C] mt-3 md:mt-5">{{ $t(currentSection8Content.description) }}</p>
				</div>
			</div>
			<button class="arrow-button" @click="nextSection8Slide">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<rect width="24" height="24" fill="none" />
					<path fill="currentColor" fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
				</svg>
			</button>
		</div>
	</div>

	<!-- Section 9 -->
	<div class="p-5 md:p-20">
		<div class="pb-5">
			<p class="text-2xl md:text-4xl md:leading-15 font-semibold text-center">{{ $t('home.institutional_partners') }}</p>
			<p class="md:text-lg text-[#4B4B4B] my-3 md:my-5 text-center">{{ $t('home.institutions_collaborated') }}</p>

			<div class="flex items-center flex-wrap justify-evenly">
				<img v-for="n in Array.from({ length: 8 }, (v, i) => i + 1)" :key="n"
					:src="getImage('institutional_partner', n)" :alt="`partner_img_${n}`" class="w-[150px] h-[150px]">
			</div>
		</div>
		<div class="py-5">
			<p class="text-2xl md:text-4xl md:leading-15 font-semibold text-center">{{ $t('home.school_partners') }}</p>
			<p class="md:text-lg text-[#4B4B4B] my-3 md:my-5 text-center">{{ $t('home.schools_collaborated') }}</p>

			<div class="flex items-center flex-wrap justify-evenly">
				<img v-for="n in Array.from({ length: 7 }, (v, i) => i + 1)" :key="n"
					:src="getImage('school_partner', n)" :alt="`partner_img_${n}`" class="w-[150px] h-[150px]">
			</div>
		</div>
		<div>
			<p class="text-2xl md:text-4xl md:leading-15 font-semibold text-center">{{ $t('home.company_partners') }}</p>
			<p class="md:text-lg text-[#4B4B4B] my-3 md:my-5 text-center">{{ $t('home.companies_collaborated') }}</p>

			<div class="flex items-center flex-wrap justify-evenly">
				<img v-for="n in Array.from({ length: 7 }, (v, i) => i + 1)" :key="n"
					:src="getImage('company_partner', n)" :alt="`partner_img_${n}`" class="w-[150px] h-[150px]">
			</div>
		</div>
	</div>

	<!-- Section 10 -->
	<div class="w-full bg-[#195699] p-5 md:p-20 flex flex-col items-center">
		<p class="text-2xl md:text-4xl md:leading-15 font-semibold text-white text-center">{{ $t('home.dont_miss_upcoming_events') }}!</p>
		<p class="md:text-lg text-[#4B4B4B] my-3 md:my-5 text-white text-center">{{ $t('home.career_support_regularly_organizes') }}</p>

		<div class="flex flex-col md:flex-row items-center justify-center gap-y-3 md:gap-y-0 md:gap-x-5 mt-5">
			<div class="custom-card w-[350px] md:h-[452px]">
				<div class="image-container bg-[#D9D9D9]"></div>

				<p class="text-xl mt-5 mb-3">Job Fair 2026</p>
				<div class="flex items-center text-[#818C9F] mb-3">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						<rect width="24" height="24" fill="none" />
						<path fill="currentColor" fill-rule="evenodd" d="M7 1.75a.75.75 0 0 1 .75.75v.763c.662-.013 1.391-.013 2.194-.013h4.112c.803 0 1.532 0 2.194.013V2.5a.75.75 0 0 1 1.5 0v.827q.39.03.739.076c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87q.074.562.107 1.23a.75.75 0 0 1 .019.46c.027.801.027 1.712.027 2.743v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.031 0-1.942.027-2.744a.75.75 0 0 1 .02-.46q.032-.667.106-1.229c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238q.35-.046.739-.076V2.5A.75.75 0 0 1 7 1.75m-4.237 8c-.013.653-.013 1.396-.013 2.25v2c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2c0-.854 0-1.597-.013-2.25zm18.405-1.5H2.832q.024-.284.058-.54c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009q.034.255.058.539" clip-rule="evenodd" />
					</svg>
					<span class="ml-2">Monday, 20 January 2026</span>
				</div>
				<div class="flex items-center text-[#818C9F] mb-3">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						<rect width="24" height="24" fill="none" />
						<path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd" />
					</svg>
					<span class="ml-2">10:00 - 11:00</span>
				</div>

				<button class="button sold-out mt-5">
					<span>Sold Out</span>
				</button>
			</div>
			<div class="custom-card w-[350px] md:h-[452px]">
				<div class="image-container bg-[#D9D9D9]"></div>

				<p class="text-xl mt-5 mb-3">Webinar CV Klinik untuk Mahasiswa</p>
				<div class="flex items-center text-[#818C9F] mb-3">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						<rect width="24" height="24" fill="none" />
						<path fill="currentColor" fill-rule="evenodd" d="M7 1.75a.75.75 0 0 1 .75.75v.763c.662-.013 1.391-.013 2.194-.013h4.112c.803 0 1.532 0 2.194.013V2.5a.75.75 0 0 1 1.5 0v.827q.39.03.739.076c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87q.074.562.107 1.23a.75.75 0 0 1 .019.46c.027.801.027 1.712.027 2.743v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.031 0-1.942.027-2.744a.75.75 0 0 1 .02-.46q.032-.667.106-1.229c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238q.35-.046.739-.076V2.5A.75.75 0 0 1 7 1.75m-4.237 8c-.013.653-.013 1.396-.013 2.25v2c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2c0-.854 0-1.597-.013-2.25zm18.405-1.5H2.832q.024-.284.058-.54c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009q.034.255.058.539" clip-rule="evenodd" />
					</svg>
					<span class="ml-2">Monday, 20 January 2026</span>
				</div>
				<div class="flex items-center text-[#818C9F] mb-3">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						<rect width="24" height="24" fill="none" />
						<path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd" />
					</svg>
					<span class="ml-2">10:00 - 11:00</span>
				</div>

				<button class="button join mt-5">
					<span>Join</span>
				</button>
			</div>
			<div class="custom-card w-[350px] md:h-[452px]">
				<div class="image-container bg-[#D9D9D9]"></div>

				<p class="text-xl mt-5 mb-3">Webinar 01: Tips interview agar dilirik HR</p>
				<div class="flex items-center text-[#818C9F] mb-3">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						<rect width="24" height="24" fill="none" />
						<path fill="currentColor" fill-rule="evenodd" d="M7 1.75a.75.75 0 0 1 .75.75v.763c.662-.013 1.391-.013 2.194-.013h4.112c.803 0 1.532 0 2.194.013V2.5a.75.75 0 0 1 1.5 0v.827q.39.03.739.076c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87q.074.562.107 1.23a.75.75 0 0 1 .019.46c.027.801.027 1.712.027 2.743v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.031 0-1.942.027-2.744a.75.75 0 0 1 .02-.46q.032-.667.106-1.229c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238q.35-.046.739-.076V2.5A.75.75 0 0 1 7 1.75m-4.237 8c-.013.653-.013 1.396-.013 2.25v2c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2c0-.854 0-1.597-.013-2.25zm18.405-1.5H2.832q.024-.284.058-.54c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009q.034.255.058.539" clip-rule="evenodd" />
					</svg>
					<span class="ml-2">Monday, 20 January 2026</span>
				</div>
				<div class="flex items-center text-[#818C9F] mb-3">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						<rect width="24" height="24" fill="none" />
						<path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd" />
					</svg>
					<span class="ml-2">10:00 - 11:00</span>
				</div>

				<button class="button join mt-5">
					<span>Join</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { reactive, ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const getImage = (path: string, n: number) => {
	return new URL(`../assets/images/${path}/image_${n}.png`, import.meta.url).href
}

const currentSlide = ref(0)

const nextSlide = () => {
	if (currentSlide.value >= section7CardsContent.length - 3) {
		currentSlide.value = 0
	} else {
		currentSlide.value++
	}
}

const previousSlide = () => {
	if (currentSlide.value <= 0) {
		currentSlide.value = section7CardsContent.length - 3
	} else {
		currentSlide.value--
	}
}

const scrollToSection = (sectionId: string) => {
	const section = document.getElementById(sectionId)
	if (section) {
		section.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}
}

// Section 8 carousel & category
const activeCategory = ref<'problem' | 'solution' | 'results_impact'>('problem')
const currentSection8Slide = ref(0)

const activeCategoryLabel = computed(() => {
	const labels: Record<string, string> = {
		'problem': t('home.problem'),
		'solution': t('home.solution'),
		'results_impact': t('home.results_impact')
	}
	return labels[activeCategory.value]
})

const currentSection8Content = computed(() => {
	return section8CardsContent[activeCategory.value][currentSection8Slide.value]
})

const setCategory = (category: 'problem' | 'solution' | 'results_impact') => {
	activeCategory.value = category
	currentSection8Slide.value = 0
}

const nextSection8Slide = () => {
	const maxIndex = section8CardsContent[activeCategory.value].length - 1
	if (currentSection8Slide.value >= maxIndex) {
		currentSection8Slide.value = 0
	} else {
		currentSection8Slide.value++
	}
}

const previousSection8Slide = () => {
	const maxIndex = section8CardsContent[activeCategory.value].length - 1
	if (currentSection8Slide.value <= 0) {
		currentSection8Slide.value = maxIndex
	} else {
		currentSection8Slide.value--
	}
}

const section7CardsContent = reactive([
	{"title": "SMK YAJ Depok - Job Fair 2024", "img": new URL(`../assets/images/section7/1.png`, import.meta.url).href},
	{"title": "SMKN 4 Jakarta - Job & Edu Fair 2024", "img": new URL(`../assets/images/section7/2.png`, import.meta.url).href},
	{"title": "SMKN 33 Jakarta - Exploring Tourism Careers", "img": new URL(`../assets/images/section7/3.png`, import.meta.url).href},
	{"title": "SMKN 69 Jakarta - Job Fair Membara 2024", "img": new URL(`../assets/images/section7/4.png`, import.meta.url).href},
	{"title": "SMKS Assalam Depok - Bursa Kerja 2024", "img": new URL(`../assets/images/section7/5.png`, import.meta.url).href},
	{"title": "Universitas Majalengka - UNMA Career Expo 2024", "img": new URL(`../assets/images/section7/6.png`, import.meta.url).href},
	{"title": "SMK Islam PB Soedirman 2 - Career Day 2024", "img": new URL(`../assets/images/section7/7.png`, import.meta.url).href},
	{"title": "SMK Telkom Bandung - Job Fair 2024", "img": new URL(`../assets/images/section7/8.png`, import.meta.url).href},
])

const section8CardsContent = reactive({
	"problem": [
		{"img": new URL(`../assets/images/section8/1.png`, import.meta.url).href, "title": "SMK Nasional Depok", "description": "home.section_8_desc.problem.0"},
		{"img": new URL(`../assets/images/section8/2.png`, import.meta.url).href, "title": "SMK Prestasi Prima", "description": "home.section_8_desc.problem.1"},
		{"img": new URL(`../assets/images/section8/3.png`, import.meta.url).href, "title": "SMK Islam Malahayati", "description": "home.section_8_desc.problem.2"},
		{"img": new URL(`../assets/images/section8/4.png`, import.meta.url).href, "title": "Universitas Mikroskil", "description": "home.section_8_desc.problem.3"},
	],
	"solution": [
		{"img": new URL(`../assets/images/section8/1.png`, import.meta.url).href, "title": "SMK Nasional Depok", "description": "home.section_8_desc.solution.0"},
		{"img": new URL(`../assets/images/section8/2.png`, import.meta.url).href, "title": "SMK Prestasi Prima", "description": "home.section_8_desc.solution.1"},
		{"img": new URL(`../assets/images/section8/3.png`, import.meta.url).href, "title": "SMK Islam Malahayati", "description": "home.section_8_desc.solution.2"},
		{"img": new URL(`../assets/images/section8/4.png`, import.meta.url).href, "title": "Universitas Mikroskil", "description": "home.section_8_desc.solution.3"},
	],
	"results_impact": [
		{"img": new URL(`../assets/images/section8/1.png`, import.meta.url).href, "title": "SMK Nasional Depok", "description": "home.section_8_desc.results_impact.0"},
		{"img": new URL(`../assets/images/section8/2.png`, import.meta.url).href, "title": "SMK Prestasi Prima", "description": "home.section_8_desc.results_impact.1"},
		{"img": new URL(`../assets/images/section8/3.png`, import.meta.url).href, "title": "SMK Islam Malahayati", "description": "home.section_8_desc.results_impact.2"},
		{"img": new URL(`../assets/images/section8/4.png`, import.meta.url).href, "title": "Universitas Mikroskil", "description": "home.section_8_desc.results_impact.3"},
	],
})
</script>

<style scoped>
.custom-button {
	background-color: #ED1966;
	color: white;
	padding: 0.5rem 1.75rem;
	border-radius: 0.5rem;
	cursor: pointer;
	transition: background-color 0.3s ease;
	font-size: 20px;
}

.custom-button:hover {
	background-color: #C01452;
}

.custom-button.pill {
	border-radius: 9999px;
}

.custom-list-tile {
	border: 1px solid #e3e3e3;
	padding: 1rem;
	border-radius: 1.25rem;

	display: flex;
	align-items: center;
	gap: 1rem;
}

.custom-card {
	background-color: white;
	padding: 1rem;
	border-radius: 1.25rem;
}

.custom-card .image-container {
	width: 100%;
	height: 200px;
	border-radius: 1rem;
	object-fit: cover;
}

@media screen and (max-width: 768px) {
	.custom-card .image-container {
		height: 150px;
	}
}

.custom-card .button {
	width: 100%;
	border-radius: 1rem;

	padding: 0.5rem 1rem;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

.custom-card .button.sold-out {
	border: 1px solid #D8E4ED;
	background-color: white;
}

.custom-card .button.sold-out:hover {
	background-color: #F0F4F8;
}

.custom-card .button.join {
	background-color: #4682C4;
	color: white;
}

.custom-card .button.join:hover {
	background-color: #356899;
}

.arrow-button {
	background-color: white;
	border-radius: 1rem;
	border: 1px solid #E3E3E3;
	padding: 1rem;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

.arrow-button:hover {
	background-color: #F0F4F8;
}

.button-category {
	background-color: white;
	border-radius: 1rem;
	border: 1px solid #E3E3E3;
	color: #504C4C;

	padding: 1rem 2rem;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

@media screen and (max-width: 768px) {
	.button-category {
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
	}	
}

.button-category:hover {
	background-color: #F0F4F8;
}

.button-category.active {
	color: #ED1966;
}

.scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
	display: none;
}
</style>