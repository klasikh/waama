<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import ActualityService from "../services/actuality.service";
import ResponseData from "../types/ResponseData";

let actualities = ref<any[]>([]);
let loadingActus = ref(false);
// let paginate = ref(["languages"]);

function displayIm(mimeType: any, buffer: any) {
  let b64 = new Buffer(buffer).toString("base64");

  const image = `data:${mimeType};base64,${b64}`;
  return image;
}

function getAllActualities() {
  ActualityService.getAll()
    .then((response: ResponseData) => {
      // console.log(response.data);
      actualities.value = response.data;
      loadingActus.value = false;
    })
    .catch((e: Error) => {
      console.log(e);
    });
}

onMounted(() => {
  getAllActualities();
});
</script>

<template>
  <div class="my-20 mx-20" style="margin-top: 130px">
    <!-- <section>
      <div class="col col-4">
        <input
          type="text"
          id="search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Rechercher..."
          required
        />
      </div>
    </section> -->
    <section class="bg-white mb-14">
      <div class="grid gap-4 mt-10">
        <div class="flex">
          <h2 class="text-4xl tracking-tight font-extrabold text-gray-900">
            Découvrez tous nos actualités
          </h2>
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mt-3 ml-3"
          >
            <circle cx="10" cy="10.1702" r="10" fill="#F71735" />
          </svg>
        </div>
        <p class="mb-4 text-justify">Ici nous vous présentons toutes nos actualités</p>
      </div>
      <!-- <div class="">
        <paginate name="languages" :list="actualities" :per="2">
          <li v-for="lang in paginated('languages')" :key="lang">
            {{ lang + " ifif" }}
          </li>
          <p>Toto est au cours...</p>
        </paginate>
      </div> -->
      <div class="flex flex-wrap justify-center" v-if="loadingActus">
        <img
          class="text-center items-center h-24"
          src="../assets/images/horizontal_loading.gif"
          alt=""
        />
      </div>
      <div v-else class="">
        <div
          class="gap-16 items-center justify-center py-2 px-4 mx-auto max-w-screen-xl grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:py-16 lg:px-6 sm:mx-auto mt-4"
        >
          <div
            class="max-w-sm shadow-lg"
            v-for="(actu, index) in actualities.slice(0, 6)"
            :key="index"
          >
            <div class="flex rounded-lg h-full bg-gray-100 flex-col shadow-lg">
              <div class="flex items-center mb-3">
                <img
                  :src="displayIm(actu.imageType, actu.imageData.data)"
                  alt="Cuture Waama"
                  class="w-full rounded-lg"
                  style="height: 250px"
                />
              </div>
              <div class="flex flex-col justify-between p-4 flex-grow">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {{ actu.title }}
                  </h5>
                </a>
                <hr />
                <p class="leading-relaxed text-base font-normal text-gray-700 mb-4">
                  {{ actu.description.substr(0, 150) + "..." }}
                </p>
                <div class="text-center">
                  <router-link
                    to="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F71735] bg-tranparent rounded-lg hover:bg-[#F71735] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Consulter
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
