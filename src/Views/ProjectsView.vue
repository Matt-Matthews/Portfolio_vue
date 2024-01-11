<template>
  <div class="h-full columns-1 w-full px-5 pt-20" id="projects">
    <h1 class="text-white font-bold text-lg px-4 py-3">Projects</h1>
    <!-- <div class="h-5/6 text-white flex gap-x-1 md:gap-x-3 lg:gap-x-7 flex-wrap gap-y-2">
      <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
    </div>
    <div class="text-white md:mt-2 flex items-center justify-center">
      <div class="flex item-center gap-x-4"> 
        <div
          class="text-white primary-bg-color cursor-pointer h-9 w-9 rounded-lg items-center justify-center flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200"
        >
          <AkChevronLeft class="text-2xl" />
        </div>
        <div class="flex items-center">9 of 70</div>
        <div
          class="text-white cursor-pointer primary-bg-color h-9 w-9 rounded-lg items-center justify-center flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200"
         
        >
          <AkChevronRight class="text-2xl" />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { ProjectCard } from "../components";
import { useGlobalStore } from "../store/globalStore";
import {
  AkChevronLeft,
  AkChevronRight
} from "@kalimahapps/vue-icons";

const { projects } = useGlobalStore();
</script>
