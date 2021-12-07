import React from 'react';
import posts from '../data/posts.json';
import { useParams } from "react-router-dom";


const Blogspot = () => {
    const { blogid } = useParams();
    const currentPost = posts.find((postId)=>{
        return postId.id === blogid;
    });
    console.log(currentPost);
    return (
        <div>
            <p>{currentPost.date}" "{currentPost.title}</p>
            <p>{currentPost.content}</p>
        </div>
    );
};

export default Blogspot;