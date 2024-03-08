<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("johndoe@mail.com");
const password = ref("@#!@#asdf1231!_!@#");

function login() {
  router.push("/dashboard");
}
</script>

<template>
  <div class="flex items-center justify-center w-screen h-screen">
    <div class="px-4 lg:py-12">
      <div class="lg:gap-4 lg:flex">
        <div class="flex flex-col items-center justify-center md:py-24 lg:py-32">
          <h1 class="font-bold text-blue-600 text-9xl">404</h1>
          <p class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span class="text-red-500">Oops!</span> Page introuvable
          </p>
          <p class="mb-8 text-center text-gray-500 md:text-lg">
            Cette page est introuvable ou n'existe pas.
          </p>
          <router-link
            to="/"
            class="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
            >Retour à la page d'accueil >
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
