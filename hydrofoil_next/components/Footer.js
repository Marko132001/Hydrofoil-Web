import React from 'react'

function Footer() {
  return (


  <footer className="footer">
    <div className="containerFooter">
      <div className="row">
        <div className="footerColumn">
          <h4>Contacts</h4>
          <ul>
              <li><a>Mob: +385 98 9176039</a></li>
              <li><a>E-mail: uptzri@gmail.com</a></li>
              <li><a>Adresa: Ante Kovačića 17, 51000 Rijeka, Croatia</a></li>
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