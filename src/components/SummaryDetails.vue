<template>
  <div class="py-2 md:pb-4 text-center">
    <h1 class="text-lg md:text-4xl font-bold primary-color">{{heading}}</h1>
    <p class="text-xs md:text-sm">{{title}}</p>
  </div>
</template>

<script setup>
const props = defineProps({
    heading: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})
</script>
