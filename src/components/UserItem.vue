<template>
    <div
        class="w-[49%] h-[360px] border rounded-md flex flex-col justify-between items-center p-4 mx-2 my-1"
    >
        <div
            class="w-[150px] h-[150px] my-5 border rounded-[3px] overflow-hidden"
        >
            <img
                :src="getGravatarUrl(user.email)"
                :alt="user.username"
                class="w-full h-full object-cover"
            />
        </div>
        <div class="text-center">
            <b>{{ user.name }}</b>
            <div>{{ user.email }}</div>
        </div>
        <button
            class="bg-[rgba(59,130,246,1)] text-white border border-[rgba(59,130,246,1)] rounded-md px-3 py-1 mb-2 self-end"
            @click="$emit('showModal', user)"
        >
            Подробнее
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MD5 } from "crypto-js";

export default defineComponent({
    name: "user-item",
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    methods: {
        getGravatarUrl(email: string) {
            const emailHash = MD5(email.trim().toLowerCase()).toString();
            return `https://www.gravatar.com/avatar/${emailHash}?s=200&d=identicon`;
        },
    },
});
</script>

<style scoped></style>
