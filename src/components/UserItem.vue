<template>
    <div
        class="w-[945px] h-[400px] border rounded-md flex flex-col justify-between items-center p-2"
        v-for="user in users"
        :key="user.name"
    >
        <div class="w-250 h-250 my-5 border rounded-[3px]">
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
</template>

<script lang="ts">
import { MD5 } from "crypto-js";
export default {
    name: "user-item",
    props: {
        users: {
            type: Array,
            required: true,
        },
        modalVisible: {
            type: Boolean,

        },
        selecteduser: {
            type: Object
        }
    },
    methods: {
        getGravatarUrl(email: string) {
            const emailHash = MD5(email.trim().toLowerCase()).toString();
            return `https://www.gravatar.com/avatar/${emailHash}?s=250&d=identicon`;
        },
        showModal(user: Object){
            this.$emit('update:modalVisible',true)
            this.$emit('update:selectedUser',user)
        }
    },
};
</script>

<style scoped></style>
