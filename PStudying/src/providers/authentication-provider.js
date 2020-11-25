import React, { useState } from 'react'

const AuthenticationContext = React.createContext();
function AuthenticationProvider(props) {
    const [authentication, setAuthentication] = useState();
    return (
           <AuthenticationContext.Provider value={{authentication, setAuthentication}}>
               {props.children}
           </AuthenticationContext.Provider>
    )   
}
export {AuthenticationContext, AuthenticationProvider};
