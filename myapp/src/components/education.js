import React from "react";
import Navbar from "./Navbar";
import edu_photo from "./education_photo.jpg";
import "./education.css";
import certificate from './certification.png'

export default function Education() {
  return (
    <>
      <Navbar />

      <div className="education">

        <div className="left">
          <ul>
            <li className="content">
              Currently I'm a Junior Undergradute from Computer Sciencce
              Engineer in IIT Kanpur.
            </li>
            <li className="content">
              Completed FLY (find leader in you) program From CMI, USA.

              <a href="https://drive.google.com/file/d/1Cw5WwnH0Z898JqUYZHms4eld2fXLussU/view?usp=sharing" target="_blank">
                <img
                  src={certificate}
                  alt="Button Name" className="certificate"
                />
              </a>

            </li>
            <li className="content">
              Completed Training Intern in AI (Acamgrade)<a href="https://drive.google.com/file/d/1KopGy-TB4pQe67SmgVEtJUozvIh1BcNy/view?usp=sharing" target="_blank">
                <img
                  src={certificate}
                  alt="Button Name" className="certificate"
                />
              </a>
              and Cyber Security (IBM)<a href="https://drive.google.com/file/d/1tI2ZB2h0bRoz1CmsESzP2Q7TWfrltfYU/view?usp=sharing" target="_blank">
                <img
                  src={certificate}
                  alt="Button Name" className="certificate"
                />
              </a>
            </li>
          </ul>
        </div>

        <img className="right" src={edu_photo} alt="" />
      </div>
    </>
  );
}
