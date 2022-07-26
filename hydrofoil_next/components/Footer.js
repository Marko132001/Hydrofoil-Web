import React from 'react'

function Footer() {
  return (


  <footer className="footer">
    <div className="containerFooter">
      <div className="row">
        <div className="footerColumn">
          <h4>Contacts</h4>
          <ul>
              <li><a>+385 91 585 4867</a></li>
              <li><a>adriahydrofoil@contact.com</a></li>
              <li><a>Vukovarska 62, 51000 Rijeka</a></li>
          </ul>
        </div>
        <div className="footerColumn">
          <h4>Follow us</h4>
          <div className="socialLinks">
            <a href="https://hr-hr.facebook.com/adriahydrofoil/"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/adriahydrofoil?lang=hr"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/adriahydrofoil/"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>


  )
}

export default Footer