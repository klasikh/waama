<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import EventService from "../services/event.service";
import ResponseData from "../types/ResponseData";

import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import TimeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";

import TableLite from "vue3-table-lite";

// GLOBAL CONST
const router = useRouter();

let events = ref<any[]>([]);

function handleDateClick(arg: any) {
  alert("date click! " + arg.dateStr);
}

let calendarOptions = {
  plugins: [dayGridPlugin, TimeGridPlugin, interactionPlugin],
  initialView: "dayGridMonth",
  // dateClick: handleDateClick,
  events,
  timeZone: "UTC",
  dayMaxEvents: true,
  locales: allLocales,
  locale: "fr",
  eventTimeFormat: {
    // like "14:30:00"
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    meridiem: false,
  },
  headerToolbar: {
    left: "prev next",
    center: "title",
    right: "timeGridDay timeGridWeek dayGridMonth",
  },
};

const table = reactive({
  isLoading: false,
  isReSearch: false,
  rowClasses: (row: any) => {
    if (row.id == 1) {
      return ["aaa", "is-id-one"];
    }
    return ["bbb", "other"];
  },
  title: "Liste de tous nos événements",
  columns: [
    {
      label: "Titre",
      field: "title",
      width: "8%",
      // sortable: true,
      isKey: true,
      display: function (row: any) {
        return (
          '<a href="#" data-id="' +
          row.id +
          '" class="is-rows-el text-blue-500 font-medium">' +
          row.title +
          "</a>"
        );
      },
    },
    {
      label: "Description",
      field: "description",
      width: "15%",
      // sortable: true,
      display: function (row: any) {
        return row.description.substr(0, 100) + " ...";
      },
    },
    {
      label: "Date",
      field: "date",
      width: "5%",
      // sortable: true,
      display: function (row: any) {
        return dataFormat(row.date);
      },
    },
    {
      label: "Actions",
      field: "quick",
      width: "5%",
      display: function (row: any) {
        return (
          '<a type="button" data-id="' +
          row.id +
          '" href="event/' +
          row.id +
          '"" class="is-rows-el quick-btn" ><i class="fa fa-eye text-blue-500 float-right right-0"></i></a>'
        );
      },
    },
  ],
  sortable: {
    order: "title",
    sort: "asc",
  },
  messages: {
    pagingInfo: "Affichage de {0}-{1} sur {2}",
    pageSizeChangeLabel: "Total : ",
    gotoPageLabel: " Aller à la page : ",
    noDataAvailable: "Aucune donnée disponible",
  },
});

// // Fake Data for 'asc' sortable
// const sampleData1 = (offst, limit) => {
//   offst = offst + 1;
//   let data = [];
//   for (let i = offst; i <= limit; i++) {
//     data.push({
//       id: i,
//       name: "TEST" + i,
//       email: "test" + i + "@example.com",
//     });
//   }
//   return data;
// };

// // Fake Data for 'desc' sortable
// const sampleData2 = (offst: any, limit: any) => {
//   let data = [];
//   for (let i = limit; i > offst; i--) {
//     data.push({
//       id: i,
//       name: "TEST" + i,
//       email: "test" + i + "@example.com",
//     });
//   }
//   return data;
// };
// /**
//  * Search Event
//  */
// const doSearch = (offset: any, limit: any, order: any, sort: any) => {
//   table.isLoading = true;
//   setTimeout(() => {
//     table.isReSearch = offset == undefined ? true : false;
//     if (offset >= 10 || limit >= 20) {
//       limit = 20;
//     }
//     if (sort == "asc") {
//       table.rows = sampleData1(offset, limit);
//     } else {
//       table.rows = sampleData2(offset, limit);
//     }
//     table.totalRecordCount = 20;
//     table.sortable.order = order;
//     table.sortable.sort = sort;
//   }, 600);
// };

// /**
//  * Loading finish event
//  */
// const tableLoadingFinish = (elements: any) => {
//   table.isLoading = false;
//   Array.prototype.forEach.call(elements, function (element) {
//     if (element.classList.contains("name-btn")) {
//       element.addEventListener("click", function () {
//         // console.log(this.dataset.id + " name-btn click!!");
//       });
//     }
//     if (element.classList.contains("quick-btn")) {
//       element.addEventListener("click", function () {
//         // console.log(this.dataset.id + " quick-btn click!!");
//       });
//     }
//   });
// };

// /**
//  * Row checked event
//  */
// const updateCheckedRows = (rowsKey: any) => {
//   console.log(rowsKey);
// };

// // First get data
// doSearch(0, 10, "id", "asc");
// function gotoEvent(id: any) {
//   router.push({ name: "EventFrontShow", params: { id: id } });
// }

function dataFormat(timeStamp: any) {
  let dateFormat = new Date(timeStamp);

  return (
    dateFormat.getDate() +
    "/" +
    (dateFormat.getMonth() + 1) +
    "/" +
    dateFormat.getFullYear()
  );
}

function displayIm(mimeType: any, buffer: any) {
  let b64 = new Buffer(buffer).toString("base64");
  const image = `data:${mimeType};base64,${b64}`;

  return image;
}

function getAllEvents() {
  EventService.getAll()
    .then((response: ResponseData) => {
      // console.log(response.data);
      events.value = response.data;
      console.log(events.value);
      calendarOptions.events = events.value;
      table.rows = events.value;
      // let i;
      // for (i = 0; i < table.rows.length; i++) {
      //   console.log(table.rows[i]);
      //   table.rows[i].push({ openEvent: "iehieu" });
      // }
      // table.rows.push("fiejfe");
      // console.log(table.rows);
      table.totalRecordCount = events.value.length;
    })
    .catch((e: Error) => {
      console.log(e);
    });
}

onMounted(() => {
  getAllEvents();
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
        <p class="mb-4 text-justify">Ici nous vous présentons tous nos événements</p>
      </div>
      <FullCalendar :options="calendarOptions" class="fullCalendar">
        <template v-slot:eventContent="arg">
          <b style="cursor: pointer">{{ arg.event.title }}</b>
        </template>
      </FullCalendar>
      <div class="">
        <table-lite
          :is-loading="table.isLoading"
          :is-re-search="table.isReSearch"
          :columns="table.columns"
          :rows="table.rows"
          :rowClasses="table.rowClasses"
          :total="table.totalRecordCount"
          :messages="table.messages"
          @do-search="doSearch"
          @is-finished="table.isLoading = false"
        />
      </div>
      <!-- <div
        class="gap-16 items-center py-2 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-16 lg:px-6 mt-4"
        v-for="(event, index) in events"
        :key="index"
      >
        <div
          class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl md:mx-auto md:mb-5"
        >
          <a href="#">
            <img
              class="rounded-t-lg"
              :src="displayIm(event.imageType, event.imageData.data)"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {{ event.title }}
              </h5>
            </a>
            <span class="my-3 text-gray-500">{{ event.eventDate }}</span>
            <p class="mb-3 font-normal text-gray-700">
              {{ event.description.substr(0, 100) + "..." }}
            </p>
            <hr />
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
      </div> -->
    </section>
  </div>
</template>

<style scoped></style>
