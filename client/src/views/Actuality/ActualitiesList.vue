<script setup lang="ts">
// @ts-ignore
/* eslint-disable */

import { computed, onMounted, reactive, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { mapGetters, mapState, useStore } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import Toast from "../../plugins/Toast/Toast";

import ActualityService from "../../services/actuality.service";
import ResponseData from "../../types/ResponseData";

// GLOBAL CONST
const router = useRouter();
const route = useRoute();
const store = useStore();

let actualities = ref<any[]>([]);
let open = ref(false);

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
    })
    .catch((e: Error) => {
      console.log(e);
    });
}

function showActu(id: any) {
  router.push({ name: "ActualityOne", params: { id: id } });
}

function editActu(id: any) {
  router.push({ name: "ActualityEdit", params: { id: id } });
}

function deleteActu() {
  open.value = true;
}

function confirmDeletion(id: any) {
  ActualityService.delete(id)
    .then((response: ResponseData) => {
      Toast.fire({
        icon: "success",
        title: response.data.message,
        position: "top-right",
      });

      open.value = false;
      getAllActualities();
    })
    .catch((e: Error) => {
      Toast.fire({
        icon: "error",
        title: "Une erreur s'est produite",
        position: "top-right",
      });

      console.log(e);
    });
}
onMounted(() => {
  getAllActualities();
});
</script>

<template>
  <div>
    <div class="flex justify-between">
      <h3 class="text-3xl font-medium text-gray-700">
        Actualités ({{ actualities.length }})
      </h3>
      <router-link to="/add-actuality" class="flaot-right">Ajouter</router-link>
    </div>
    <div class="flex flex-col mt-8">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Titre
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Description
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-right text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Actions
                </th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr v-for="(actu, index) in actualities" :key="index">
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <img
                        class="w-10 h-10 rounded-full"
                        :src="displayIm(actu.imageType, actu.imageData.data)"
                        alt=""
                      />
                    </div>

                    <div class="ml-4">
                      <div class="text-sm font-medium leading-5 text-gray-900">
                        {{ actu.title }}
                      </div>
                    </div>
                  </div>
                </td>

                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                  <div class="text-sm leading-5 text-gray-900">
                    {{ actu.description.substr(0, 100) + "..." }}
                  </div>
                </td>

                <td
                  class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                >
                  <button
                    @click="showActu(actu.id)"
                    class="text-indigo-600 hover:text-indigo-900"
                  >
                    <i class="fa fa-eye"></i>
                  </button>
                  &nbsp;
                  <button
                    @click="editActu(actu.id)"
                    class="text-indigo-600 hover:text-indigo-900"
                  >
                    <i class="fa fa-edit"></i>
                  </button>
                  &nbsp;
                  <button
                    @click="deleteActu()"
                    class="text-indigo-600 hover:text-indigo-900"
                  >
                    <i class="fa fa-trash"></i>
                  </button>
                </td>
                <div
                  :class="`modal ${
                    !open && 'opacity-0 pointer-events-none'
                  } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
                >
                  <div
                    class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
                    @click="open = false"
                  />

                  <div
                    class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md"
                  >
                    <div
                      class="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close"
                    >
                      <svg
                        class="text-white fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <path
                          d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                        />
                      </svg>
                      <span class="text-sm">(Esc)</span>
                    </div>

                    <!-- Add margin if you want to see some of the overlay behind the modal -->
                    <div class="px-6 py-4 text-left modal-content">
                      <!-- Title -->
                      <div class="flex items-center justify-between pb-3">
                        <p class="text-2xl font-bold">Supression d'une actualité</p>
                        <div
                          class="z-50 cursor-pointer modal-close"
                          @click="open = false"
                        >
                          <svg
                            class="text-black fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                          >
                            <path
                              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                            />
                          </svg>
                        </div>
                      </div>

                      <!-- Body -->
                      <p>Confirmez la suppression</p>

                      <!-- Footer -->
                      <div class="flex justify-end pt-2">
                        <button
                          class="p-3 px-6 py-3 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none"
                          @click="open = false"
                        >
                          Annuler
                        </button>
                        <button
                          class="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
                          @click="confirmDeletion(actu.id)"
                        >
                          Confirmer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>
