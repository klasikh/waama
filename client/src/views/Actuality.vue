<script setup lang="ts">
import Culture from "@/assets/images/culture.png";
</script>

<template>
  <div class="my-20 mx-20">
    <section>
      <div class="col col-4">
        <input
          type="text"
          id="search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Rechercher..."
          required
        />
      </div>
    </section>
    <section class="bg-white mb-14">
      <div class="grid gap-4 mt-10">
        <div class="flex">
          <h2 class="text-4xl tracking-tight font-extrabold text-gray-900">
            Découvrez tous nos évènements
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
      <div
        class="gap-16 items-center py-2 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-16 lg:px-6 mt-4"
      >
        <div
          class="max-w-sm bg-white border border-gray-200 rounded-lg shadow md:mx-auto md:mb-5"
        >
          <a href="#">
            <img class="rounded-t-lg" :src="Culture" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Waama Danse
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in
              reverse chronological order.
            </p>
            <div class="">
              <router-link
                to="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F71735] bg-tranparent rounded-lg hover:bg-[#F71735] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Voir plus
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

        <div
          class="max-w-sm bg-white border border-gray-200 rounded-lg shadow md:mx-auto md:mb-5"
        >
          <a href="#">
            <img class="rounded-t-lg" :src="Culture" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
          </div>
        </div>

        <div
          class="max-w-sm bg-white border border-gray-200 rounded-lg shadow md:mx-auto md:mb-5"
        >
          <a href="#">
            <img class="rounded-t-lg" :src="Culture" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
