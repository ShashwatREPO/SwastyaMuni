import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(true);

  useEffect(()=>{

    console.log(localStorage.getItem('token'));



    

  },[])

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
