import React, { useEffect } from "react";
import "./Contact.scss";
import img from "../../assets/me/ebrahim.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsLinkedin } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <footer id="contact">
      <div class="container">
        <div class="heading">
          <h2>
            contact <span>me</span>
          </h2>
          <div>
            <AiFillStar />
          </div>
        </div>
        <div class="box-container">
          <div class="box-content">
            <div class="box-left">
              <a href="http://aewr.com">
                <div class="box" data-aos="fade-down" data-aos-delay="100">
                  <div class="one">
                    <BsWhatsapp />
                  </div>
                  <div class="title">
                    <h4>whatsapp</h4>
                  </div>
                </div>
              </a>
              <a href="http://aewr.com">
                <div
                  class="box center"
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  <div class="one">
                    <BsFillEnvelopeFill />
                  </div>
                  <div class="title">
                    <h4>Upwork</h4>
                  </div>
                </div>
              </a>
              <a href="http://aewr.com">
                <div class="box" data-aos="fade-down" data-aos-delay="300">
                  <div class="one">
                    <AiFillGithub />
                  </div>
                  <div class="title">
                    <h4>Github</h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="image">
            <img src={img} />
          </div>
          <div class="box-content">
            <div class="right-box" data-aos="fade-up" data-aos-delay="300">
              <a href="http://aewr.com">
                <div class="box" data-aos="fade-up" data-aos-delay="400">
                  <div class="one">
                    <BsMessenger />
                  </div>
                  <div class="title">
                    <h4>messenger</h4>
                  </div>
                </div>
              </a>
              <a href="http://aewr.com">
                <div class="box center" data-aos="fade-up" data-aos-delay="200">
                  <div class="one">
                    <BsFillEnvelopeFill />
                  </div>
                  <div class="title">
                    <h4>freelancer</h4>
                  </div>
                </div>
              </a>
              <a href="http://aewr.com">
                <div class="box" data-aos="fade-up" data-aos-delay="300">
                  <div class="one">
                    <BsLinkedin />
                  </div>
                  <div class="title">
                    <h4>linkedIn</h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="container">
          <div class="icon">
            <div>
              <a href="http://aewr.com">
                <AiFillFacebook />
              </a>
            </div>

            <div>
              <a href="http://aewr.com">
                <BsLinkedin />
              </a>
            </div>
            <div>
              <a href="http://aewr.com">
                <BsTwitter />
              </a>
            </div>
            <div>
              <a href="http://aewr.com">
                <BsFillEnvelopeFill />
              </a>
            </div>
            <div>
              <a href="http://aewr.com">
                <BsWhatsapp />
              </a>
            </div>
          </div>
          <p>
            &copy;2022 All rights reserved by <span>Ebrahim moahmed</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
