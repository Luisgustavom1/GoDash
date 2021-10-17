import { useQuery } from "react-query";
import { api } from "../api";

interface IUser {
    id: string;
    email: string;
    name: string;
    createdAt: string;
}

type GetUsersType = {
    users: IUser[];
    totalCount: number
}

export const getUsers = async (page: number): Promise<GetUsersType> => {
    const { data, headers } = await api.get('/users', {
        params: {
            page,
        }
    });

    const totalCount = Number(headers['x-total-count']);

    const users = data.users.map(user => {
        return {
            ...user,
            createdAt: new Date(user.created_at).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            }),
        }
    })

    return {
        totalCount, 
        users
    };
};

export function useUsers(page: number) {
    return useQuery(['users', page], () => getUsers(page), {
        staleTime: 1000 * 60 * 10,
    });
};