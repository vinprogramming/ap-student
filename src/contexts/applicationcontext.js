import { createContext, useState } from 'react';

export const ApplicationContext = createContext();

export const ApplicationContextProvider = (props) => {
  const [applicationdetails, setapplicationdetails] = useState({});
   return (
    <ApplicationContext.Provider value={[applicationdetails, setapplicationdetails]}>
      {props.children}
    </ApplicationContext.Provider>
  );
};