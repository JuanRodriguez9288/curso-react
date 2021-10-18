import { useState, useEffect, createContext } from 'react'
export const UserContext = createContext([])

export const UserContextProvider = ({children}) =>{
  const [userName, setUserName] = useState(String)
  const [pass, setPass] = useState()
  const login = (objUser) => {
      setUserName(objUser.username)
      setPass(objUser.password)
  }

  const logout = () => {
      setUserName()
      setPass()
  }
  
    return (
      <UserContext.Provider
      value={{
        userName,
        pass,
        login,
        logout
      }}
  >
      {children}
      </UserContext.Provider>
    );

}