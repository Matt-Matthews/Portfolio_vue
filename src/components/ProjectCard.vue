<template>
<div class="backdrop-blur-md bg-white/10 border-t-2 border-l-2 border-gray-500 relative card-width md:flex gap-x-3 rounded-lg h-1/4 py-1 px-2 md:px-3 md:py-3">
    <img :src="project.imgUrl" alt="image" class="md:w-1/4 rounded-md">
    <div >
        <h2 class="md:font-bold text-sm">{{project.name}}</h2>
        <p class="mt-1 text-xs text-ellipsis md:text-sm hidden md:block">{{project.description}}</p>
        <div class="flex absolute md:bottom-3 bottom-2 md:right-2 items-center text-xs md:text-sm py-1  gap-x-2 primary-bg-color w-fit rounded-xl px-1 mt-4 md:mt-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
            <AkGithubFill />
            <a :href="project.gitLink">Github</a>
        </div>
    </div>
</div>
</template>

<script setup>
import {
  AkGithubFill,
} from "@kalimahapps/vue-icons";
const props = defineProps({
    project: {
        type: Object,
        required: true
    }
})
</script>