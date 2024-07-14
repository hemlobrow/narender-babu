import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setUser(JSON.parse(user));
        }
    }, []);

    const login = (username, password) => {
        const predefinedUsers = [
            { username: "user1", password: "pass1" },
            { username: "user2", password: "pass2" },
            { username: "user3", password: "pass3" },
        ];
        const user = predefinedUsers.find(
            (user) => user.username === username && user.password === password
        );
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            setUser(user);
            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
