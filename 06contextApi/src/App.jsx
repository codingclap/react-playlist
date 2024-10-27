import React,{useState} from 'react';
import UserContext from "./context/UserContext";
import Login from "./componenets/Login";
import Profile from './componenets/Profile';

function App() {
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{user, setUser}}>
        <Login />
        <Profile />
    </UserContext.Provider>
  )
}

export default App
