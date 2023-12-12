<script setup>
// import HomeView from './Views/HomeView.vue'
import {PageIndicator}  from './components/index.js'
import {AboutView, HomeView, ContactView, ProjectsView} from './Views/index.js'
</script>

<template>
  <div class="container bacground-color h-screen font-serif relative scroll-smooth">
    <PageIndicator />
    <HomeView />
    <AboutView />
    <ProjectsView />
    <ContactView />
  </div>
</template>
