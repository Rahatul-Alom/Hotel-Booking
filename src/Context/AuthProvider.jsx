import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,} from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext()
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] =useState(true);

    // create user
    const createUser = (email, pasword) =>{
       setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pasword)
    }

    // singin user
    const signIn = (email,pasword)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pasword)
    }


    // Google Login
      const googleLogIn =() =>{
        return signInWithPopup(auth, googleProvider)
    }

    // logout
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            const userEmail = currentUser?.email || user?.email
            const loggedUser = {email: userEmail}
            console.log('current user', currentUser);
            setUser(currentUser);
            setLoading(false);
                // if user exist then use a token
                if(currentUser){
                    axios.post('http://localhost:5000/jwt',loggedUser, { withCredentials: true})
                        .then(res =>{
                            console.log(res.data)})
                        }
                        else{
                            axios.post('http://localhost:5000/logout', loggedUser, {withCredentials: true})
                                .then( res =>{
                                    console.log(res.data);
                                })
                        }
        })
        return() => {
            unSubscribe();
        }
    },[])

    const authInfo = {user, createUser, googleLogIn,  loading, signIn, logOut}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}  
        </AuthContext.Provider>
    );
};


export default AuthProvider;