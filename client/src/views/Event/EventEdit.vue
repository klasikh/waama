<script setup lang="ts">
// @ts-ignore
/* eslint-disable */

import { computed, onMounted, reactive, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { mapGetters, mapState, useStore } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import Toast from "../../plugins/Toast/Toast";

import EventService from "../../services/event.service";
import ResponseData from "../../types/ResponseData";

// GLOBAL CONST
const router = useRouter();
const route = useRoute();
const store = useStore();

// const error = computed(() => store.state.auth.error);
const actionLogin = (login: any) => store.dispatch("auth/login", login);

let title = ref("");
let description = ref("");
let date = ref("");
let imageType = ref("");
let imageBuffer = ref("");
let loading = ref(false);
let message = ref("");
let imageUrl = ref();
let imageFile = ref();

const actuId = route.params.id;

function getEvent() {
  EventService.get(actuId)
    .then((response: ResponseData) => {
      title.value = response.data.title;
      description.value = response.data.description;
      date.value = response.data.date;
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

function editEvent(e: any) {
  e.preventDefault();

  if (imageFile) {
    const formData = new FormData();
    formData.append("title", title.value);
    formData.append("description", description.value);
    formData.append("date", date.value);
    formData.append("file", imageFile.value);

    EventService.update(actuId, formData)
      .then((response: ResponseData) => {
        if (response.data.actu) {
          Toast.fire({
            icon: "success",
            title: response.data.message,
            position: "top-right",
          });

          router.push("/events-list");
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
    formData.append("title", title.value);
    formData.append("description", description.value);
    formData.append("date", date.value);
    EventService.update(actuId, formData)
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
  getEvent();
});
</script>

<template>
  <div>
    <div class="flex justify-between">
      <h3 class="text-3xl font-medium text-gray-700">Evénements</h3>
      <router-link to="/events-list" class="flaot-right"
        >Liste des événements</router-link
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
              <h2 class="text-lg font-semibold text-gray-700">Modifier un événement</h2>
              <div class="flex-shrink-0">
                <img class="w-full" :src="displayIm(imageType, imageBuffer)" alt="" />
              </div>

              <form method="POST" enctype="multipart/form-data" @submit="editEvent">
                <div class="">
                  <div>
                    <label class="text-gray-700" for="username"
                      >Date de l'événement <span class="text-red-500">*</span></label
                    >
                    <input
                      name="date"
                      v-model="date"
                      class="w-full mt-2 border-gray-200 rounded-md border-gray-300 focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                      type="date"
                      required
                    />
                    <ErrorMessage name="date" class="error-feedback text-red-500" />
                  </div>

                  <div>
                    <label class="text-gray-700" for="username"
                      >Titre <span class="text-red-500">*</span></label
                    >
                    <input
                      name="title"
                      v-model="title"
                      class="w-full mt-2 border-gray-200 rounded-md border-gray-300 focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                      type="text"
                      required
                    />
                    <ErrorMessage name="title" class="error-feedback text-red-500" />
                  </div>

                  <div class="mt-4">
                    <label class="text-gray-700" for="emailAddress"
                      >Description <span class="text-red-500">*</span></label
                    >
                    <textarea
                      name="description"
                      v-model="description"
                      cols="40"
                      rows="5"
                      class="w-full mt-2 border-gray-200 rounded-md border-gray-300 focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                      style="height: 150px"
                      required
                    ></textarea>
                    <ErrorMessage
                      name="description"
                      class="error-feedback text-red-500"
                    />
                  </div>

                  <div class="mt-4">
                    <label class="text-gray-700" for="password"
                      >Changer l'image de couverture</label
                    >
                    <input
                      name="file"
                      class="w-full mt-2 border-gray-200 rounded-md border-gray-300 focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                      type="file"
                      @change="onFilePicked"
                    />
                    <ErrorMessage name="file" class="error-feedback text-red-500" />
                  </div>
                </div>

                <div class="flex justify-end mt-4">
                  <button
                    type="submit"
                    class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  >
                    Enregister
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
