import React, {useEffect, useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
const { isAuthenticated, user } = useAuth0();

const ProfileRender = () => {
  const [auth, setAuth] = useState("")

  useEffect(() => {
    
  }, [])


  return (
    <div>
      
    </div>
  )
}
