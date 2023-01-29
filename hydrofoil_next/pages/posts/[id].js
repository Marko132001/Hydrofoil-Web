import axios from "axios";
import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PostPagePreview from "../../components/PostPagePreview";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation, UseTranslation } from "next-i18next";

function PostPage({post, locale}) {

  const { t }  = useTranslation();

  return (
  <>
    <NavBar t={t} />
    <PostPagePreview post={post} />
    <Footer t={t} />
  </>
  );
}

export default PostPage;

export async function getStaticProps({params, locale}){
  const postRes = await axios.get(`${process.env.STRAPI_URL}/api/posts/${params.id}/?populate=deep`);

  return {
    props: {
      post: postRes.data,
      ...(await serverSideTranslations(locale, ["navbar", "footer"])),
    }
  }
}

export async function getStaticPaths({locales}){
const postsRes = await axios.get(`${process.env.STRAPI_URL}/api/posts`);

const paths = postsRes.data.data.map((post) => locales.map((locale) => ({
   params: {id: post.id.toString()}, locale
}))).flat();

  return{
    paths,
    fallback: false,
  };
}