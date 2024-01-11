<template>
  <div class="flex gap-x-7 md:gap-x-3 items-center">
    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FMatthewsPaku" target="_blank" @click="getSocialAnalytics">
      <AkTwitterFill class="icon text-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200" />
    </a>
    <a href="https://www.facebook.com/matthews.paku.3" target="_blank" @click="getSocialAnalytics">
      <AkFacebookFill class="icon text-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200" />
    </a>
    <a href="https://www.linkedin.com/in/mathews-paku-840386245/" target="_blank" @click="getSocialAnalytics">
      <AkLinkedinBoxFill class="icon text-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200" />
    </a>
    <a href="https://github.com/Matt-Matthews" target="_blank" @click="getSocialAnalytics">
      <AkGithubFill class="icon text-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200" />
    </a>
  </div>
</template>
<script setup>
import {
  AkLinkedinBoxFill,
  AkTwitterFill,
  AkFacebookFill,
  AkGithubFill,
} from "@kalimahapps/vue-icons";
import {getAnalytics} from '../utils/firebaseUtils'

const getSocialAnalytics = () => {
  getAnalytics('Social_visit')
}
</script>