<template>
  <div class="">
    <section class="bg-white mb-20">
      <div
        class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
      >
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1
            class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
          >
            A la découverte de la culture <span class="text-[#F71735]">WAAMA</span>.
          </h1>
          <p
            class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl"
          >
            Découvrez la culture Waama, un mélange captivant de traditions anciennes et de
            dynamiques contemporaines. Des pratiques ancestrales à l'énergie moderne,
            plongez dans l'essence vibrante de cette communauté du nord du Bénin
          </p>
          <router-link
            to="#"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 bg-[#F71735] text-white hover:text-gray-600"
          >
            En savoir plus
          </router-link>
          <svg
            width="97"
            height="41"
            viewBox="0 0 97 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="margin-left: -20px; margin-top: 20px"
          >
            <path
              d="M45.4 40.9C38.3 40.9 31.4 39.5 25.1 36.5C11.1 29.9 1.3 16 0 1.1L3.2 0.799999C4.3 14.6 13.5 27.5 26.4 33.6C38.8 39.5 54.5 39 67.2 32.3C79.3 25.9 89 13.9 93 0L96.1 0.899998C91.7 15.8 81.8 28.2 68.7 35.1C61.6 39 53.5 40.9 45.4 40.9Z"
              fill="#558248"
            />
            <path
              d="M48.2 29.1C48.1 29.1 48 29.1 47.9 29.1C31.2 29 15.5 17.4 10.4 1.5L13.5 0.5C18.1 15.1 32.6 25.8 47.9 25.8C48 25.8 48.1 25.8 48.1 25.8C63.3 25.8 77.8 15.3 82.5 0.799999L85.6 1.8C80.5 17.6 64.8 29.1 48.2 29.1Z"
              fill="#558248"
            />
            <path
              d="M49.6 19.6C39.4 19.6 29.5 11.9 27.2 1.89999L30.3 1.2C32.4 10.1 41.5 16.9 50.6 16.3C58.4 15.8 65.8 9.8 68.2 2L71.3 2.89999C68.6 11.9 60 18.9 50.9 19.5C50.4 19.6 50 19.6 49.6 19.6Z"
              fill="#558248"
            />
          </svg>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img :src="Hero1" alt="mockup" />
          <!-- <img :src="HeroMask" alt="mockup" class="hero-mask" /> -->
          <img :src="Hero2" alt="mockup" class="hero2-style" />
        </div>
      </div>
    </section>
    <section class="bg-gray-300 mb-14">
      <div
        class="gap-16 items-center py-2 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 mt-10"
      >
        <div class="grid gap-4 mt-10">
          <img
            class="mt-4 w-full lg:mt-10 rounded-lg"
            :src="Culture"
            alt="office content 2"
          />
        </div>
        <div class="font-light text-gray-500 sm:text-lg">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            La culture WAAMA
          </h2>
          <p class="mb-4 text-justify">
            Il a précisé que la culture est le fondement de toute action de développement.
            D'importantes recommandations ont été prises à l'issue de ce congrès pour la
            relance des activités culturelles, d'alphabétisation et de recherches
            scientifiques dans le milieu Waama. Il faut préciser que pour cette assise, la
            Commission nationale linguistique Waama a reçu le soutien de plusieurs groupes
            linguistiques et autorités de deux départements.
          </p>
        </div>
      </div>
    </section>
    <section class="bg-white mb-14">
      <div class="text-center">
        <h3 class="text-4xl font-bold mb-4">Actualités culturelles</h3>
        <span class="text-xl">Suivez toutes les actualités ici</span>
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
              Découvrez la culture Waama, un mélange captivant de traditions anciennes et
              de dynamiques contemporaines. Des pratiques ancestrales à l'énergie moderne.
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
            <p class="mb-3 font-normal text-gray-700">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in
              reverse chronological order.
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
            <p class="mb-3 font-normal text-gray-700">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in
              reverse chronological order.
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
    </section>
    <section class="bg-white mb-20">
      <div class="text-center">
        <h3 class="text-4xl font-bold mb-4">Nos prochains évènements à venir</h3>
        <span class="text-xl">Retrouvez ici tous nos prochains évènements</span>
      </div>
      <div
        class="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6"
      >
        <div class="grid gap-4 mt-10">
          <div class="flex">
            <h2 class="text-4xl tracking-tight font-extrabold text-gray-900">
              Festival Waama
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
          <p class="mb-4 text-justify">
            Le festival Waaba se déroule en chaque début d’année au nord et rassemble tous
            les dignitaires du nord.
          </p>
          <div class="">
            <router-link
              to="#"
              class="inline-flex items-center px-3 py-2 text-md font-medium text-center text-[#FF9F1C] bg-tranparent rounded-lg border-[#FF9F1C] hover:bg-[#FF9F1C] hover:text-white focus:ring-4"
            >
              En savoir plus
            </router-link>
          </div>
        </div>
        <div class="font-light text-gray-500 sm:text-lg">
          <img
            class="mt-4 w-full lg:mt-10 rounded-lg text-center lg:float-right"
            :src="Festi1"
            alt="office content 2"
            style="width: 70%"
          />
        </div>
      </div>
      <div
        class="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6"
      >
        <div class="font-light text-gray-500 sm:text-lg">
          <img
            class="mt-4 w-full lg:mt-10 rounded-lg text-center lg:float-left"
            :src="Festi2"
            alt="office content 2"
            style="width: 70%"
          />
        </div>
        <div class="grid gap-4 mt-10">
          <div class="flex">
            <h2 class="text-4xl tracking-tight font-extrabold text-gray-900">
              Festival Waama
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
          <p class="mb-4 text-justify">
            Le festival Waaba se déroule en chaque début d’année au nord et rassemble tous
            les dignitaires du nord.
          </p>
          <div class="">
            <router-link
              to="#"
              class="inline-flex items-center px-3 py-2 text-md font-medium text-center text-[#FF9F1C] bg-tranparent rounded-lg border-[#FF9F1C] hover:bg-[#FF9F1C] hover:text-white focus:ring-4"
            >
              En savoir plus
            </router-link>
          </div>
        </div>
      </div>
      <div class="mt-10 text-center">
        <router-link
          to="#"
          class="inline-flex items-center px-6 py-2 text-xl text-center text-white bg-[#F71735] rounded-lg focus:ring-4"
        >
          Consulter tous les évènements
        </router-link>
      </div>
    </section>
    <section class="bg-gray-300">
      <div
        class="gap-16 items-center py-2 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 mt-10"
      >
        <div class="font-light text-gray-500 sm:text-lg">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Promoteur
          </h2>
          <p class="mb-4 text-justify">
            Il a précisé que la culture est le fondement de toute action de développement.
            D'importantes recommandations ont été prises à l'issue de ce congrès pour la
            relance des activités culturelles, d'alphabétisation et de recherches
            scientifiques dans le milieu Waama. Il faut préciser que pour cette assise, la
            Commission nationale linguistique Waama a reçu le soutien de plusieurs groupes
            linguistiques et autorités de deux départements.
          </p>
        </div>
        <div class="grid gap-4 mt-10">
          <img
            class="mt-4 w-full lg:mt-10 rounded-lg"
            :src="Promoteur"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
    <section class="">
      <div class="bg-[#F71735] bg-opacity-15 py-10">
        <div class="text-center">
          <h3 class="text-4xl font-bold mb-4">Newsletter</h3>
          <span class="text-xl"
            >Restez informé de toutes les actualités et de tous nos évènements.</span
          >
          <div class="mt-5">
            <form action="">
              <div class="max-width-sm mx-20 grid gap-6 mb-6 md:grid-cols-2">
                <div class="col-lg-4">
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="John"
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center"
                >
                  Souscrire
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import UserService from "../services/user.service";
import Hero1 from "@/assets/images/hero1.png";
import Hero2 from "@/assets/images/hero2.png";
import HeroMask from "@/assets/images/hero-mask.png";
import Culture from "@/assets/images/culture.png";
import Festi1 from "@/assets/images/festi1.png";
import Festi2 from "@/assets/images/festi2.png";
import Promoteur from "@/assets/images/promoteur.png";

export default {
  name: "Home",
  data() {
    return {
      content: "",
      Hero1,
      Hero2,
      HeroMask,
      Culture,
      Festi1,
      Festi2,
      Promoteur,
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
<style scoped>
.hero-mask {
  position: absolute;
}
.hero2-style {
  position: absolute;
  margin-top: 300px;
  margin-left: -200px;
}
</style>
