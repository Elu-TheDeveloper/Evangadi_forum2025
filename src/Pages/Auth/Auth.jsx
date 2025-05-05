import React, {  createContext, useContext, useEffect,  useState } from 'react'

const AuthContext = createContext()
const AuthProvider = ({children})=>{
const[user,setUser] = useState(null)
useEffect(()=>{
    const token = localStorage.getItem('token_id')
    if(token){
        setUser({token})
    }
},[])
const logout =()=>{
 localStorage.removeItem('token_id')
 setUser(null)  
}

return (
<AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
 
export const useAuth= ()=>useContext(AuthContext)
export default AuthProvider;