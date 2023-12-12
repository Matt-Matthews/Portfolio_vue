<template>
    <div class="flex-row flex mx-5 mt-3 text-white justify-between items-center">
        <div class="text-white primary-bg-color h-9 w-9 rounded-lg items-center justify-center flex">
            M.
        </div>
        <nav class="flex gap-3 items-center">
            <div>
                <a href="#home">Home</a>
            </div>
            <div>
                <a href="#about">About</a>
            </div>
            <div>
                <a href="#projects">Projects</a>
            </div>
            <div>
                <a href="#contact">Contact</a>
            </div>
        </nav>
        <div class="flex gap-3 items-center">
            <AkTwitterFill class="icon text-md" />
            <AkFacebookFill class="icon text-md" />
            <AkLinkedinBoxFill class="icon text-md" />
            <AkGithubFill class="icon text-md" />
        </div>
    </div>

</template>

<script setup>
import { AkLinkedinBoxFill, AkTwitterFill, AkFacebookFill, AkGithubFill } from "@kalimahapps/vue-icons";
</script>