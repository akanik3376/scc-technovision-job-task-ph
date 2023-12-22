import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ManageTaskCard from "../../components/DashboardForm/ManageTaskCard";

const ManageTask = () => {
    const axiosPublic = useAxiosPublic()
    const { data: tasks = [], isLoading } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            try {
                const res = await axiosPublic.get(`/api/v1/show-all-task/${user?.email}`);
                if (res.data) {

                    return res.data;
                }


            } catch (error) {
                console.error('Error fetching user data:', error);

            }
        },
    });
    return (
        <div>
            <div className="border-2 border-[#7345b2] flex justify-around ">
                <h2 className="font-bold">To do list</h2>
                <h2 className="font-bold">On Going</h2>
                <h2 className="font-bold">Completed</h2>
                {/* className="grid grid-cols-1 w-64 gap-5  mt-2" */}
            </div>

            <div className="grid grid-cols-1 w-64 gap-5  mt-2">
                {tasks.map((item, index) => (
                    <ManageTaskCard key={index} data={item}></ManageTaskCard>
                ))}
            </div>
        </div>
    );
};

export default ManageTask;