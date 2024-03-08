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
let imageUrl = ref();
let imageFile = ref();

const actuId = route.params.id;

function getCadre() {
  CadreService.get(actuId)
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

const onFilePicked = (event: any) => {
  const files = event.target.files;
  let filename = files[0].name;
  const fileReader = new FileReader();
  fileReader.addEventListener("load", () => {
    imageUrl.value = fileReader.result;
  });
  fileReader.readAsDataURL(files[0]);
  imageFile.value = files[0];
};

function editCadre(e: any) {
  e.preventDefault();

  if (imageFile) {
    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("workFunc", workFunc.value);
    formData.append("file", imageFile.value);

    CadreService.update(actuId, formData)
      .then((response: ResponseData) => {
        if (response.data.actu) {
          Toast.fire({
            icon: "success",
            title: response.data.message,
            position: "top-right",
          });

          router.push("/cadres-list");
        }
      })
      .catch((e: Error) => {
        Toast.fire({
          icon: "error",
          title: "Une erreur s'est produite",
          position: "top-right",
        });

        console.log(e);
      });
  } else {
    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("workFunc", workFunc.value);
    CadreService.update(actuId, formData)
      .then((response: ResponseData) => {
        if (response.data.actu) {
          Toast.fire({
            icon: "success",
            title: response.data.message,
            position: "top-right",
          });

          router.push("/actualities-list");
        }
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
        <div
          class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
        >
          <div class="mt-4">
            <div class="p-6 bg-white rounded-md shadow-md">
              <h2 class="text-lg font-semibold text-gray-700">
                Modifier les informations d'un cadre
              </h2>
              <div class="flex-shrink-0">
                <img class="w-full" :src="displayIm(imageType, imageBuffer)" alt="" />
              </div>

              <form method="POST" enctype="multipart/form-data" @submit="editCadre">
                <div class="">
                  <div>
                    <label class="text-gray-700" for="username"
                      >Nom complet du cadre <span class="text-red-500">*</span></label
                    >
                    <input
                      name="name"
                      v-model="name"
                      class="w-full mt-2 border-gray-200 rounded-md border-gray-300 focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                      type="text"
                      required
                    />
                    <ErrorMessage name="name" class="error-feedback text-red-500" />
                  </div>

                  <div class="mt-4">
                    <label class="text-gray-700" for="workFunc"
                      >Fonction du cadre <span class="text-red-500">*</span></label
                    >
                    <input
                      name="workFunc"
                      v-model="workFunc"
                      class="w-full mt-2 border-gray-200 rounded-md border-gray-300 focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                      type="text"
                      required
                    />
                    <ErrorMessage name="work" class="error-feedbacFunck text-red-500" />
                  </div>

                  <div class="mt-4">
                    <label class="text-gray-700" for="image"
                      >Photo du cadre <span class="text-red-500">*</span></label
                    >
                    <input
                      name="file"
                      class="w-full mt-2 border-gray-200 rounded-md border-gray-300 focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                      type="file"
                      @change="onFilePicked"
                      required
                    />
                    <ErrorMessage name="file" class="error-feedback text-red-500" />
                  </div>
                </div>

                <div class="flex justify-end mt-4">
                  <button
                    type="submit"
                    class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  >
                    Modifier
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
