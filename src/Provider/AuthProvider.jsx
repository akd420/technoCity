/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebaseConfig";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [brands, setBrands] = useState([]);



  //google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //register user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign out

  const signOutUser = () => {
    return signOut(auth);
  };

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("/brands2.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBrands(data);
  //       onAuthStateChanged(auth, (user) => {
  //         setUser(user);
  //         setLoading(false);
  //       });
  //     });
  // }, []);

  useEffect(() => {
    fetch("/brands2.json")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      })
      .catch((error) => {
       
        console.error("Error fetching brands data:", error);
      })
      .finally(() => {
        onAuthStateChanged(auth, (user) => {
          setUser(user);
          setLoading(false);
        });
      });
  }, []);



  const authenticate = {
    user,
    googleLogin,
    createUser,
    signInUser,
    signOutUser,
    loading,
    brands,
    setLoading,
  };
  
  // if (loading) {
  //   return (
  //     <div className="w-screen h-screen flex items-center justify-center">
  //       <span className="loading loading-spinner text-rose  loading-lg"></span>
  //     </div>
  //   );
  // }
  // else{
  //   return (
  //     <AuthContext.Provider value={authenticate}>
  //       {children}
  //     </AuthContext.Provider>
  //   );
  // }
  return (
        <AuthContext.Provider value={authenticate}>
          {children}
        </AuthContext.Provider>
      );
  
};

export default AuthProvider;
