import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
export const AuthContext = createContext(null);
const AuthProvaider = ({ children }) => {
  const auth = getAuth(app);
  const googleProvaider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvaider);
  };

  const createUser = (email, password) => {
    setUser(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginEmailPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };
  // user observer
  useEffect(() => {
    const unsubs = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubs();
  }, []);

  const authinfo = {
    user,
    loading,
    googleLogin,
    createUser,
    logout,
    loginEmailPass,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvaider;
