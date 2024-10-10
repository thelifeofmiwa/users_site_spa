<template>
    <input
        class="h-9 border rounded-md border-gray-400 border-solid border-1 text-center"
        type="text"
        :value="modelValue"
        @input="changeModelValue"
    />
</template>

<script lang="ts">
import { defineComponent} from "vue";

export default defineComponent({
    name: "project-input",
    props: {
        modelValue: {
            type: String,
        },
    },
    methods: {
        changeModelValue(event: Event) {
            this.$emit("update:modelValue", (event.target as HTMLInputElement).value);
        },
    },
});
</script>

<style scoped></style>
