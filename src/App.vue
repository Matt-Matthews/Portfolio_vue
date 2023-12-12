<script setup>
// import HomeView from './Views/HomeView.vue'
import { PageIndicator } from "./components/index.js";
import { AboutView, HomeView, ContactView, ProjectsView } from "./views/index.js";
</script>

<template>
  <div class="bacground-color flex justify-center scroll-smooth">
    <div class="max-w-screen-2xl h-screen font-serif relative scroll-smooth">
      <PageIndicator />
      <HomeView />
      <AboutView />
      <ProjectsView />
      <ContactView />
    </div>
  </div>
</template>
