import React from "react";
import Navbar from "./Navbar";

import insta from "./instaa.jpg";
import linkedin from "./linkdin.png";
import github from "./github.png";
import whatsapp from "./whatsapp.png";
import tele from "./telegram.png";
import mail from "./mail.png"


import "./contact.css";

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="contact_css">

        <div className="c1"> Contact Me</div>
        <hr />


        <div className="elements">
          <div className="linkedin">
            <a href="https://www.linkedin.com/in/sumit-kumar-bairwa/" target = "_blank">
              <img src={linkedin} alt="Button Name" className="linkedin1" />
            </a>
          </div>
          <div className="telegram">
            <a href="https://t.me/Sumit1074" target="_blank">
              <img src={tele} alt="Button Name" className="telegram1" />
            </a>
          </div>

          <div className="whatsapp">
            <a href="http://wa.me/+919660931440" target="_blank">
              <img src={whatsapp} alt="Button Name" className="whatsapp1" />
            </a>
          </div>
          <div className="github">
            <a href="https://github.com/Sumitkb21" target="_blank">
              <img src={github} alt="Button Name" className="github1" />
            </a>
          </div>
          <div className="insta">
            
            <a href="https://www.instagram.com/sumitkb21/" target="_blank" >
              <img src={insta} alt="Button Name" className="insta1" />
            </a>
          </div>

          <div className="mail">
            
            <a href="mailto:sumitkumar83339@gmail.com" target="_blank" >
              <img src={mail} alt="Button Name" className="mail1" />
            </a>
            
          </div>
        </div>



        
      </div>
    </>
  );
}
