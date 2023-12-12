<script setup>
import {HeroBio, NavBar} from '../components/index.js'
import img from '../assets/image.png'
</script>
<template>
    <div class="view-bg-color h-full columns-1 view-bg-color" id='home'>
        <NavBar />
        <div class="flex items-center mt-16 ml-20 h-5/6 w-11/12 justify-between ">
            <HeroBio />
            <div class="text-red-400 w-1/2 flex justify-end items-center">
                <img :src="img" class="md:w-5/6 w-3/6" alt="Profile image" />
            </div>
        </div>
    </div>
</template>