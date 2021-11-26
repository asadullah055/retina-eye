import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, GithubAuthProvider, sendEmailVerification } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.int";


initializeAuthentication()


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

    const signInUsingGoogle = () => {

        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))

    }
    const signInUsingGithub = () => {

        const githubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, githubProvider)
            .finally(() => setIsLoading(false))

    }


    const registration = (e) => {
        e.preventDefault()
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        isLogin ? processLogin(email, password) : createNewUser(email, password)

    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setError('')
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(result => {

                setError('')
                verifyEmail()
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    const emailChange = e => {
        setEmail(e.target.value);
        e.preventDefault()
    }
    const passwordChange = e => {
        setPassword(e.target.value);
        e.preventDefault()
    }
    const toggoleLogin = e => {
        setIsLogin(e.target.checked);
    }



    useEffect(() => {
        const unsbscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsbscribed
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => { setUser({}) })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        error,
        isLogin,
        isLoading,
        registration,
        emailChange,
        passwordChange,
        createNewUser,
        logOut,
        toggoleLogin,
        signInUsingGoogle,
        signInUsingGithub
    }

}
export default useFirebase