<template>
  <div class="w-full mr-2 ">
    <h1 class="mt-2 text-xs md:text-sm font-bold primary-color">{{ title }}</h1>
    <div class="ml-2 md:ml-2 text-xs md:text-sm flex gap-y-5 md:flex-row flex-wrap gap-x-2 md:gap-x-4 lg:gap-y-4 mt-1">
      <p class="backdrop-blur-md w-fit bg-white/10 border-t-2 border-l-2 border-gray-500 py-1 px-1.5 rounded-lg mt-3 md:mt-0" v-for="(skill, index) in skills" :key="index">{{ skill }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
});
</script>
