import { createContext, useContext, useState } from "react";

// TEMPORARY test account. This check runs in the browser, so it is NOT
// real security. We replace it with a server check when we build the backend.
const DEMO_ADMIN = { username: "admin", password: "admin123" };

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return sessionStorage.getItem("adminUser");
    } catch {
      return null;
    }
  });

  function login(username, password) {
    if (username === DEMO_ADMIN.username && password === DEMO_ADMIN.password) {
      setUser(username);
      try {
        sessionStorage.setItem("adminUser", username);
      } catch {
        /* storage unavailable, ignore */
      }
      return true;
    }
    return false;
  }

  function logout() {
    setUser(null);
    try {
      sessionStorage.removeItem("adminUser");
    } catch {
      /* ignore */
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
