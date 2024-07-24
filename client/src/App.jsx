import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";
import Profile from "./pages/Profile";
import EditPost from "./pages/EditPost";
import PrivateRoutes from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<LandingPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editpost/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
