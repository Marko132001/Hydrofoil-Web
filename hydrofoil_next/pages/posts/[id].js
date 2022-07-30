import axios from "axios";
import React from "react";
import MarkdownIt from "markdown-it";

function PostPage({post}) {

  const md = new MarkdownIt();
  const htmlContent = md.render(post.data.attributes.content);

  return (
  <article>
    <header>
      <h1 className="postPage-title">{post.data.attributes.title}</h1>
    </header>
    <section className="postPage-content" dangerouslySetInnerHTML={{__html: htmlContent}}></section>
  </article>
  );
}

export default PostPage;

export async function getStaticProps({params}){
  const postRes = await axios.get(`http://localhost:1337/api/posts/${params.id}`);

  return {
    props: {
      post: postRes.data
    }
  }
}

export async function getStaticPaths(){
const postsRes = await axios.get("http://localhost:1337/api/posts");

const paths = postsRes.data.data.map((post) => {
  return {params: {id: post.id.toString()}}
});

  return{
    paths,
    fallback: false,
  };
}