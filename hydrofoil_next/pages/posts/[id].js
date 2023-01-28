import axios from "axios";
import React from "react";
import NavBar from "../../components/NavBar";
import PostPagePreview from "../../components/PostPagePreview";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation, UseTranslation } from "next-i18next";

function PostPage({post, nav, locale}) {

  const { t }  = useTranslation();

  return (
  <>
    <NavBar t={t} />
    <PostPagePreview post={post} />
  </>
  );
}

export default PostPage;

export async function getStaticProps({params, locale}){
  const postRes = await axios.get(`${process.env.STRAPI_URL}/api/posts/${params.id}/?populate=deep`);
  const navRes = await axios.get(`${process.env.STRAPI_URL}/api/navigation-items/?populate=deep`);

  return {
    props: {
      post: postRes.data,
      nav: navRes.data,
      ...(await serverSideTranslations(locale, ["navbar"])),
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