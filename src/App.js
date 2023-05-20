import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Resume from "./components/Resume/Resume";
import { useEffect, useState } from "react";
import Contact from "./components/Contact/Contact";
import { TiArrowUpThick } from "react-icons/ti";

function App() {
  const [scroll, setSecroll] = useState(0);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      setSecroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {loading ? (
        <div class="preloader" id="preloader"></div>
      ) : (
        <>
          <Header />
          <About />
          <Service />
          <Resume />
          <Contact />
          {scroll > 200 && (
            <div
              class="btn-top"
              style={
                scroll ? { visibility: "visible" } : { visibility: "hidden" }
              }
              onClick={handleToUp}
            >
              <TiArrowUpThick />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;
