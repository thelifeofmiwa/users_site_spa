import { computed, ref } from "vue";
import { IUser } from "./useUsers";
import { Ref } from "vue";

export function useSortedUsers(users: Ref<IUser[]>) {
    const selectedSort = ref<keyof IUser>("id");
    const sortOptions = [
        { value: "id", name: "По порядку" },
        { value: "name", name: "По имени" },
    ];
    const sortedUsers = computed(() => {
        if (selectedSort.value === "name") {
            return [...users.value].sort((user1, user2) =>
                user1[selectedSort.value]?.localeCompare(
                    user2[selectedSort.value]
                )
            );
        } else {
            return [...users.value].sort(
                (user1, user2) => Number(user1.id) - Number(user2.id)
            );
        }
    });

    return {
        selectedSort,
        sortOptions,
        sortedUsers,
    };
}
