import React, {useState} from 'react';

function WebForm( {element} ) {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

  return (
    
    <div className="web-form">

        <h1>Javite se</h1>
        <p className="sub-title">
            Želite li stupiti u kontakt? 
            Voljeli bismo čuti vaše mišljenje. 
            Evo kako možete doći do nas.
        </p>

        <div id="contact-container">
            <div className="contact-info">
                <h4>
                    Kontaktne informacije
                </h4>
                <p>Ispunite obrazac i pošaljite</p>
                <div className="icon-text">
                    <i className="fa gg-phone"></i>
                    <span>+385 98 9176039</span>
                </div>
                <div className="icon-text">
                    <i className="fa gg-mail"></i>
                    <span>uptzri@gmail.com</span>
                </div>
                <div className="icon-text">
                    <i className="fa gg-track"></i>
                    <span>Ante Kovačića 17, 51000 Rijeka, Croatia</span>
                </div>
                <div className="social-media">
                    <a href="#" className="icon-circle">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="icon-circle">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="icon-circle">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="icon-circle">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="fullname">Ime</label>
                        <input 
                        type="text" 
                        value={fullname}
                        onChange={(e) => {
                        setFullname(e.target.value);
                        }}
                        name="fullname"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Vaš mail</label>
                        <input 
                        type="email" 
                        name="email"
                        value={email}
                        onChange={(e) => {
                        setEmail(e.target.value);
                        }}
                        />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <label for="subject">Predmet</label>
                        <input type="text" name="subject"/>
                    </div>
                </div>
                <div className="col">
                    <div className="form-group solo">
                        <label for="message">Vaša poruka</label>
                        <textarea name="message"></textarea>
                    </div>
                </div>
                <div className="col">
                    <div className="form-group solo right">
                        <button className="primary">Pošalji</button>
                    </div>
                </div>    

            </form>
        </div>

    </div>
    
  );
  
 

}

export default WebForm