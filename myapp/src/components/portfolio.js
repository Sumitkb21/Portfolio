import React from "react";
import Navbar from "./Navbar";
import "./portfolio.css";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <div className="portfolio">

        <div className="pro_head">
          <h1>Projects</h1>
          <hr />
        </div>
        
        <section className="projects">


          <div className="box">
            <h2>MAPGO</h2>
            <div className="hidden">
              <ul>
                <li>
                  This is an IITK-Map Web Application with event scheduling
                  functionality
                </li>
                <li>
                  Github :
                  <a href="https://github.com/Sumitkb21/MapGO" target="_blank" >
                    <button className="project_btn">link</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="box">
            <h2>Recommendation System</h2>

            <div className="hidden">
              <ul>
                <li>Movie Recommendation system an AI project</li>
                <li>It Recommends Movie based on Item based collaboration </li>
                <li>
                  Github :
                  <a href="https://github.com/Sumitkb21/AI_Movie_recommendation_system" target="_blank">
                    <button className="project_btn">link</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="box">
            <h2>Space Travel</h2>
            <div className="hidden">
              <ul>
                <li>It is a Space Travel Ticket Management System</li>
                <li>This is an OOPS based Programing project. </li>
                <li>
                  Github :
                  <a href="https://github.com/Sumitkb21/Space_Travel_Ticket_Management_system" target="_blank">
                    <button className="project_btn">link</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="skills">
          <div className="pro_head">
            <h1>Skills</h1>
            <hr />
          </div>

          <div className="box1">
            <div className="box2"> Competitive Programming </div>
            <div className="box2"> DSA </div>
            <div className="box2"> C++ </div>
            <div className="box2"> HTML </div>
            <div className="box2"> CSS </div>
            <div className="box2"> Java Script </div>
            <div className="box2"> React.js </div>
            <div className="box2"> Node.js </div>
          </div>
        </section>

        <div className="resume">
          <a href="https://drive.google.com/file/d/15M8B6sQNBiXVISgZkcYZ6RSKa6J91i3W/view?usp=sharing" target="_blank">
            <button className="btn">CV</button>
          </a>
        </div>
      </div>
    </>
  );
}
