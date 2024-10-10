<template>
    <div class="min-h-screen flex flex-col">
        <div class="w-full relative">
            <h1 class="text-3xl font-sans font-bold pl-4 py-4 text-gray-600">
                Пользователи
            </h1>
        </div>

        <div
            class="w-full max-w-[1920px] min-h-6 p-2 border-y border-gray-300 flex justify-between items-center bg-gray-200 px-6"
        >
            <project-input
                v-model="searchQuery"
                placeholder="Search by Name"
                class="placeholder-gray-500"
            />
            <project-select
                v-model="selectedSort"
                :options="sortOptions"
                class="ml-4"
            />
        </div>

        <div class="mb-auto">
            <user-list :users="sortedAndSearchedUsers" />
        </div>

        <div>
            <project-pagination
                :page="page"
                :totalPages="totalPages"
                :changePage="changePage"
            ></project-pagination>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserList from "./UserList.vue";
import ProjectSelect from "./UI/ProjectSelect.vue";
import ProjectInput from "./UI/ProjectInput.vue";
import ProjectPagination from "./UI/ProjectPagination.vue";
import { useUsers } from "../hooks/useUsers";
import { useSortedUsers } from "../hooks/useSortedUsers";
import { useSortedAndSerchedUsers } from "../hooks/useSortedAndSearchedUsers";

export default defineComponent({
    name: "user-page-composition",
    components: {
        UserList,
        ProjectSelect,
        ProjectInput,
        ProjectPagination,
    },
    setup() {
        const { users, page, totalPages, changePage } = useUsers(4); //передаём в хук useUsers количество человек на странице.
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

<style scoped></style>
