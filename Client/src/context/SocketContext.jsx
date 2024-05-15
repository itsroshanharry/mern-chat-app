import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client';

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        let newSocket;
        if (authUser && !socket) {
            try {
                newSocket = io("https://mern-chat-app-2tt6.onrender.com ", {
                    query: {
                        userId: authUser._id,
                    },
                });
                setSocket(newSocket);

                newSocket.on("getOnlineUsers", (users) => {
                    setOnlineUsers(users);
                });
            } catch (error) {
                console.error("Error connecting to WebSocket:", error);
            }
        } else if (!authUser && socket) {
            // Close socket if user logs out
            socket.close();
            setSocket(null);
        }

        return () => {
            if (newSocket) {
                newSocket.close();
            }
        };
    }, [authUser]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
};
