import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    
    if (loading) {
        return <progress className="progress w-56 mx-auto"></progress>
        
    }
    if (user) {
        return children
        
    }
    return  <Navigate to='/signIn' state={{from:location}} replace />
     
        
     
         
      
       
    
    
    
};

export default PrivateRoutes;