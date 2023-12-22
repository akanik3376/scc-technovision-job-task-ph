import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useCreateTask = () => {
    const { user } = useAuth();
    const userEmail = user?.email;
    const axiosPublic = useAxiosPublic()
    const { refetch, data: tasks = [] } = useQuery({
        queryKey: ["tasks", userEmail],
        queryFn: async () => {
            const result = await axiosPublic.get(`http://localhost:3000/api/v1/show-all-task/${userEmail}`);
            return result.data;
        },
    });
    return [tasks, refetch];
};

export default useCreateTask;