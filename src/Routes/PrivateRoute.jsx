import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <RingLoader
        color="#0eb6eb"
        cssOverride={{margin: "200px auto"}}
        loading
        size={100}
        speedMultiplier={1}
      />
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;