import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app, provider } from "../firebase/firebase.config";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name, url) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LogOut = () => {
    return signOut(auth);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const isExistingUser = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      isExistingUser();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    updateUser,
    logInUser,
    loading,
    setLoading,
    LogOut,
    googleLogin,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
