import React from "react";
import "./Service.scss";
import img1 from "../../assets/icons/icon-1.png";
import img2 from "../../assets/icons/icon-2.png";
import img3 from "../../assets/icons/icon-3.png";
import { AiFillStar } from "react-icons/ai";

function Service() {
  return (
    <section class="my-services" id="service">
      <span class="img-bg"></span>

      <div class="container">
        <div class="heading">
          <h2>
            my <span>service</span>
          </h2>
          <div>
            <AiFillStar />
          </div>
        </div>
        <div class="box-content">
          <div class="box-card" data-aos="fade-down" data-aos-delay="100">
            <div class="one">
              <span>
                <img src={img1} />
              </span>
            </div>
            <h2>web design</h2>

            <p>
              I have the ability and work to design an integrated website that
              is responsive to all screens using the required technologies
            </p>
          </div>
          <div class="box-card" data-aos="fade-up" data-aos-delay="200">
            <div class="two">
              <span>
                <img src={img2} />
              </span>
            </div>
            <h2>convert UI To Website</h2>

            <p>
              I have the ability and work to convert any UI to website and
              responsive to all screens with the required technologies
            </p>
          </div>
          <div class="box-card" data-aos="fade-down" data-aos-delay="300">
            <div class="one">
              <span>
                <img src={img3} />
              </span>
            </div>
            <h2>framework React Js</h2>

            <p>
              I can work on your project using one of the JavaScript library
              React Js and its framework, The project will fast, light and
              smooth with high quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
