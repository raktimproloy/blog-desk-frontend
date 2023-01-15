import Home from "./components/Pages/Home/Home"
import Signup from "./components/Pages/Signup/Signup";
import Login from "./components/Pages/Login/Login";
import Category from "./components/Pages/Category/Category"
import Blog from "./components/Pages/Blog/Blog"
import Post from "./components/Pages/Post/Post";
import Profile from "./components/Pages/Profile/Profile";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./common/css/style.css"
import {
  Route, Routes
} from "react-router-dom";

import ProtectedRoutes from "./Protected/ProtectedRoutes"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="signup" element={ <Signup/> } />
        <Route path="login" element={ <Login/> } />
        <Route path="category" element={ <Category/> } />
        <Route path="blog" element={ <Blog/> } />
        {/* <Route path="post" element={
          <Protected isLoggedIn={isLoggedIn}>
            <Post/>
          </Protected>  } /> */}
          <Route element={<ProtectedRoutes/>}>
            <Route path="/post" element={<Post/>} />
          </Route>
        <Route path="Profile" element={ <Profile/> } />
      </Routes>
    </div>
  );
}

export default App;
