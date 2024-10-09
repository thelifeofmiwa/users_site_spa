<template>
    <select
        class="h-9 border rounded-md border-gray-400 border-solid border-1"
        :value="modelValue"
        @change="changeOption"
    >
        <option disabled value="">Отсортировать...</option>
        <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "project-select",
    props: {
        modelValue: {
            type: String,
        },
        options: {
            type: Object,
            default: () => [],
        },
    },
    methods: {
        changeOption(event: Event) {
            this.$emit("update:modelValue", event.target?.value);
        },
    },
});
</script>

<style scoped></style>
