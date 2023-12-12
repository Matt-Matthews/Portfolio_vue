<script setup>
import {HeroBio, NavBar} from '../components/index.js'
</script>
<template>
    <div class="container h-full columns-1" id='home'>
        <NavBar />
        <div class="flex items-center mt-16 ml-20 h-5/6 w-11/12 ">
            <HeroBio />
            <div class="text-red-400">
                Image
            </div>
        </div>
    </div>
</template>