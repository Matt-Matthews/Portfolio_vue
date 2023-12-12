<template>
  <div class="text-white fixed flex flex-col items-center gap-1 top-1/3 left-9">
    <VerticalLine />
    <a
      v-for="(link, index) in links"
      :key="link"
      @click="()=> handlePageChange(index)"
      :class="
        isActive !== index
          ? 'bg-slate-300'
          : isActive === 1
          ? 'bg-black'
          : 'primary-bg-color'
      "
      class="p-1 rounded"
      :href="`#${link}`"
    />
    <VerticalLine />
  </div>
</template>

<script setup>
import VerticalLine from "./VerticalLine.vue";
import { storeToRefs } from "pinia";
import { useGlobalStore } from "../store/globalStore.js";

const { isActive } = storeToRefs(useGlobalStore());
const { links, handlePageChange } = useGlobalStore();
</script>
