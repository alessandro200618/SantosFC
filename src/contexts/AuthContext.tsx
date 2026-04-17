import React, { createContext, useState, useContext } from 'react';

interface User {
  email: string;
  password: string;
  name: string;
}

interface AuthContextType {
  users: User[];
  isUserRegistered: (email: string) => boolean;
  registerUser: (name: string, email: string, password: string) => void;
  authenticateUser: (email: string, password: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: any) => {
  const [users, setUsers] = useState<User[]>([]);

  const isUserRegistered = (email: string) => {
    return users.some(user => user.email === email);
  };

  const registerUser = (name: string, email: string, password: string) => {
    if (!isUserRegistered(email)) {
      setUsers([...users, { name, email, password }]);
    }
  };

  const authenticateUser = (email: string, password: string) => {
    return users.some(user => user.email === email && user.password === password);
  };

  return (
    <AuthContext.Provider value={{ users, isUserRegistered, registerUser, authenticateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
};
