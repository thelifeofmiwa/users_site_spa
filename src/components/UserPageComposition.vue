<template>
    <div class="min-h-screen flex flex-col">
      <div class="w-full relative">
        <h1 class="text-3xl font-sans font-bold pl-4 py-6 text-gray-600">
          Пользователи
        </h1>
      </div>
      <div class="w-full max-w-[1920px] min-h-6 p-2 flex justify-between items-center bg-gray-200 px-6">
        <project-input
          v-model="searchQuery"
          placeholder="Search by Name"
          class="w-[300px] placeholder-gray-500"
        />
        <project-select
          v-model="selectedSort"
          :options="sortOptions"
          class="w-full max-w-xs ml-4"
        />
      </div>
      <div class="flex-grow">
        <user-list :users="sortedAndSearchedUsers" />
      </div>
      <div class="flex justify-center p-2 mt-auto mb-4 space-x-1">
        <div
          class="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border-none transition duration-200 bg-white text-gray-500 hover:bg-gray-200"
          @click="changePage(1)"
          :disabled="page === 1"
        >
          <span class="text-lg">&#171;</span>
        </div>
  
        <div
          class="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border-none transition duration-200 bg-white text-gray-500 hover:bg-gray-200"
          @click="changePage(page - 1)"
          :disabled="page === 1"
        >
          <span class="text-lg">&#8249;</span>
        </div>
  
        <div
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          class="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border-none transition duration-200"
          :class="{
            'bg-black text-white': page === pageNumber,
            'bg-white text-gray-500': page !== pageNumber,
            'hover:bg-gray-200 hover:text-black': page !== pageNumber,
          }"
          @click="changePage(pageNumber)"
        >
          {{ pageNumber }}
        </div>
  
        <div
          class="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border-none transition duration-200 bg-white text-gray-500 hover:bg-gray-200"
          @click="changePage(page + 1)"
          :disabled="page === totalPages"
        >
          <span class="text-lg">&#8250;</span>
        </div>
  
        <div
          class="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border-none transition duration-200 bg-white text-gray-500 hover:bg-gray-200"
          @click="changePage(totalPages)"
          :disabled="page === totalPages"
        >
          <span class="text-lg">&#187;</span>
        </div>
      </div>
    </div>
  </template>
  
<script lang="ts">
import { defineComponent } from "vue";
import UserList from "./UserList.vue";
import ProjectSelect from "./UI/ProjectSelect.vue";
import ProjectInput from "./UI/ProjectInput.vue";
import { useUsers } from "../hooks/useUsers";
import { useSortedUsers } from "../hooks/useSortedUsers";
import { useSortedAndSerchedUsers } from "../hooks/useSortedAndSearchedUsers";

export default defineComponent({
    name: "user-page-composition",
    components: {
        UserList,
        ProjectSelect,
        ProjectInput,
    },
    setup() {
        const { users, page, totalPages, changePage } = useUsers(4);
        const { selectedSort, sortOptions, sortedUsers } =
            useSortedUsers(users);
        const { searchQuery, sortedAndSearchedUsers } =
            useSortedAndSerchedUsers(sortedUsers);

        return {
            users,
            page,
            totalPages,
            changePage,
            selectedSort,
            sortOptions,
            sortedUsers,
            searchQuery,
            sortedAndSearchedUsers,
        };
    },
});
</script>

<style scoped>
.current__page {
    border: 2px solid aquamarine;
}
</style>
