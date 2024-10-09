import { computed, ref } from "vue";
import { IUser } from "./useUsers";
import { Ref } from "vue";

export function useSortedAndSerchedUsers(sortedUsers: Ref<IUser[]> ){
    const searchQuery = ref('');
    const sortedAndSearchedUsers = computed(() => {
        return sortedUsers.value.filter((user: any) =>
            user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    })

    return {
        searchQuery, sortedAndSearchedUsers
    }
    
}