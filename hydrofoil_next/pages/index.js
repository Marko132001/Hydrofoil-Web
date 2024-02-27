import HomeHeader from "../components/HomeHeader";
import HomeLatestPosts from "../components/HomeLatestPosts";
import LayoutElements from "../components/LayoutElements";
import axios from "axios";
import Image from "next/image";
import vector1 from "../images/vector1.png";
import vector2 from "../images/vector2.png";
import NavBar from "../components/NavBar";
import Testimonials from "../components/DataComponents/Testimonials";
import Footer from "../components/Footer";
import CountdownTimer from "../components/DataComponents/CountdownTimer";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation, UseTranslation } from "next-i18next";
import GridGallery from "../components/DataComponents/GridGallery";

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

/* Recruiting section (fetching images) -- temporary
const gridGalleryData = {
    title: "",
    images: [
      {
        text: "MARKETING TEAM",
        image: {
          data: {
            attributes: {
              ext: ".jpg",
              url: "https://res.cloudinary.com/hydrofoilweb/image/upload/v1695482488/Malo_vitra_26b903dc98.jpg?updated_at=2023-09-23T15:21:29.428Z"
            }
          }
        }
      },
      {
        text: "ENGINEERING TEAM",
        image: {
          data: {
            attributes: {
              ext: ".jpg",
              url: "https://res.cloudinary.com/hydrofoilweb/image/upload/v1695482806/Teredo_Navalis_dc4e77369a.jpg?updated_at=2023-09-23T15:26:47.862Z"
            }
          }
        }

      }
    ]
}

*/

function Home( {posts, home, locale} ) {

  const { t }  = useTranslation();

  return (
    <>
      <NavBar t={t} />
      <Vector1 /><Vector2 />
      {//Recruiting section (temporary)
      /*
      <CountdownTimer t={t}/>
      <div>
        <h1 className="text-4xl text-center mt-3 font-extralight">{t("home:rec_title")}</h1>
        <h1 className="text-xl text-center mt-10 font-extralight">{t("home:contact_us")} <span className="font-bold">uptzri@gmail.com</span></h1>
        <div className="grid grid-cols-2 gap-1 mt-12 mb-20">
          <div
          className={`relative transition ease-in duration-300 transform`}
          >
            <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-sm leading-8 max-sm:text-xs text-center">
                <b>{t("home:marketing")}</b> <br/>
                {t("home:social_media")} <br/>
                {t("home:web_design")} <br/>
                {t("home:foto_video")}
              </div>
            </div>
            <img className="w-full h-full" src={process.env.IMAGES_STRAPI_URL + gridGalleryData.images[0].image.data.attributes.url} alt="" />
          </div>
          <div
          className={`relative transition ease-in duration-300 transform`}
          >
            <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-sm leading-8 max-sm:text-xs text-center">
                <b>{t("home:engineering")}</b> <br/>
                {t("home:propulsion")} <br/>
                {t("home:electronics")} <br/>
                {t("home:shipbuilding")}
              </div>
            </div>
            <img className="w-full h-full" src={process.env.IMAGES_STRAPI_URL + gridGalleryData.images[1].image.data.attributes.url} alt="" />
          </div>
        </div>
      </div>
      */}
      <HomeHeader t={t}/>
      <HomeLatestPosts posts={posts} t={t}/>
      {/*<Testimonials t={t}/>*/}
      <LayoutElements elements={home} />  
      <Footer t={t} />   
    </>
  )
}


export default Home;


export async function getStaticProps({ locale }){

  const postRes = await axios.get(`${process.env.STRAPI_URL}/api/posts/?locale=${locale}&sort=date%3Adesc&pagination[pageSize]=4&populate=*`);
  const homeRes = await axios.get(`${process.env.STRAPI_URL}/api/home-page/?locale=${locale}&populate=deep`);

  return {
    props: {
      posts: postRes.data,
      home: homeRes.data,
      ...(await serverSideTranslations(locale, ["home", "navbar", "footer"])),   
    }, 

  };
}