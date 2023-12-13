import React, { useEffect, useState } from 'react';
import { deleteDoc, getDocs } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../firebase-config';
import { doc } from 'firebase/firestore';
import { auth } from '../firebase-config';
import del from './delete.png';

function HomePage({isAuth}) {

  const[postLists, setPostLists]=useState([]);
  const postsCollectionRef = collection(db,"posts");

  useEffect(()=>{
    const getPosts = async () =>{
      const data = await getDocs(postsCollectionRef);
      setPostLists(data.docs.map((doc)=>({...doc.data(),id: doc.id})));
    };

    getPosts();
  });

  const deletePost = async(id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  }

  return( 
    <div className="homePage">
      {postLists.map((post)=>{
        return <div className='feedPost'>
        <div className='postTitle'>
          
          <h4 className='pTitle'>{post.title}</h4>
          
          {isAuth && post.author.id === auth.currentUser.uid && 
          <button className='pIcon' onClick={()=>{deletePost(post.id)}}><img src={del}/></button> }
          
        </div>

        <div className='postText'>
          {post.postText}
        </div>
        <h3 className='authorName'>{post.author.name}</h3>
        </div>
  })}
  </div>
)}

export default HomePage;