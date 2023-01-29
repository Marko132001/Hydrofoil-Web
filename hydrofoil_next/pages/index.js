import HomeHeader from "../components/HomeHeader";
import HomeLatestPosts from "../components/HomeLatestPosts";
import LayoutElements from "../components/LayoutElements";
import axios from "axios";
import Image from "next/image";
import vector1 from "../images/vector1.png";
import vector2 from "../images/vector2.png";
import NavBar from "../components/NavBar";
import Testimonials from "../components/DataComponents/Testimonials";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation, UseTranslation } from "next-i18next";

const Vector1 = () => {
  return <Image
          className="vector" 
          src = {vector1}
          alt = "vector1"
          width="2000px"
          height="108px"
          />
}

const Vector2 = () => {
  return <Image
          className="vector"
          src = {vector2}
          alt = "vector2"
          width="2000px"
          height="150px"
          />
}



function Home( {posts, home, nav, locale} ) {

  const { t }  = useTranslation();

  return (
    <>
      <NavBar t={t} />
      <Vector1 /><Vector2 />
      <HomeHeader t={t}/>
      <HomeLatestPosts posts={posts} t={t}/>
      <Testimonials t={t}/>
      <LayoutElements elements={home} />     
    </>
  )
}


export default Home;


export async function getStaticProps({ locale }){

  const postRes = await axios.get(`${process.env.STRAPI_URL}/api/posts/?populate=*`);
  const homeRes = await axios.get(`${process.env.STRAPI_URL}/api/home-page/?locale=${locale}&populate=deep`);
  const navRes = await axios.get(`${process.env.STRAPI_URL}/api/navigation-items/?populate=deep`);

  return {
    props: {
      posts: postRes.data,
      home: homeRes.data,
      nav: navRes.data,
      ...(await serverSideTranslations(locale, ["home", "navbar"])),   
    }, 

  };
}