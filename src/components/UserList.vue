<template>
    <div
        class="w-full max-w-[1920px] flex flex-wrap justify-between gap-y-4 mt-3 px-4"
    >
        <user-item
            v-for="user in users"
            :key="user.name"
            :user="user"
            @showModal="showModal"
        />
    </div>

    <project-modal
        v-if="modalVisible"
        :user="selectedUser"
        @hideModal="hideModal"
    />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserItem from "./UserItem.vue";
import ProjectModal from "./UI/ProjectModal.vue";
import { IUser } from "../hooks/useUsers";

export default defineComponent({
    name: "user-list",
    components: { UserItem, ProjectModal },
    props: {
        users: {
            type: Array as () => IUser[],
            required: true,
        },
    },
    data() {
        return {
            modalVisible: false as boolean,
            selectedUser: null as IUser | null,
        };
    },
    methods: {
        showModal(user: IUser) {
            this.selectedUser = user;
            this.modalVisible = true;
        },
        hideModal() {
            this.modalVisible = false;
            this.selectedUser = null;
        },
    },
});
</script>

<style scoped></style>
