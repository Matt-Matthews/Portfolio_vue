<template>
<div  class="absolute top-3 right-5 bg-black z-10 md:hidden py-5 px-3 rounded-lg">
    <nav class=" gap-y-4 flex-col flex">
        <div class="items-center flex-col flex " v-for="(link, index) in links" :key="link">
          <a
            class="capitalize"
            :class="index === isActive ? 'primary-color' : 'text-white'"
            @click="() => handlePageChange(index)"
            :href="`#${link}`"
            >{{ link }}</a
          >
          <div class=" h-0.5 w-4 rounded -mt-1" :class="index === isActive ? 'primary-bg-color' : 'bg-transparent'" />
        </div>
      </nav>
      <div class="mt-6">
        <SocialMedia />
      </div>
</div>
</template>

<script setup>
import {SocialMedia} from './index.js'
import { storeToRefs } from "pinia";
import { useGlobalStore } from "../store/globalStore.js";

const { isActive } = storeToRefs(useGlobalStore());
const { links, handlePageChange } = useGlobalStore();
</script>