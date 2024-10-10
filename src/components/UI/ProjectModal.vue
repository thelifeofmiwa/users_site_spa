<template>
    <div
        class="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-10"
        @click="$emit('hideModal')"
    >
        <div
            class="bg-white w-[800px] max-h-[800px] overflow-auto p-5 rounded-lg shadow-lg"
            @click.stop
        >
            <h3 class="text-lg font-bold mb-4">Просмотр</h3>
            {
            <div class="space-y-2" v-for="(value, key) in user" :key="key">
                {{ key }}: {{ value }}
            </div>
        }
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IUser } from "../UserPageOptions.vue";

export default defineComponent({
    name: "project-modal",
    props: {
        user: {
            type: Object as () => IUser | null ,
            required: true,
        },
    },
});
</script>

<style scoped>
/* Добавьте стили, если нужно */
</style>
