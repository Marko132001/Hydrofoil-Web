import HomeHeader from "../components/HomeHeader";
import HomeLatestPosts from "../components/HomeLatestPosts";
import axios from "axios";


// posts will be populated at build time by getStaticProps()
function Home( {posts} ) {
  return (
    <>
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