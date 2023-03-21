import { Outlet, Navigate, useLocation } from "react-router-dom";
import AuthVerification from "../commonFunc/AuthVerification";

const useAuth = () => {
    
    const user  = {loggedIn : false}
    if(AuthVerification().isExp){
        user.loggedIn = true
    }
    console.log(user);
    return user && user.loggedIn
}

const handleLocation = () => {
    const location = useLocation()
    return location;
}

const ProtectedRoutes = () => {
    const location = handleLocation()
    console.log(location);
    const isAuth = useAuth()
    return isAuth ? <Outlet/> : <Navigate to="/login" state={{from: location.pathname}} />
}

export default ProtectedRoutes