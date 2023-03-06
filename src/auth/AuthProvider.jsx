import React from 'react';

import { fakeAuthProvider } from "./auth";

// interface AuthContextType {
//     user: any;
//     signin: (user: string, callback: VoidFunction) => void;
//     signout: (callback: VoidFunction) => void;
//   }

export const AuthContext = React.createContext({});

function AuthProvider({ children }) {
    let [user, setUser] = React.useState(null);

    let signin = (newUser, callback) => {
        return fakeAuthProvider.signin(() => {
            setUser(newUser);
            callback();
        });
    };

    let signout = (callback) => {
        return fakeAuthProvider.signout(() => {
            setUser(null);
            callback();
        });
    };

    let value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;