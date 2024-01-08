<script setup>
import { NavBar } from "./components/index.js";
import { AboutView, HomeView, ContactView, ProjectsView } from "./views";
import bg_image from "./assets/bg_image.jpg";
</script>

<template>
  <div
    class="bacground-color flex justify-center scroll-smooth"
  >
    <div
      class="max-w-screen-2xl bg-image max-h-screen main-container w-full overflow-x-hidden h-screen font-serif relative scroll-smooth"
    >
      <!-- <img :src="bg_image" alt="Bacground image" class="absolut w-full top-0 -z-10" /> -->
      <NavBar />
      <HomeView />
      <AboutView />
      <ProjectsView />
      <ContactView />
    </div>
  </div>
</template>
