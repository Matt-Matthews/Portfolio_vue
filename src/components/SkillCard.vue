<template>
  <div class="w-full mr-2">
    <h1 class="mt-2 text-xs md:text-sm font-bold primary-color">{{ title }}</h1>
    <ul class="list-disc ml-5 md:ml-7 text-xs md:text-sm md:flex gap-y-2 md:flex-row md:flex-wrap md:gap-x-8 lg:gap-y-4 mt-1">
      <li v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
    </ul>
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
