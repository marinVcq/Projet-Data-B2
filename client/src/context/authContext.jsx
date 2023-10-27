import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // const login = async (inputs) => {
  //   try {
  //     // Log the request details before sending
  //     console.log('Login Request:', {
  //       method: 'POST',
  //       url: '/auth/login',
  //       data: inputs,
  //       headers: {
  //         'Content-Type': 'application/json', // Add other headers if needed
  //       },
  //     });
  
  //     // Send the request
  //     const res = await axios.post('/auth/login', inputs);
  
  //     // Log the response details after receiving
  //     console.log('Login Response:', {
  //       status: res.status,
  //       data: res.data,
  //       headers: res.headers,
  //     });
  
  //     // Set the current user based on the response
  //     setCurrentUser(res.data);
  
  //   } catch (error) {
  //     console.error('Login error:', error);
  //   }
  // };

  const login = async (inputs) => {
    try {
      const res = await axios.post("/api/auth/login", inputs);
      setCurrentUser(res.data);
      console.log(inputs);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const logout = async () => {
    try {
      // Log the request details before sending
      console.log('Logout Request:', {
        method: 'POST',
        url: '/api/auth/logout',
        headers: {
          'Content-Type': 'application/json', // Add other headers if needed
        },
      });
  
      // Send the request
      await axios.post('/api/auth/logout');
  
      // Log the successful logout
      console.log('Logout Successful');
  
      // Clear the current user in your application state
      setCurrentUser(null);
  
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};