import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [user, setUser] = useState();
  const [applicationdetails, setapplicationdetails] = useState({});
   return (
    <UserContext.Provider value={[user, setUser],[applicationdetails, setapplicationdetails]}>
      {props.children}
    </UserContext.Provider>
  );
};