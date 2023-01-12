import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";
import NavBar from "../components/NavBar";
import Link from "next/link";


function OpenSource({ openSource, nav }) {

  return (

    <div className="open-source-page">

      <div className="open-source-page-hero">
        <section class="open-source-page-hero-title">
          <h1>
            <span>Open&nbsp;Source</span>
            <span>Open&nbsp;Source</span>
            <span>Open&nbsp;Source</span>
          </h1>
          <div className="open-source-page-hero-shadow"></div>
        </section>
        <p>
          We believe that by working together and contributing to each other,
          we can improve each other and make a big step forward with technology.
          Here you can find useful information, source code, 3D models and much
          more. If you have any questions or comments, send us a message! We
          will be happy to answer!
        </p>
        {/* <div className="dummy-code1">


          export async function getStaticProps&#40;&#41;&#123;  <br></br>

          import React from "react";<br></br>
          import axios from "axios";<br></br>
          import LayoutElements from "../components/LayoutElements";<br></br>
          import NavBar from "../components/NavBar";<br></br>
          function Media&#40; &#123; media, nav&#125; &#41;&#123;<br></br>
          return&#40;<br></br>
          &lt;&gt;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    &lt;NavBar navItems=&#123;nav&#125; /&gt;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    &lt;LayoutElements elements=&#123;media&#125; /&gt;<br></br>
          &lt;/&gt;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    &#41;;<br></br>
          &#125;<br></br>
          export default Media;<br></br>
          export async function getStaticProps&#40;&#41;&#123;<br></br>
          const mediaRes = await axios.get &#40; `$&#123;process.env.STRAPI_URL&#125;/api/media/?populate=deep` &#41;;<br></br>
          const navRes = await axios.get &#40; `$&#123;process.env.STRAPI_URL&#125;/api/navigation-items/?populate=deep` &#41;;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &#123;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;props: &#123;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;media: mediaRes.data,<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    nav: navRes.data,<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &#125;,<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    &#125;;<br></br>
          &#125;<br></br>
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const mediaRes = await axios.get&#40;`$&#123;process.env.STRAPI_URL&#125;/api/media/?populate=deep`&#41;; <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const navRes = await axios.get&#40;`$&#123;process.env.STRAPI_URL&#125;/api/navigation-items/?populate=deep`&#41;; <br></br>
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &#123;  <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;props: &#123;   <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;media: mediaRes.data,   <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nav: navRes.data,    <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp; &#125;,         <br></br>
          &#125;;    <br></br>
          &#125;   <br></br>

          import React, &#123; useState &#125; from "react";<br></br>
          <br></br>
          function Dropdown&#40; &#123;nav&#125; &#41; &#123;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const &#91;dropdown, setDropdown&#93; = useState&#40;false&#41;;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const &#91;subMenu, setSubMenu&#93; = useState&#40;false&#41;;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &#40;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;&#62;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;ul<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className=&#123;dropdown ? "projects-submenu clicked" : "projects-submenu"&#125;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onClick=&#123;&#40;&#41; =&#62; setDropdown&#40;!dropdown&#41;&#125;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#62;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;nav.map&#40;&#40;item&#41; =&#62; &#123;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&#40;item.extendCheck&#41;&#123;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &#40;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;li key=&#123;item.id&#125; onMouseEnter=&#123;&#40;&#41; =&#62; setSubMenu&#40;true&#41;&#125;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onMouseLeave=&#123;&#40;&#41; =&#62; setSubMenu&#40;false&#41;&#125;&#62;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;a<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;href=&#123;item.url&#125;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className="submenu-item"    <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#62;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;item.title&#125;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/a&#62;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/li&#62;   <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#41;;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &#40;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;li key=&#123;item.id&#125;&#62;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;a<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;href=&#123;item.url&#125;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className="submenu-item"<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onClick=&#123;&#40;&#41; =&#62; setDropdown&#40;false&#41;&#125;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#62;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;item.title&#125;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/a&#62;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/li&#62;    <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#41;;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;&#41;&#125;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/ul&#62;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/&#62;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#41;;
          &#125;

          export default Dropdown;

        </div> */}
        {/* <div className="open-source-page-hero-circle1"></div> */}

        <div className="open-source-pagedown-arrow"></div>
      </div>

      <hr className="open-source-page-horizontal-line"></hr>

      <div className="open-source-page-projects-teredo">

        <p className="open-source-page-projects-title">
          <strong>Teredo Navalis</strong>
        </p>
        <hr className="open-source-page-projects-title-horizontal-line"></hr>
        <p className="open-source-page-projects-teredo-description">
          The fastest solar boat in Croatia. High quality description here.
          UPTZ is the best. We love Croatia.
        </p>
        <p>&nbsp;</p>
        <div className="open-source-page-projects-wrapper">
          <div className="open-source-page-projects-wrapper-section">
            <div className="open-source-page-projects-wrapper-section-1-icon">&nbsp;</div>
            <div className="open-source-page-projects-wrapper-section-1-text">
              <strong>Electrical Systems </strong> <br></br>
              Battery Management <br></br>
              Electrical Schematic <br></br>
              Printed Circuit Boards <br></br>
              Documentation <br></br>
            </div>
            <button className="open-source-page-button">
              Download
            </button>
          </div>
          <div className="open-source-page-projects-wrapper-section">
            <div className="open-source-page-projects-wrapper-section-2-icon">&nbsp;</div>
            <div className="open-source-page-projects-wrapper-section-2-text">
              <strong>Mechanical Systems </strong> <br></br>
              Hydrofoil Design <br></br>
              Propeller Design <br></br>
              Transmission System <br></br>
              CAD Models <br></br>
            </div>
            <button className="open-source-page-button">
              Download
            </button>
          </div>
        </div>


      </div>


      <div className="open-source-page-projects-delta">

        <p className="open-source-page-projects-title">
          <strong>Delta One</strong>
        </p>
        <hr className="open-source-page-projects-title-horizontal-line"></hr>
        <p className="open-source-page-projects-teredo-description">
          Our developer team is the best. They work 24/7 to make this look 3/10. Yay. We love devs.
        </p>
        <p>&nbsp;</p>
        <div className="open-source-page-projects-wrapper">
          <div className="open-source-page-projects-wrapper-section">
            <div className="open-source-page-projects-wrapper-section-1-icon">&nbsp;</div>
            <div className="open-source-page-projects-wrapper-section-1-text">
              <strong>Electrical Systems </strong> <br></br>
              Battery Management<br></br>
              Electrical Schematic <br></br>
              Printed Circuit Boards<br></br>
              Documentation <br></br>
            </div>
            <button className="open-source-page-button">
              Download
            </button>
          </div>
          <div className="open-source-page-projects-wrapper-section">
            <div className="open-source-page-projects-wrapper-section-2-icon">&nbsp;</div>
            <div className="open-source-page-projects-wrapper-section-2-text">
              <strong>Mechanical Systems </strong> <br></br>
              Hydrofoil Design <br></br>
              Propeller Design <br></br>
              Transmission System <br></br>
              CAD Models <br></br>
            </div>
            <button className="open-source-page-button">
              Download
            </button>
          </div>
        </div>


      </div>

      <hr className="open-source-page-horizontal-line"></hr>
    </div >

  );
}

export default OpenSource;


export async function getStaticProps() {

  const openSourceRes = await axios.get(`${process.env.STRAPI_URL}/api/open-source/?populate=deep`);
  const navRes = await axios.get(`${process.env.STRAPI_URL}/api/navigation-items/?populate=deep`);

  return {
    props: {
      openSource: openSourceRes.data,
      nav: navRes.data,
    },
  };
}