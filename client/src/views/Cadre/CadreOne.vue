<script setup lang="ts">
// @ts-ignore
/* eslint-disable */

import { computed, onMounted, reactive, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { mapGetters, mapState, useStore } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import Toast from "../../plugins/Toast/Toast";

import CadreService from "../../services/cadre.service";
import ResponseData from "../../types/ResponseData";

// GLOBAL CONST
const router = useRouter();
const route = useRoute();
const store = useStore();

// const error = computed(() => store.state.auth.error);
const actionLogin = (login: any) => store.dispatch("auth/login", login);

let name = ref("");
let workFunc = ref("");
let imageType = ref("");
let imageBuffer = ref("");
let loading = ref(false);
let message = ref("");

const cadreId = route.params.id;

function getCadre() {
  CadreService.get(cadreId)
    .then((response: ResponseData) => {
      name.value = response.data.name;
      workFunc.value = response.data.workFunc;
      imageType.value = response.data.imageType;
      imageBuffer.value = response.data.imageData.data;
    })
    .catch((e: Error) => {
      console.log(e);
    });
}

function displayIm(mimeType: any, buffer: any) {
  let b64 = new Buffer(buffer).toString("base64");

  const image = `data:${mimeType};base64,${b64}`;
  return image;
}

function editCadre(id: any) {
  router.push({ name: "CadreEdit", params: { id: id } });
}

onMounted(() => {
  getCadre();
});
</script>

<template>
  <div>
    <div class="flex justify-between">
      <h3 class="text-3xl font-medium text-gray-700">Cadres</h3>
      <router-link to="/cadres-list" class="flaot-right">Liste des cadres</router-link>
    </div>
    <div class="flex flex-col mt-8">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="form-group">
          <div
            v-if="message"
            class="alert alert-danger text-red-500 my-6 text-center"
            role="alert"
          >
            {{ message }}
          </div>
        </div>
        <div class="mt-5">
          <div class="w-full mt-6 lg:flex shadow rounded-b">
            <img
              class="flex-none h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
              :src="displayIm(imageType, imageBuffer)"
              alt=""
            />
            <div
              class="flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r border-gray-200 rounded-b lg:border-l-0 lg:border-t lg:border-gray-200 lg:rounded-b-none lg:rounded-r"
            >
              <div class="mb-8">
                <div class="mb-2 text-xl font-bold text-gray-900">
                  {{ name }}
                </div>
                <p class="text-base text-gray-700">
                  {{ workFunc }}
                </p>
              </div>
              <div class="flex items-center">
                <div class="">
                  <button
                    class="text-indigo-600 hover:text-indigo-900 shadow rounded-b bg-gray-300 font-medium p-2"
                    @click="editCadre(cadreId)"
                  >
                    Modifier
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
