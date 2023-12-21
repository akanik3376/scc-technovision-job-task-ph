import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";

const useAuth = () => {

    const userInfo = useContext(AuthContext)

    return userInfo;
};

export default useAuth;