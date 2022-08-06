import HomeHeader from "../components/HomeHeader";
import HomeLatestPosts from "../components/HomeLatestPosts";
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


// posts will be populated at build time by getStaticProps()
function Home( {posts} ) {
  return (
    <>
      <Vector1 /><Vector2 />
      <HomeHeader />
      <HomeLatestPosts posts={posts}/>
    </>
  )
}


export default Home;


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