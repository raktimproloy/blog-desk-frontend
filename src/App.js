import Home from "./components/Pages/Home/Home"
import Signup from "./components/Pages/Signup/Signup";
import Login from "./components/Pages/Login/Login";
import Category from "./components/Pages/Category/Category"
import Popular from "./components/Pages/Popular/Popular";
import Blog from "./components/Pages/Blog/Blog"
import Post from "./components/Pages/Post/Post";
import Profile from "./components/Pages/Profile/Profile";
import Setting from "./components/Pages/Setting/Setting";
import Author from "./components/Pages/Author/Author";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./common/css/style.css"
import {
  Route, Routes, useNavigate
} from "react-router-dom";

import ProtectedRoutes from "./Protected/ProtectedRoutes"
import { useEffect } from "react";
import AuthVerification from "./commonFunc/AuthVerification";

function App() {
  const navigate = useNavigate()
  const {isExp, userId, fullName, email} = AuthVerification();
  useEffect(() => {
    console.log("Start setTimeout for logout");
    if(isExp){
      setTimeout(() => {
        console.log("Time to logout");
        navigate("/login")
      }, 3600000);
    }
  }, [isExp])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/category" element={ <Category/> } />
        <Route path="/popular" element={ <Popular/> } />
        <Route path="/blog" element={ <Blog/> } />
        <Route path="/author" element={ <Author/> } />
          <Route element={<ProtectedRoutes/>}>
            <Route path="/post" element={<Post/>} />
            <Route path="/setting" element={<Setting/>} />
            <Route path="/Profile" element={ <Profile/> } />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
