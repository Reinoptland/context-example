// // Simple way
// import { createContext } from "react";

// const AuthContext = createContext({});

// export default AuthContext;

// More sophisticated way

import { createContext, useState, useContext } from "react";

export const AuthContext = createContext({});

export function AuthProvider(props) {
  const [userId, setUserId] = useState(null); // move it to a dedicated component

  return (
    <AuthContext.Provider value={{ userId: userId, setUserId: setUserId }}>
      {props.children}
    </AuthContext.Provider>
  );
}

// custom hook to consume the data
export default function useAuth() {
  return useContext(AuthContext);
}
