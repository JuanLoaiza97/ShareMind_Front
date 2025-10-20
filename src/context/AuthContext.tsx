// // src/context/AuthContext.tsx
// import React, { createContext, useState, useEffect, useContext } from "react";

// interface User {
//   _id: string;
//   firstname: string;
//   lastname: string;
//   email: string;
// }

// interface AuthContextType {
//   user: User | null;
//   login: (token: string) => Promise<void>;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);

//   // Si hay token guardado, carga el usuario
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       login(token);
//     }
//   }, []);

//   const login = async (token: string) => {
//     localStorage.setItem("token", token);

//     try {
//       const res = await fetch("http://localhost:4000/users/profile", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (!res.ok) throw new Error("No se pudo obtener el perfil");

//       const data = await res.json();
//       setUser(data);
//     } catch (error) {
//       console.error(error);
//       logout();
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth debe usarse dentro de un AuthProvider");
//   return context;
// };


// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect, useContext } from "react";

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  username?: string;
  email: string;
  country?: string;
  languages?: string[];
  interests?: string[];
  bio?: string;
}

interface AuthContextType {
  user: User | null;
  login: (token: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Si hay token guardado, carga el usuario
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      login(token).catch(() => {
        // si falla, limpiar
        localStorage.removeItem("token");
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = async (token: string) => {
    localStorage.setItem("token", token);

    try {
      const res = await fetch("http://localhost:4000/users/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("No se pudo obtener el perfil");

      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.error(error);
      logout();
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de un AuthProvider");
  return context;
};
