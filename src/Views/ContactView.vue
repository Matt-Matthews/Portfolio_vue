<template>
  <div
    class="min-h-full pt-10 md:pt-0 w-full flex flex-col text-white items-center justify-center relative"
    id="contact"
  >
    <div
      class=" mx-5 md:mx-0 w-4/5 md:w-1/2 md:h-3/4 rounded-lg backdrop-blur-md bg-white/10 border-t-2 border-l-2 border-gray-500"
    >
      <h1 class="text-white font-bold text-lg px-4 py-3">Be in contact.</h1>
      <div class="w-full flex flex-col items-center justify-center h-5/6">
        <input
          placeholder="Full name *"
          class="border-gray-500 border-2 bg-white/10 px-2 py-1 w-4/5 md:w-1/2 rounded-3xl text-white outline-none"
          type="text"
        />
        <br />
        <input
          placeholder="Email *"
          class="border-gray-500 border-2 bg-white/10 px-2 py-1 w-4/5 md:w-1/2 rounded-3xl text-white outline-none"
          type="email"
        />
        <br />
        <input
          placeholder="Contact number *"
          class="border-gray-500 border-2 bg-white/10 px-2 py-1 w-4/5 md:w-1/2 rounded-3xl text-white outline-none"
          type="tel"
        />
        <br />
        <textarea
          placeholder="Message"
          class="border-gray-500 border-2 bg-white/10 px-2 py-1  md:w-1/2 rounded-3xl text-white outline-none textarea"
          rows="8"
        />
        <button
          class="primary-bg-color mb-3  mt-5 py-2 md:py-1 lg:py-2 rounded-md cursor-pointer lg:w-40 w-32 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200"
        >
          Send
        </button>
      </div>
    </div>
    <div
      class="md:absolute mt-5 mb-3 md:mt-0 bottom-5 right-5 py-2 md:py-1 lg:py-2 rounded-md cursor-pointer primary-bg-color lg:w-40 w-32 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200"
    >
      <a
        href="https://drive.google.com/file/d/1eBQEmcCTdANC-FA2Z3UV3Oru67ENlVxy/view?usp=sharing"
        target="_blank"
      >
        Download CV
      </a>
    </div>
  </div>
</template>

<script setup>
import emailjs from 'emailjs-com'
import data from '../utils/config.json'

const sendEmail = (e) => {
    
}
</script>
