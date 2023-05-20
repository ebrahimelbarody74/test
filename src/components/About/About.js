import React from "react";
import "./About.scss";
import img from "../../assets/me/ebrahim.jpg";
import { GiCandles } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { TbUsers } from "react-icons/tb";
import { BsBriefcase } from "react-icons/bs";
import { RxSketchLogo } from "react-icons/rx";
import { BsGlobe } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import { AiFillStar } from "react-icons/ai";

function About() {
  return (
    <section class="about" id="about">
      <div class="container">
        <div class="heading">
          <h2>
            about <span>me </span>
          </h2>
          <div></div>
          <AiFillStar />
        </div>
        <div class="box-content">
          <div class="left" data-aos="fade-down" data-aos-delay="100">
            <div class="image">
              <img src={img} alt="error" />
            </div>
          </div>
          <div class="right" data-aos="fade-up" data-aos-delay="200">
            <div class="info">
              <div class="info-title">
                <h3>
                  front-end{" "}
                  <span class="motion">
                    <Typewriter
                      options={{
                        strings: [" Developer"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </h3>
                <p>
                  I'm Eslam Mohamed, from Egypt Mansoura city, And studying in
                  computer engineering, I have three years experience in this
                  field, I can convert UI to website , I have the ability and
                  work to design websites page[E-commerce, Dashboard, Landing
                  page] The project is delivered fast, clean and of high
                  quality.
                </p>
                <div class="contnet-info">
                  <div class="card">
                    <a href="#">
                      <GiCandles />
                    </a>
                    <h2>age</h2>
                    <p>23 years</p>
                  </div>
                  <div class="card">
                    <a href="#">
                      {" "}
                      <MdLocationOn />
                    </a>

                    <h2>address</h2>
                    <p>egypt/mansoura city</p>
                  </div>
                  <div class="card">
                    <a href="#">
                      <BsGlobe />
                    </a>
                    <h2>freelance</h2>
                    <p>Available</p>
                  </div>
                  <div class="card">
                    <a href="#">
                      <RxSketchLogo />
                    </a>
                    <h2>Experience</h2>
                    <p>3 years</p>
                  </div>
                  <div class="card">
                    <a href="#">
                      <BsBriefcase />
                    </a>
                    <h2>project completed</h2>
                    <p>+51</p>
                  </div>
                  <div class="card">
                    <a href="#">
                      <TbUsers />
                    </a>
                    <h2>happy clients</h2>
                    <p>25</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
