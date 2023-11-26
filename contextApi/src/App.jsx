import React, { createContext } from 'react';
import CompA from './components/CompA';

const UserNameContext = createContext();  
const PasswordContext = createContext();  

function App() {
  return (
    <>
      <UserNameContext.Provider value={"test@google.com"}>
        <PasswordContext.Provider value={`test${Math.floor(Math.random() * 100 + 1)}`}>
          <CompA />
        </PasswordContext.Provider>
      </UserNameContext.Provider>
    </>
  );
}

export default App;
export { UserNameContext, PasswordContext };  
