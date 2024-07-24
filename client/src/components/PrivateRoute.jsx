import { Outlet, Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const PrivateRoutes = () => {
  const token = localStorage.getItem("token");

  const isTokenValid = (token) => {
    if (!token) {
      return false;
    }

    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      console.log(decodedToken);

      if (decodedToken.exp < currentTime) {
        return false;
      }

      return true;
    } catch (error) {
      return false;
    }
  };

  return isTokenValid(token) ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
