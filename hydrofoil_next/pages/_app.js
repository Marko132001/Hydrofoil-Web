import "../styles/index.scss";
import Footer from "../components/Footer";
import { appWithTranslation } from "next-i18next"; 

function MyApp({ Component, pageProps }) {


  return (
    <>
      
        <Component {...pageProps} />
      <Footer />
    </>
    );
}



export default appWithTranslation(MyApp);