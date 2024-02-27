import React from 'react';
import Image from 'next/image';
import Uptz from "../images/uptz_logo2.png";
import RitehWeb from "../images/riteh-web2.png";
import CreativeCommons from "../images/cc.png";
import burza_nautike_logo from "../images/burza_nautike_logo.png";

function Footer({t}) {
  return (


  <footer className="footer">
    <div className="containerFooter">
      <div className="row">
        <div className="footerColumn">
          <h4>{t("footer:contacts")}</h4>
          <ul>
              <li><a>Mob: +385 98 9176039</a></li>
              <li><a>E-Mail: uptzri@gmail.com</a></li>
              <li><a>{t("footer:adresa")}: Ante Kovačića 17, 51000 Rijeka, Croatia</a></li>
          </ul>
        </div>
        <div className="footerColumn">
          <h4>{t("footer:follow-us")}</h4>
          <div className="socialLinks">
            <a href="https://www.facebook.com/uptz18/"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.youtube.com/channel/UC7Z4qrgwJTPRyPaHnAP94hg"><i className="fab fa-youtube"></i></a>
            <a href="https://www.instagram.com/uptz_aats"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/uptz"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footerColumn">
          <div className="logoText">
            <Image
                className="rounded-lg"
                src = {Uptz}
                alt = "image"
                width="100px"
                height="100px"
            />
            <h5>COPYRIGHT © 2023. UPTZ • {t("footer:copyright")}</h5>
          </div>
        </div>
        <div className="footerColumn">
          <div className="logoText">
            <a href="https://rwt.riteh.hr/about?lang=hr">
              <Image
                  src = {RitehWeb}
                  alt = "image"
                  width="100px"
                  height="100px"
              />
            </a>
            <h5>RitehWebTeam, 2023.</h5>
            <a href="http://creativecommons.org/licenses/by/4.0/">
              <Image
                  src = {CreativeCommons}
                  alt = "image"
                  width="80px"
                  height="15px"
              />
            </a>
          </div>
        </div>
        <div className="footerColumn">
          <div className="logoText mt-12">
            <a href="https://www.burzanautike.com/">
              <Image
                  src = {burza_nautike_logo}
                  alt = "image"
                  width="150px"
                  height="50px"
              />
            </a>
            <h5>{t("footer:media_partner")}</h5>
          </div>
        </div>
      </div>
    </div>
  </footer>


  )
}

export default Footer