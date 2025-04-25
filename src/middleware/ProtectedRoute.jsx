import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const access_token = localStorage.getItem("access_token");
  const refresh_token = localStorage.getItem("refresh_token");

  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await axios.get("http://34.10.166.233/auth/verify-token", {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });

        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          setIsAuthenticated(true);
        }
      } catch (err) {
        if (err.response?.status === 401) {
          try {
            const resp = await axios.post("http://34.10.166.233/auth/refresh", {
              refresh: refresh_token,
            });

            if (resp.status === 200) {
              localStorage.setItem("access_token", resp.data.access);
              setIsAuthenticated(true);
            }
          } catch (refreshErr) {
            setIsAuthenticated(false);
          }
        } else {
          setIsAuthenticated(false);
        }
      }
    };

    verifyToken();
  }, []);

  if (isAuthenticated === null) return null; // or a loading spinner
  if (isAuthenticated === false) return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRoute;
