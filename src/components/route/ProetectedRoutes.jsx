import React from 'react'
import { getUser } from '../../helpers/actions'
import { Navigate } from "react-router-dom";


const ProetectedRoutes = ({children}) => {
    const user = getUser()
  return user ?  <>{children}</>:<Navigate to="/login"/> 
}

export default ProetectedRoutes
