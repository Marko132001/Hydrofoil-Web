import axios from "axios";
import React from "react";
import NavBar from "../../components/NavBar";
import PostPagePreview from "../../components/PostPagePreview";

function PostPage({post, nav}) {

  return (
  <>
    <NavBar navItems={nav} />
    <PostPagePreview post={post} />
  </>
  );
}

export default PostPage;

export async function getStaticProps({params}){
  const postRes = await axios.get(`${process.env.STRAPI_URL}/api/posts/${params.id}/?populate=deep`);
  const navRes = await axios.get(`${process.env.STRAPI_URL}/api/navigation-items/?populate=deep`);

  return {
    props: {
      post: postRes.data,
      nav: navRes.data,
    }
  }
}

export async function getStaticPaths(){
const postsRes = await axios.get(`${process.env.STRAPI_URL}/api/posts`);

const paths = postsRes.data.data.map((post) => {
  return {params: {id: post.id.toString()}}
});

  return{
    paths,
    fallback: false,
  };
}