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

// const error = computed(() => store.state.auth.error);
const actionLogin = (login: any) => store.dispatch("auth/login", login);

let title = ref("");
let description = ref("");
let imageType = ref("");
let imageBuffer = ref("");
let loading = ref(false);
let message = ref("");

const actuId = route.params.id;

function getActuality() {
  ActualityService.get(actuId)
    .then((response: ResponseData) => {
      title.value = response.data.title;
      description.value = response.data.description;
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

onMounted(() => {
  getActuality();
});
</script>

<template>
  <div>
    <div class="flex justify-between">
      <h3 class="text-3xl font-medium text-gray-700">Actualités</h3>
      <router-link to="/actualities-list" class="flaot-right"
        >Liste des actualités</router-link
      >
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
        <div
          class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
        >
          <div class="mt-4">
            <div class="p-6 bg-white rounded-md shadow-md">
              <h2 class="text-lg font-semibold text-gray-700">
                Affichage d'une actualité
              </h2>
              <div class="mt-4 mb-3 text-center mx-10">
                <div class="mt-6 overflow-hidden bg-white rounded shadow-lg">
                  <img class="w-full" :src="displayIm(imageType, imageBuffer)" alt="" />
                  <div class="px-6 py-4">
                    <div class="mb-2 text-xl font-bold text-gray-900">
                      {{ title }}
                    </div>
                    <p class="text-base text-gray-700">
                      {{ description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
