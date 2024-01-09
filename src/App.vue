<script setup>
import { NavBar } from "./components/index.js";
import { AboutView, HomeView, ContactView, ProjectsView } from "./views";
import bg_image from './assets/bg_image.jpg'
</script>

<template>
  <div class="bacground-color flex justify-center scroll-smooth">
    <div class="max-w-screen-2xl bg-image max-h-screen w-full lg:overflow-hidden overflow-x-hidden md:overflow-hidden h-screen font-serif relative scroll-smooth">
      <NavBar />
      <HomeView />
      <AboutView />
      <ProjectsView />
      <ContactView />
    </div>
  </div>
</template>
