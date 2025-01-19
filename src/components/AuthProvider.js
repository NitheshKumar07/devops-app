// import React, { createContext, useState, useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../Firebase";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser); // Update the user state
//             setLoading(false);
//         });

//         return () => unsubscribe();
//     }, []);

//     if(loading){
//         return (<>
//            <div id="loadId">
//                 <p id="logoNam">TaskBuddy</p>
//             </div>    
//          </>)
//     }
//     return (
//         <AuthContext.Provider value={{ user, setUser }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;




import React, { createContext, useState, useEffect, useContext } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Firebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update the user state
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div id="loadId">
        <p id="logoNam">TaskBuddy</p>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;