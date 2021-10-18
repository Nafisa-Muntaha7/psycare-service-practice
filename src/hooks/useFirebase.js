import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider } from 'firebase/auth'
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth()

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                console.log(res.user);
                setUser(res.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(res => {
                setUser(res.user);
            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, []);

    return {
        user,
        error,
        signInUsingGoogle,
        signInUsingGithub,
        logout
    }
}

export default useFirebase;