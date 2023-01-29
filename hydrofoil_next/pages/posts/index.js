import axios from "axios";
import AllPosts from '../../components/AllPosts';
import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation, UseTranslation } from "next-i18next";


function Posts({ posts, locale }){

    const { t }  = useTranslation();

    return(
        <>
            <NavBar t={t} />
            <AllPosts posts={posts} t={t} />
            <Footer t={t} />
        </>
    );
}


export default Posts;


export async function getStaticProps({locale}){

  const postRes = await axios.get(`${process.env.STRAPI_URL}/api/posts/?populate=*`);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: postRes.data,        //postsRes.data -> array of posts
      ...(await serverSideTranslations(locale, ["posts", "navbar", "footer"])),
    },       
  };
}