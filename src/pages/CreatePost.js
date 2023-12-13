import React, { useEffect, useState } from 'react'
import { addDoc, collection} from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({isAuth}) => {

  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postCollectionRef = collection (db, "posts");

  let navigate = useNavigate();
   
  const createPost = async () => {
     await addDoc(postCollectionRef,{
      title,
      postText,
      author:{name: auth.currentUser.displayName,id: auth.currentUser.uid},
      });
      navigate("/");
  }

  useEffect(()=>{
    if(!isAuth){
      navigate("/login");
    }
  }, []);

  return (
    <div className='createPostPage'>
      <h1 className='create'> Create a post</h1>

      <div className='cpContainer'>
        <input className='title' placeholder="Title.." onChange={(event)=>{setTitle(event.target.value)}}></input>
        <textarea className='post' placeholder="Post.." rows="10" onChange={(event)=>{setPostText(event.target.value)}}></textarea>
        <button className='submit' onClick={createPost}>Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost