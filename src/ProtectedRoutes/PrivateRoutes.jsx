import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    
    if (loading) {
        return <progress className="progress w-56 mx-auto"></progress>
        
    }
    if (user) {
        return children
        
    }
    return <Navigate to='/signIn'/>
    
};

export default PrivateRoutes;