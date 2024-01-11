<template>
  <div
    class=" animate__animated animate__jackInTheBox min-h-full md:max-h-full lg:max-h-full md:h-full lg:h-full w-full text-white columns-1 px-5 md:flex items-center"
    id="about"
  >
    <div class="primary-bg-color mt-2 rounded-xl h-1/2 md:h-4/6 lg:h-4/5">
      <img :src="image" rel="preload" alt="profile" class="h-full" />
    </div>
    <div
      class="md:w-4/6 md:mt-0 relative mt-4 md:ml-5 flex flex-col justify-start items-start md:h-4/6 lg:h-4/5"
    >
      <p class="md:text-xl text-md font-medium">
        Full-stack developer with 2+ years of experience crafting user-friendly and
        efficient software solutions. Proficient in Javascript, C#, and front-end
        frameworks, with a track record of delivering projects on time and within budget.
        Strong problem-solving skills and a relentless focus on user experience.
      </p>
      <!-- <Summary /> -->
      <div class="mt-3 md:max-h-4/5 lg:mt-10 w-full">
        <h1 class="md:text-xl text-md font-medium">Skills:</h1>
        <div class="list-disc w-full flex h-3/4 md:gap-3">
          <SkillCard title="" :skills="frontEndSkills" />
          <!-- <SkillCard title="Back end" :skills="backEndSkills" />
          <SkillCard title="Other" :skills="otherSkills" /> -->
        </div>
      </div>
      <div
        class="mt-5 mb-3 md:mt-8  left-0 py-2 md:py-1 lg:py-2 rounded-md cursor-pointer primary-bg-color lg:w-40 w-32 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200"
      >
        <a
          href="https://drive.google.com/file/d/1eBQEmcCTdANC-FA2Z3UV3Oru67ENlVxy/view?usp=sharing"
          target="_blank"
          @click="()=>getAnalytics('download_cv')"
        >
          Download CV
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import image from "../assets/image.png";
import { SkillCard, Summary } from "../components";
import { useGlobalStore } from "../store/globalStore";
import {getAnalytics} from '../utils/firebaseUtils'

const { frontEndSkills, backEndSkills, otherSkills } = useGlobalStore();
</script>
