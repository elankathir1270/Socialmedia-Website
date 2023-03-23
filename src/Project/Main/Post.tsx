import { addDoc, collection,getDocs,query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Post as IPost } from './Main'
import { auth, db } from '../config/firebase'
import { async } from '@firebase/util';
import { useAuthState } from 'react-firebase-hooks/auth';

interface Props{
    post: IPost;
}

interface Likes {
    userId: string;
}

export const Post= (props: Props)=> {
    const {post} =props;
    const [user]= useAuthState(auth);

    const[likes,setLikes]=useState<Likes[] | null>(null);
   

    const likeRef = collection( db,'likes')

    const likeDocs = query(likeRef, where('postId', '==', post.id ));
    const getLikes = async ()=> {
        const data = await getDocs(likeDocs)
        setLikes(data.docs.map((doc)=>({userId:doc.data().userId})))
    }
   
    const hasUserLiked = likes?.find((like)=>like.userId === user?.uid)
    const addLike = async ()=> {
    try{
            await addDoc(likeRef,{userId: user?.uid , postId: post.id} )
            
            if(user){
                setLikes((prev)=>
                prev ? [...prev, {userId: user?.uid}] : [{userId: user?.uid}])
            }
        }catch(err){
            console.log(err)
        }
    }
    const removeLike = async ()=> {
        try{
                await addDoc(likeRef,{userId: user?.uid , postId: post.id} )
                
                if(user){
                    setLikes((prev)=>
                    prev ? [...prev, {userId: user?.uid}] : [{userId: user?.uid}])
                }
            }catch(err){
                console.log(err)
            }
        }
  

    useEffect(()=>{
        getLikes();
    },[]) 
    
    return(
        <div>
            <div>
                <h1>{post.title}</h1>
            </div>
            <div>
                <p>{post.description}</p>
            </div>
            <div>
                <p>@{post.username}</p>
                <button onClick={addLike}>
                    {hasUserLiked? <>&#128078;</>:<>&#128077;</>}</button>
                {likes && <p>Likes:{likes?.length}</p>}
            </div>
               

        </div>
    )

}