<template>
    <div class="min-h-screen flex flex-col">
        <div class="w-max relative">
            <h1 class="text-3xl font-sans font-bold pl-4 py-6 text-gray-600">
                Пользователи
            </h1>
        </div>
        <div
            class="w-full max-w-[1920px] min-h-6 p-2 flex justify-between bg-gray-200"
        >
            <project-input
                v-model="searchQuery"
                placeholder="Search by Name"
                class="placeholder-gray-500"
            />
            <project-select v-model="selectedSort" :options="sortOptions" />
        </div>
        <div>
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
import { defineComponent, Ref } from "vue";
import UserList from "./UserList.vue";
import ProjectSelect from "./UI/ProjectSelect.vue";
import ProjectInput from "./UI/ProjectInput.vue";
import axios from "axios";

export interface IUser {
    id: string;
    name: string;
    email: string;
}

export default defineComponent({
    name: "user-page-options",
    components: { UserList, ProjectSelect, ProjectInput },
    data() {
        return {
            users: [] as Array<IUser>,
            selectedSort: "id" as keyof IUser,
            searchQuery: "" as string,
            page: 1 as number,
            limit: 4 as number,
            totalPages: 0 as number,
            sortOptions: [
                { value: "id", name: "По порядку" },
                { value: "name", name: "По имени" },
            ],
        };
    },
    methods: {
        async fetchUsers() {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/users",
                    {
                        params: {
                            _page: this.page,
                            _limit: this.limit,
                        },
                    }
                );
                this.totalPages = Math.ceil(
                    response.headers["x-total-count"] / Number(this.limit)
                );
                this.users = response.data;
            } catch (e) {
                console.error("Произошла ошибка!");
            }
        },
        changePage(pageNumber: number) {
            this.page = Math.max(1, Math.min(pageNumber, this.totalPages));
        },
    },
    mounted() {
        this.fetchUsers();
    },
    computed: {
        sortedUsers() {
            if (this.selectedSort === "name") {
                return [...this.users].sort((user1, user2) =>
                    user1[this.selectedSort]?.localeCompare(
                        user2[this.selectedSort]
                    )
                );
            } else {
                return [...this.users].sort(
                    (user1, user2) => Number(user1.id) - Number(user2.id)
                );
            }
        },
        sortedAndSearchedUsers() {
            return this.sortedUsers.filter((user: any) =>
                user.name.toLowerCase().includes(this.searchQuery)
            );
        },
    },
    watch: {
        page() {
            this.fetchUsers();
        },
    },
});
</script>

<style scoped>
.user__list {
    display: flex;
    justify-content: space-between;
}
.pagination {
    display: flex;
    margin-top: 15px;
}
.page {
    border: 1px solid black;
    padding: 10px;
}
.current__page {
    border: 2px solid aquamarine;
}
</style>
