import axios from "axios";
import AllPosts from '../../components/AllPosts';
import React from "react";


function Posts({ posts }){
    return(
        <>
            <AllPosts posts={posts} />
        </>
    );
}


export default Posts;


export async function getStaticProps(){

  const postRes = await axios.get("http://localhost:1337/api/posts/?populate=*");


  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: postRes.data,        //postsRes.data -> array of posts
    },       
  };
}