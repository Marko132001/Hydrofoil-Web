import HomeHeader from "../components/HomeHeader";
import HomeLatestPosts from "../components/HomeLatestPosts";
import LayoutElements from "../components/LayoutElements";
import axios from "axios";
import Image from "next/image";
import vector1 from "../images/vector1.png";
import vector2 from "../images/vector2.png";

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



function Home( {posts, home} ) {
  return (
    <>
      <Vector1 /><Vector2 />
      <HomeHeader />
      <HomeLatestPosts posts={posts}/>
      <LayoutElements elements={home} />
    </>
  )
}


export default Home;


export async function getStaticProps(){

  const postRes = await axios.get("http://localhost:1337/api/posts/?populate=*");
  const homeRes = await axios.get("http://localhost:1337/api/home-page/?populate=deep")


  return {
    props: {
      posts: postRes.data,
      home: homeRes.data,        
    },       
  };
}