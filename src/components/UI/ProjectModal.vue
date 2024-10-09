<template>
    <div class="modal" v-if="modalVisible" @click="hideModal">
        <div class="modal__content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "project-modal",
    props: {
        modalVisible: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        hideModal() {
            this.$emit("update:modalVisible", false);
        },
    },
};
</script>

<style scoped></style>
