<template>
    <div
        class="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-10"
        @click="$emit('hideModal')"
    >
        <div
            class="bg-white w-[800px] max-h-[800px] overflow-auto p-5 rounded-lg shadow-lg relative"
            @click.stop
        >
            <button
                class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
                @click="$emit('hideModal')"
            >
                &times;
            </button>

            <h3 class="text-lg font-bold mb-4">Просмотр</h3>

            <div class="space-y-2">
                <div v-if="user">
                    <div>{</div>
                    <div v-for="(value, key) in user" :key="key" class="pl-4">
                        "{{ key }}":
                        <span v-if="isObject(value)">
                            {
                            <div class="pl-4">
                                <div
                                    v-for="(subValue1, subKey1) in value"
                                    :key="subKey1"
                                >
                                    "{{ subKey1 }}":
                                    <span v-if="isObject(subValue1)">
                                        {
                                        <div class="pl-4">
                                            <div
                                                v-for="(
                                                    subValue2, subKey2
                                                ) in subValue1"
                                                :key="subKey2"
                                            >
                                                "{{ subKey2 }}":
                                                {{ subValue2 }}
                                            </div>
                                        </div>
                                        }
                                    </span>
                                    <span v-else>
                                        {{
                                            isString(subValue1)
                                                ? `"${subValue1}"`
                                                : subValue1
                                        }}
                                    </span>
                                </div>
                            </div>
                            }
                        </span>
                        <span v-else>
                            {{ isString(value) ? `"${value}"` : value }}
                        </span>
                        <span v-if="!isLastElement(user, key)">,</span>
                    </div>
                    <div>}</div>
                </div>
                <div v-else>
                    <p>Нет данных о пользователе.</p>
                </div>
            </div>
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
            type: Object as () => IUser | null,
            required: true,
        },
    },
    methods: {
        isObject(value: any): boolean {
            return typeof value === "object" && value !== null;
        },
        isString(value: any): boolean {
            return typeof value === "string";
        },
        isLastElement(obj: Record<string, any>, key: string): boolean {
            const keys = Object.keys(obj);
            return keys[keys.length - 1] === key;
        },
    },
});
</script>

<style scoped></style>
