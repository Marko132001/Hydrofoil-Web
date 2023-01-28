import axios from "axios";
import AllPosts from '../../components/AllPosts';
import React from "react";
import NavBar from "../../components/NavBar";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation, UseTranslation } from "next-i18next";


function Posts({ posts, nav, locale }){

    const { t }  = useTranslation();

    return(
        <>
            <NavBar t={t} />
            <AllPosts posts={posts} t={t} />
        </>
    );
}


export default Posts;


export async function getStaticProps({locale}){

  const postRes = await axios.get(`${process.env.STRAPI_URL}/api/posts/?populate=*`);
  const navRes = await axios.get(`${process.env.STRAPI_URL}/api/navigation-items/?populate=deep`);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: postRes.data,
      nav: navRes.data,        //postsRes.data -> array of posts
      ...(await serverSideTranslations(locale, ["posts", "navbar"])),
    },       
  };
}