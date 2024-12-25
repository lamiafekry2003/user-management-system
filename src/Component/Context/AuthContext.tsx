/* eslint-disable react-refresh/only-export-components */
// import { createContext, ReactNode, useEffect, useState } from "react";
// import {jwtDecode} from 'jwt-decode'

// interface User{
//   id:number;
//   name:string;
//   email:string;
//   age?: number;
//   phone?: string;
//   birthDate?: string;
// }

// // define interface type
// interface AuthcontextType{
//   userData:User|null;
//   saveUserDate:()=> void

// }
// // Create the context
// export const AuthContext = createContext<AuthcontextType|null>(null);

// //any context must have it
// interface AuthContextProviderProps{
//   children:ReactNode
// }

// export default function AuthContextProvider({ children}:AuthContextProviderProps) {
//   const [userData, setUserData] = useState<User|null>(null);

//   const saveUserDate = () => {
//     const encodedToken = localStorage.getItem("userToken");
//     if (encodedToken) {
//       const decodedToken = jwtDecode<User>(encodedToken);
//       setUserData(decodedToken);
//     }
//   };

//   useEffect(() => {
//     if (localStorage.getItem("userToken")) {
//       saveUserDate();
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ saveUserDate, userData }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
// to profile also
import { createContext, ReactNode, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  age?: number;
  phone?: string;
  birthDate?: string;
  image?: string;
}

// define interface type
interface AuthcontextType {
  userData: User | null;
  saveUserDate: () => void;
}

export const AuthContext = createContext<AuthcontextType | null>(null);
// any context must have it
interface AuthContextProviderProps {
  children: ReactNode;
}

export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [userData, setUserData] = useState<User | null>(null);

  const saveUserDate = async () => {
    const encodedToken = localStorage.getItem("userToken");
    if (encodedToken) {
      const decodedToken = jwtDecode<User>(encodedToken);
      try {
        const response = await axios.get<{ users: User[] }>(
          "https://dummyjson.com/users"
        );
        const user = response.data.users.find(
          (user) => user.id === decodedToken.id
        );
        if (user) {
          setUserData(user);
        }
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      saveUserDate();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ saveUserDate, userData }}>
      {children}
    </AuthContext.Provider>
  );
}