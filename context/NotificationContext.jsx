import { createContext, useContext, useState } from "react";
import Notification from "../components/Notification";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const showNotification = (data) => {
    setNotification(data);
    setTimeout(() => setNotification(null), 2000);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <div className="fixed top-4 right-4 z-50">
        {notification && <Notification {...notification} />}
      </div>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
