import { Outlet, Navigate } from "react-router-dom";
import AuthVerification from "../commonFunc/AuthVerification";
import Login from "../components/Pages/Login/Login"

const useAuth = () => {
    const user  = {loggedIn : false}
    if(AuthVerification().isExp){
        user.loggedIn = true
    }
    console.log(user);
    return user && user.loggedIn
}

const ProtectedRoutes = () => {
    const isAuth = useAuth()
    return isAuth ? <Outlet/> : <Navigate to="/login" />
}

export default ProtectedRoutes