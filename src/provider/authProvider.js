import React, { useContext, useState } from 'react';

const authContext = React.createContext()

const AuthProvider = (props) => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <authContext.Provider
        value={{
            isLogin,
            setIsLogin            
        }}
        >
            {props.children}
        </authContext.Provider>
    )
}

export { authContext, AuthProvider }
