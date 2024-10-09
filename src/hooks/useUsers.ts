import axios from "axios";
import { onMounted, ref } from "vue";

export interface IUser {
    id: string, name:string, email: string
}

export function useUsers(limit: number) {
    const users = ref<IUser[]>([]);
    const totalPages = ref(0);
    const page = ref(1);
    const fetching = async () => {
        {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/users",
                    {
                        params: {
                            _page: page.value,
                            _limit: limit,
                        },
                    }
                );
                totalPages.value = Math.ceil(
                    response.headers["x-total-count"] / limit
                );
                users.value = response.data;
            } catch (e) {
                console.error("Произошла ошибка!");
            }
        }
    };
    const changePage = (newPage: number) => {
        page.value = Math.max(1, Math.min(newPage, totalPages.value));
        fetching();
    };
    onMounted(fetching());
    return {
        users,
        totalPages,
        page,
        changePage,
    };
}
