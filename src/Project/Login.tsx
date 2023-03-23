import { async } from "@firebase/util"
import { auth, provider } from "../Project/config/firebase"
import {signInWithPopup} from "firebase/auth"
import { useNavigate } from 'react-router-dom'  

export const Login= ()=> {

    const navigate = useNavigate();

    const signinWithGoogle = async ()=> {
       const result = await signInWithPopup(auth, provider)
       navigate('/');
    }
    return(
        <div>

            LOGIN PAGE
            <p>Sign in with GOOGLE to continue</p>
            <button onClick={signinWithGoogle}>Sign in with Google</button>

        </div>
    )
}