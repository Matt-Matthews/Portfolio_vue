<template>
  <div
    class="flex justify-between md:fixed lg:fixed w-full px-5 pt-3 text-white bg-black items-center top-0 z-50 relative"
  >
    <div
      class="text-white primary-bg-color h-9 w-9 rounded-lg items-center justify-center flex"
    >
      M.
    </div>
    <nav class="hidden md:flex lg:flex gap-3 items-center">
      <div class="items-center flex-col flex" v-for="(link, index) in links" :key="link">
        <a
          class="capitalize"
          :class="index === isActive ? 'primary-color' : 'text-white'"
          @click="() => handlePageChange(index)"
          :href="`#${link}`"
          >{{ link }}</a
        >
        <div
          class="h-0.5 w-4 rounded -mt-1"
          :class="index === isActive ? 'primary-bg-color' : 'bg-transparent'"
        />
      </div>
    </nav>
    <div class="hidden md:flex">
      <SocialMedia />
    </div>
    <div
      class="text-white primary-bg-color h-9 w-9 lg:hidden md:hidden rounded-lg items-center justify-center flex"
      @click="viewMenu"
    >
      <ClMenuAlt01 class="text-2xl" />
    </div>
    <MobileNavMenu v-click-outside="closeMenu" v-if="isOpen" />
  </div>
</template>

<script setup>
import { SocialMedia } from "./index.js";
import { storeToRefs } from "pinia";
import { useGlobalStore } from "../store/globalStore.js";
import { ClMenuAlt01 } from "@kalimahapps/vue-icons";
import { MobileNavMenu } from "./index.js";
import {ref} from 'vue'

const { isActive, isOpen, isButtonClicked } = storeToRefs(useGlobalStore());
const { links, handlePageChange, closeMenu } = useGlobalStore();


const viewMenu = () => {
  isOpen.value = true;
  isButtonClicked.value = true;
}


const vClickOutside = {
  mounted(el, binding) {
    el.__ClickOutsideHandler__ = (event)=>{
      if(!(el === event.target || el.contains(event.target))){
        binding.value(event)
      }
    }
    document.body.addEventListener('click', el.__ClickOutsideHandler__)
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.__ClickOutsideHandler__)
  },
}
</script>
