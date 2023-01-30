import React, {useState, useEffect} from 'react';

function WebForm( {t} ) {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState(`${t("contact:button_send")}`);

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  useEffect(() => {
    if((buttonText != `${t("contact:button_send")}`) && (buttonText != `${t("contact:button_sending")}`)){
      setButtonText(`${t("contact:button_send")}`)
    }
  });

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText(`${t("contact:button_sending")}`);
      const res = await fetch("/api/sendmail", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText(`${t("contact:button_send")}`);

        // Reset form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText(`${t("contact:button_send")}`);
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(fullname, email, subject, message);
  };

  return (
    
    <div className="web-form">

        <h1>{t("contact:title")}</h1>
        <p className="sub-title">
            {t("contact:subtitle")}
        </p>

        <div id="contact-container">
            <div className="contact-info">
                <h4>
                    {t("contact:form_title")}
                </h4>
                <p>{t("contact:form_subtitle")}</p>
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
                    <a href="https://www.facebook.com/uptz18/" className="icon-circle">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/uptz_aats" className="icon-circle">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/uptz" className="icon-circle">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UC7Z4qrgwJTPRyPaHnAP94hg" className="icon-circle">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
            
        <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-black bg-opacity-30"
        >

          <label
            htmlFor="fullname"
            className="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
            {t("contact:name")}<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-gray-300"
          />
          {errors?.fullname && (
            <p className="text-red-500">{t("contact:name_error")}</p>
          )}

          <label
            htmlFor="email"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            {t("contact:e-mail")}<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-gray-300"
          />
          {errors?.email && (
            <p className="text-red-500">{t("contact:email_error")}</p>
          )}

          <label
            htmlFor="subject"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            {t("contact:subject")}<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-gray-300"
          />
          {errors?.subject && (
            <p className="text-red-500">{t("contact:subject_error")}</p>
          )}
          <label
            htmlFor="message"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            {t("contact:message")}<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-gray-300"
          ></textarea>
          {errors?.message && (
            <p className="text-red-500">{t("contact:message_error")}</p>
          )}
          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
            >
              {buttonText}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-cyan-500 ml-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                {t("contact:success_message")}
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                {t("contact:failure_message")}
              </p>
            )}
          </div>
        </form>
        </div>

    </div>
    
  );
  
 

}

export default WebForm