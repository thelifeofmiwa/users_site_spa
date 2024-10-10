<template>
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
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';



export default  defineComponent({
    name: "project-pagination",
    props: {
        page: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    changePage: {
      type: Function as PropType<(pageNumber: number) => void>,
      required: true,
    },
    }

})
</script>

<style scoped></style>
