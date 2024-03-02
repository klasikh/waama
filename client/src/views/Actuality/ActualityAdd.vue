<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { mapGetters, mapState, useStore } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
// import Toast from "@/plugins/Toast/Toast";

import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

import ActualityService from "@/services/actuality.service";
import ResponseData from "@/types/ResponseData";

// GLOBAL CONST
const router = useRouter();
const route = useRoute();
const store = useStore();
const $toast = useToast();

// const error = computed(() => store.state.auth.error);
const actionLogin = (login: any) => store.dispatch("auth/login", login);

let loading = ref(false);
let message = ref("");

const schema = yup.object().shape({
  title: yup.string().required("Champ obligatoire"),
  description: yup.string().required("Champ obligatoire"),
  image: yup.string().required("Champ obligatoire"),
});

function saveActuality(data: any) {
  ActualityService.create(data)
    .then((response: ResponseData) => {
      router.push("/actualities-list");
    })
    .catch((e: Error) => {
      console.log(e);
    });
}
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
              <h2 class="text-lg font-semibold text-gray-700">Ajouter une actualité</h2>

              <Form @submit="saveActuality" :validation-schema="schema">
                <div class="">
                  <div>
                    <label class="text-gray-700" for="username"
                      >Titre <span class="text-red-500">*</span></label
                    >
                    <Field
                      name="title"
                      class="w-full mt-2 border-gray-200 rounded-md border-gray-300 focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                      type="text"
                    />
                    <ErrorMessage name="title" class="error-feedback text-red-500" />
                  </div>

                  <div class="mt-4">
                    <label class="text-gray-700" for="emailAddress"
                      >Description <span class="text-red-500">*</span></label
                    >
                    <Field
                      name="description"
                      cols="40"
                      rows="5"
                      class="w-full mt-2 border-gray-200 rounded-md border-gray-300 focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                      style="height: 150px"
                    />
                    <ErrorMessage
                      name="description"
                      class="error-feedback text-red-500"
                    />
                    <!-- <Field
                      name="description"
                      class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                      type="textarea"
                    /> -->
                  </div>

                  <div class="mt-4">
                    <label class="text-gray-700" for="password"
                      >Image de couverture <span class="text-red-500">*</span></label
                    >
                    <Field
                      name="image"
                      class="w-full mt-2 border-gray-200 rounded-md border-gray-300 focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                      type="file"
                    />
                    <ErrorMessage name="image" class="error-feedback text-red-500" />
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
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
