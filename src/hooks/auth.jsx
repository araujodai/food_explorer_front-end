import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { notify } from "../components/Notification";


export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [ data, setData ] = useState({});
  const [ isTokenExpired, setIsTokenExpired ] = useState(false);

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodexplorer:token", token);
      
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });

    } catch (error) {
      if (error.response) {
        notify.error(error.response.data.message);

      } else {
        notify.error("Não foi possível realizar o login, tente novamente.");
      };
    };
  };

  function signOut() {
    localStorage.removeItem("@foodexplorer:token");
    localStorage.removeItem("@foodexplorer:user");

    setData({});
    setIsTokenExpired(false);
  };

  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      response => response,
      error => {
        if (error.response && error.response.status === 401) {
          setIsTokenExpired(true);
        }
        return Promise.reject(error);
      }
    );
  
    return () => {
      api.interceptors.response.eject(interceptor);
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("@foodexplorer:token");
    const user = localStorage.getItem("@foodexplorer:user");

    if(token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      });
    };
  }, []);

  return (
    <AuthContext.Provider value={{ 
      signIn, 
      signOut,
      user: data.user, 
      isTokenExpired
    }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };