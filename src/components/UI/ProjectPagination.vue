<template>
    <div class="pagination">
        <div
            v-for="pageNumber in totalPages"
            :key="pageNumber"
            class="page"
            :class="{
                current__page: page === pageNumber,
            }"
            @click="updatePage(pageNumber)"
        >
            {{ pageNumber }}
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "project-pagination",
    props: {
        totalPages: {
            type: Number,
            required: true,
        },
        page: {
            type: Number,
            default: 1,
        },
    },
    methods: {
        updatePage(pageNumber: number) {
            this.$emit("update:page", pageNumber);
        },
    },
};
</script>

<style scoped></style>
