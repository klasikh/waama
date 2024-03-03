<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { mapGetters, mapState, useStore } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import Toast from "@/plugins/Toast/Toast";

// GLOBAL CONST
const router = useRouter();
const route = useRoute();
const store = useStore();

// const error = computed(() => store.state.auth.error);
const actionLogin = (login: any) => store.dispatch("auth/login", login);

let loading = ref(false);
let message = ref("");

const schema = yup.object().shape({
  username: yup.string().required("Champ obligatoire"),
  password: yup.string().required("Champ obligatoire"),
});

function handleLogin(user: any) {
  loading.value = true;
  console.log(user);

  actionLogin(user).then(
    () => {
      Toast.fire({
        icon: "success",
        title: "Connecté avec succès!",
        position: "top-right",
      });
      router.push("/dashboard");
    },
    (error: any) => {
      loading.value = false;
      message.value =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
    }
  );
}
</script>

<template>
  <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
    <div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
      <div class="flex items-center justify-center">
        <svg
          class="w-10 h-10"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
            fill="#F71735"
            stroke="#F71735"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
            fill="white"
          />
        </svg>
        <span class="text-2xl font-semibold text-gray-700">Waama Dashboard</span>
      </div>

      <div class="form-group">
        <div
          v-if="message"
          class="alert alert-danger text-red-500 my-6 text-center"
          role="alert"
        >
          {{ message }}
        </div>
      </div>

      <Form class="mt-4" @submit="handleLogin" :validation-schema="schema">
        <label class="block">
          <span class="text-sm text-gray-700">Nom d'utilisateur</span>
          <Field
            name="username"
            type="text"
            class="block w-full mt-1 border-gray-200 rounded-md border-gray-300 focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
          />
          <ErrorMessage name="username" class="error-feedback text-red-500" />
        </label>

        <label class="block mt-3">
          <span class="text-sm text-gray-700">Mot de passe</span>
          <Field
            name="password"
            type="password"
            class="block w-full mt-1 border-gray-200 rounded-md border-gray-300 focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
          />
          <ErrorMessage name="password" class="error-feedback text-red-500" />
        </label>

        <!-- <div class="flex items-center justify-between mt-4">
          <div>
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="text-indigo-600 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
              />
              <span class="mx-2 text-sm text-gray-600">Se souvenir de moi</span>
            </label>
          </div>

          <div>
            <a class="block text-sm text-indigo-700 fontme hover:underline" href="#"
              >Mot de passe oublié ?</a
            >
          </div>
        </div> -->

        <div class="mt-6">
          <button
            type="submit"
            class="w-full px-4 py-2 text-sm text-center text-white bg-[#F71735] rounded-md focus:outline-none hover:bg-[#F1B125]"
            :disabled="loading"
          >
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>Se connecter</span>
          </button>
        </div>
      </Form>
      <div class="flex mt-5">
        <p class="mr-2">Vous n'avez aucun compte ?</p>
        <span>
          <router-link to="/register" class="text-indigo-600"
            >Créer un compte</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>
