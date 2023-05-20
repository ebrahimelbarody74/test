import React, { useState } from "react";
import "./Resume.scss";
import { SiFarfetch, SiFiverr, SiFreelancer } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { BsColumnsGap, BsCommand, BsGit, BsGoogle, BsMoonStars } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { DiReact, DiYahoo } from "react-icons/di";
import { SiJquery } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FaCentercode, FaJsSquare, FaRegEdit } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { AiTwotoneExperiment } from "react-icons/ai";
import { GiGooeyDaemon, GiSkills } from "react-icons/gi";
import { SlGraduation } from "react-icons/sl";
function Resume() {
  const [active, setActive] = useState("btnThree");
  return (
    <section class="remuse" id="resume">
      <div class="container">
        <div class="heading">
          <h2>
            my <span>resume</span>
          </h2>
          <div></div>
          <AiFillStar />
        </div>
        <div class="box-content">
          <div class="left" data-aos="fade-down" data-aos-delay="100">
            <div class="navigation">
              <ul>
                {/* <li
                  class={active === "btnOne" ? "list active" : "box"}
                  id="btnOne"
                  onClick={() => setActive("btnOne")}
                >
                  <div>
                    <span class="icon">
                      <SlGraduation />
                    </span>
                    <span class="title">Education</span>
                  </div>
                </li>
                <li
                  class={active === "btnTwo" ? "list active" : "box"}
                  id="btnTwo"
                  onClick={() => setActive("btnTwo")}
                >
                  <div>
                    <span class="icon">
                      <AiTwotoneExperiment />
                    </span>
                    <span class="title">Experinece</span>
                  </div>
                </li> */}
                <li
                  class={active === "btnThree" ? "list active" : "box"}
                  id="btnThree"
                  onClick={() => setActive("btnThree")}
                >
                  <div>
                    <span class="icon">
                      <GiSkills />
                    </span>
                    <span class="title">Skills</span>
                  </div>
                </li>
                <li
                  class={active === "btnTwo" ? "list active" : "box"}
                  id="btnTwo"
                  onClick={() => setActive("btnTwo")}
                >
                  <div>
                    <span class="icon">
                      <GiSkills />
                    </span>
                    <span class="title">Works</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="content-indcator">
            {/* <div class={active === "btnOne" ? "box active" : "box"} id="home">
              <div>
                <div class="left-box" data-aos="fade-down" data-aos-delay="400">
                  <div class="card">
                    <div class="title">
                      <div class="icon">
                        <BsBook />
                      </div>
                      <h2>Education</h2>
                    </div>
                  </div>
                  <div class="content-edcation">
                    <div class="card">
                      <div class="book">
                        <span>
                          <i class="fa-solid fa-circle"></i>
                        </span>
                      </div>
                      <div class="text">
                        <h3>Higher institute of engineering and technology</h3>
                        <span>2020 — 2025 </span>
                        <p>
                          Iam studying in the Faculty of communication
                          Engineering, the second year.
                        </p>
                      </div>
                    </div>
                    <div class="card">
                      <div class="book">
                        <span>
                          <BsBook />
                        </span>
                      </div>
                      <div class="text">
                        <h3>channel Elzero web school</h3>
                        <span>2020 — 2022 </span>
                        <p>
                          study private courses for front-end developer
                          [HTML,CSS,JavaScript
                          <br />
                          ,React.js,Bootstrap,Sass].
                        </p>
                      </div>
                    </div>
                    <div class="card">
                      <div class="book">
                        <span>
                          <i class="fa-solid fa-circle"></i>
                        </span>
                      </div>
                      <div class="text">
                        <h3>high school</h3>
                        <span>2015 — 2018 </span>
                        <p>I studied basic science in high school</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class={active === "btnTwo" ? "box active" : "box"}
              id="experinece"
            >
              <div>
                <div class="left-box" data-aos="fade-up" data-aos-delay="200">
                  <div class="card">
                    <div class="title">
                      <div class="icon">
                        <i class="fa-solid fa-book-open"></i>
                      </div>
                      <h2>Experience</h2>
                    </div>
                  </div>
                  <div class="content-edcation">
                    <div class="card">
                      <div class="book">
                        <span>
                          <i class="fa-solid fa-circle"></i>
                        </span>
                      </div>
                      <div class="text">
                        <h3>front-end developer</h3>
                        <span>2020 — 2022 </span>
                        <p>
                          I studied Front End techniques and worked on a variety
                          of projects that are responsive to all screens, Look
                          at my portfolio.
                        </p>
                      </div>
                    </div>
                    <div class="card">
                      <div class="book">
                        <span>
                          <i class="fa-solid fa-circle"></i>
                        </span>
                      </div>
                      <div class="text">
                        <h3>User Interface Designer</h3>
                        <span>2021 — 2022 </span>
                        <p>
                          Converting an available layout, whether it was created
                          by someone another , a ready-made design or a designed
                          by me, will be converted into website that are
                          responsive to all screens.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div
              class={active === "btnThree" ? "box active" : "box"}
              id="my-skills"
            >
              <div class="skills">
                <div class="container-box">
                  <div class="boxs-left">
                    <div class="item" data-aos="fade-up" data-aos-delay="10">
                      <div class="one">
                        <AiFillHtml5 />
                      </div>
                      <div class="title">
                        <h4>HTML</h4>
                      </div>
                    </div>
                    <div class="item" data-aos="fade-up" data-aos-delay="10">
                      <div class="one">
                        <DiCss3 />
                      </div>
                      <div class="title">
                        <h4>CSS</h4>
                      </div>
                    </div>

                    <div class="item" data-aos="fade-up" data-aos-delay="10">
                      <div class="one">
                        <FaJsSquare />
                      </div>
                      <div class="title">
                        <h4>JavaScript</h4>
                      </div>
                    </div>
                    <div class="item" data-aos="fade-up" data-aos-delay="10">
                      <div class="one">
                        <BsFillBootstrapFill />
                      </div>
                      <div class="title">
                        <h4>Bootstrap</h4>
                      </div>
                    </div>
                    <div class="item" data-aos="fade-up" data-aos-delay="10">
                      <div class="one">
                        <SiJquery />
                      </div>
                      <div class="title">
                        <h4>Jquery</h4>
                      </div>
                    </div>
                  </div>
                  <div class="boxs-left">
                    <div class="item" data-aos="fade-up" data-aos-delay="10">
                      <div class="one">
                        <DiReact />
                      </div>
                      <div class="title">
                        <h4>React.js</h4>
                      </div>
                    </div>
                    <div class="item" data-aos="fade-up" data-aos-delay="10">
                      <div class="one">
                        <BsGit />
                      </div>
                      <div class="title">
                        <h4>git</h4>
                      </div>
                    </div>
                    <div class="item" data-aos="fade-up" data-aos-delay="10">
                      <div class="one">
                        <AiFillGithub />
                      </div>
                      <div class="title">
                        <h4>github</h4>
                      </div>
                    </div>
                    <div class="item" data-aos="fade-up" data-aos-delay="10">
                      <div class="one">
                        <SiSass />
                      </div>
                      <div class="title">
                        <h4>sass</h4>
                      </div>
                    </div>
                    <div class="item" data-aos="fade-up" data-aos-delay="10">
                      <div class="one">
                        <SiFarfetch />
                      </div>
                      <div class="title">
                        <h4>Fatch API</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class={active === "btnTwo" ? "box active" : "box"}
              id="my-skills"
            >
              <div class="skills">
                <div class="container-box">
                  <div class="boxs-left">
                    <div class="item" data-aos="fade-up" data-aos-delay="10">
                      <div class="one">
                        <BsCommand />
                      </div>
                      <div class="title">
                        <h4>BsCommand</h4>
                      </div>
                    </div>
                    <div class="item" data-aos="fade-up" data-aos-delay="10">
                      <div class="one">
                        <BsColumnsGap />
                      </div>
                      <div class="title">
                        <h4>BsColumnsGap</h4>
                      </div>
                    </div>

                    <div class="item" data-aos="fade-up" data-aos-delay="10">
                      <div class="one">
                        <FaCentercode />
                      </div>
                      <div class="title">
                        <h4> FaCentercode</h4>
                      </div>
                    </div>
                    <div class="item" data-aos="fade-up" data-aos-delay="10">
                      <div class="one">
                        <BsGoogle />
                      </div>
                      <div class="title">
                        <h4>BsGoogle</h4>
                      </div>
                    </div>
                    <div class="item" data-aos="fade-up" data-aos-delay="10">
                      <div class="one">
                        <SiFreelancer />
                      </div>
                      <div class="title">
                        <h4>SiFreelance</h4>
                      </div>
                    </div>
                  </div>
                  <div class="boxs-left">
                    <div class="item" data-aos="fade-up" data-aos-delay="10">
                      <div class="one">
                        <FaRegEdit />
                      </div>
                      <div class="title">
                        <h4>FaRegEdit</h4>
                      </div>
                    </div>
                    <div class="item" data-aos="fade-up" data-aos-delay="10">
                      <div class="one">
                        <DiYahoo />
                      </div>
                      <div class="title">
                        <h4>DiYahoo</h4>
                      </div>
                    </div>
                    <div class="item" data-aos="fade-up" data-aos-delay="10">
                      <div class="one">
                        <GiGooeyDaemon />
                      </div>
                      <div class="title">
                        <h4>GiGooeyDaemon</h4>
                      </div>
                    </div>
                    <div class="item" data-aos="fade-up" data-aos-delay="10">
                      <div class="one">
                        <SiFiverr />
                      </div>
                      <div class="title">
                        <h4>SiFiverr</h4>
                      </div>
                    </div>
                    <div class="item" data-aos="fade-up" data-aos-delay="10">
                      <div class="one">
                        <BsMoonStars />
                      </div>
                      <div class="title">
                        <h4>BsMoonStars </h4>
                      </div>
                    </div>
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

export default Resume;
