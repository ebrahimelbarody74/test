import React, { useEffect, useState } from "react";
import "./Header.scss";
import img from "../../assets/me/ebrahim.jpg";
import logo1 from "../../assets/icons/Figma.png";
import logo2 from "../../assets/icons/Photoshop.png";
import logo3 from "../../assets/icons/Sketch.png";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsLightbulb } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import file from "../../assets/cv (1).pdf";
function Header() {
  const [toggle, setToggle] = useState(false);
  const [scroll, setSecroll] = useState(0);
  useEffect(() => {
    const handleScroll = (event) => {
      setSecroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section class="home" id="home">
      <div class={scroll > 200 ? "nav on" : "nav"} id="nav">
        <div class="container">
          <div class="navbar">
            <div class="logo">
              <a href="index.html">
                <h2>
                  Ebrahim <span> Mohamed.</span>
                </h2>
              </a>
            </div>
            <div class="nav-list">
              <ul class={toggle ? "links visibal" : "links"} id="links">
                <li>
                  <a class="item-nav" href="#home">
                    home
                  </a>
                </li>
                <li>
                  <a class="item-nav" href="#about" data-cool="info">
                    about
                  </a>
                </li>
                <li>
                  <a class="item-nav" href="#service" data-cool="service">
                    service
                  </a>
                </li>
                <li>
                  <a class="item-nav" href="#contact" data-cool="contact">
                    contact
                  </a>
                </li>
                <li class="light">
                  <BsLightbulb />
                </li>
              </ul>
            </div>
            <div
              class={toggle ? "toggle active " : "toggle"}
              onClick={() => setToggle(!toggle)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div class="main-info">
        <div class="container">
          <div class="hom-content">
            <div class="left">
              <p class="hi">hello,</p>
              <h2>
                i'm <span>Ebrahim Mohamed</span>
              </h2>
              <p className="center">
                and I'm
                <span class="animate" id="">
                  <Typewriter
                    options={{
                      strings: ["Frontend Developer", "Web Designer"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </p>
              <div class="button">
                <button class="btn">
                  <a href={file} download={file}>
                    {" "}
                    download cv
                  </a>
                </button>
              </div>
              <div class="icon">
                <div>
                  <a href="https://www.facebook.com/eslam.mohammed.9003888/">
                    <FaFacebookF />
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/eslam-mohamed-8181791a7/">
                    <BsLinkedin />
                  </a>
                </div>
                <div>
                  <a href="https://twitter.com/eeslam54017705">
                    <BsTwitter />
                  </a>
                </div>
                <div>
                  <a href="https://www.instagram.com/eslam_abo_elsood/">
                    <BsInstagram />
                  </a>
                </div>
                <div>
                  <a href="https://chatwith.io/s/eslam-mohamed">
                    <BsWhatsapp />
                  </a>
                </div>
              </div>
            </div>
            <div class="right" data-aos="fade-up" data-aos-delay="200">
              <div class="box-contant">
                <div class="images">
                  <img class="me" src={img} alt="errorr" />
                  <img class="incon1" src={logo1} />
                  <img class="incon2" src={logo2} />
                  <img class="incon3" src={logo3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
