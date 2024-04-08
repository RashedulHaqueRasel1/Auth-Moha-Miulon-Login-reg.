import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { auth } from "../fireBase/fireBase.init";



export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // user Create
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }



  // user SignIn
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }


  // google Login
  const singWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }


  // logOut

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }


  //  user Manage 
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)

      // console.log('ooooooooo', currentUser)
    });
    return () => {
      unSub()
    }
  }, [])


  const authInfo = { user, loading, createUser, signInUser, logOut,singWithGoogle  }
  // console.log('user',user)





  return (
    <AuthContext.Provider value={authInfo}>

      {children}

    </AuthContext.Provider>
  )
}





AuthProvider.propTypes = {
  children: PropTypes.node
}