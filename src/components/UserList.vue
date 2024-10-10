<template>
    <div
        class="w-[1900px] flex flex-wrap justify-between mx-auto gap-x-1 gap-y-4 mt-3"
    >
        <div
            class="w-[945px] h-[360px] border rounded-md flex flex-col justify-between items-center p-2"
            v-for="user in users"
            :key="user.name"
        >
            <div class="w-200 h-200 my-5 border rounded-[3px]">
                <img :src="getGravatarUrl(user.email)" :alt="user.username" />
            </div>
            <div>
                <b>{{ user.name }}</b>
            </div>
            <div>{{ user.email }}</div>
            <button
                class="bg-[rgba(59,130,246,1)] text-white border border-[rgba(59,130,246,1)] rounded-md px-3 py-1 mb-2 mr-2 self-end"
                @click="showModal(user)"
            >
                Подробнее
            </button>
        </div>
        <!-- <user-item :users="users"></user-item> -->
    </div>
    <div
        class="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-10"
        v-if="modalVisible"
        @click="hideModal"
    >
        <div
            class="bg-white w-[800px] max-h-[800px] overflow-auto p-5 rounded-lg shadow-lg"
            @click.stop
        >
            <h3 class="text-lg font-bold mb-4">Просмотр</h3>
            {
            <div
                class="space-y-2"
                v-for="(value1, key1) in selectedUser"
                :key="key1"
            >
                {{ key1 }}: {{ value1 }}
                <!-- <div v-if="isObject(value1)">
                        "{{ key1 }}":
                        <div v-for="(key2, value2) in value1">
                            
                            "{{ key2 }}": {{ value2 }}
                        </div>
                    </div>
                    <div v-if="!isObject(value1)">
                        "{{ key1 }}": {{ value1 }}
                    </div> -->
            </div>
            }
        </div>
        <!-- <project-dialog v-model="modalVisible">{{ selectedUser }}</project-dialog> -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectModal from "./UI/ProjectModal.vue";
import { MD5 } from "crypto-js";
import UserItem from "./UserItem.vue";

export default defineComponent({
    name: "user-list",
    components: { ProjectModal, UserItem },
    props: {
        users: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            modalVisible: false as boolean,
            selectedUser: null as null | object,
        };
    },
    methods: {
        showModal(user: object) {
            this.selectedUser = user;
            this.modalVisible = true;
        },
        hideModal() {
            this.modalVisible = false;
            this.selectedUser = null;
        },
        getGravatarUrl(email: string) {
            const emailHash = MD5(email.trim().toLowerCase()).toString();
            return `https://www.gravatar.com/avatar/${emailHash}?s=200&d=identicon`;
        },
        isObject(value: string | object) {
            if (typeof value === "object") {
                return true;
            } else if (typeof value === "string") {
                return false;
            }
            return false;
        },
    },
});
</script>

<style></style>
