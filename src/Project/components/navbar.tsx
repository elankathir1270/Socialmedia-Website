import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'

export const Navbar= ()=> {

    const [user] = useAuthState(auth)

    const signUserOut= async ()=> {
        await signOut(auth);
    }

    return(
        <div className='navbar'>
            <div className='link'>

            <Link className='home' to ='/'>Home</Link>
            {!user ?  (<Link className='login' to ='/login'>Login</Link>) :
            <Link className='post' to ='/createpost'>Create Post</Link>}

            </div>
            {user && (

            <div className='userDetails'>
            <p className='name'>{user?.displayName}</p>
            <img className='photo' src={user?.photoURL ||""} width='50' height='50' />
            <button onClick={signUserOut}>Log Out</button>
            </div>
            
            )}
          
            {/* auth.currentUser? */}
        </div>
    )
}