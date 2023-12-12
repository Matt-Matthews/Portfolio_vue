<template>
  <div class="flex-row flex mx-5 mt-3 text-white justify-between items-center">
    <div
      class="text-white primary-bg-color h-9 w-9 rounded-lg items-center justify-center flex"
    >
      M.
    </div>
    <nav class="flex gap-3 items-center">
      <div v-for="(link, index) in links" :key="link">
        <a
          class="capitalize"
          :class="index === isActive ? 'primary-color' : 'text-white'"
          @click="() => handlePageChange(index)"
          :href="`#${link}`"
          >{{ link }}</a
        >
      </div>
    </nav>
    <SocialMedia />
  </div>
</template>

<script setup>
import {SocialMedia} from './index.js'
import { storeToRefs } from "pinia";
import { useGlobalStore } from "../store/globalStore.js";

const {isActive} = storeToRefs(useGlobalStore());
const {links, handlePageChange} = useGlobalStore();
</script>
