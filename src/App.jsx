import "./App.css";
import Logo from "../src/img/logo.png";
import Arrow from "../src/img/first-img-rrow.png";
import Firstimgright from "../src/img/firstpg-img.png";
import img1 from "../src/img/2ndpage/1.png";
import img2 from "../src/img/2ndpage/2.png";
import img3 from "../src/img/2ndpage/3.png";
import img4 from "../src/img/2ndpage/4.png";
import img5 from "../src/img/2ndpage/5.png";
import img6 from "../src/img/2ndpage/6.png";
import img7 from "../src/img/2ndpage/7.png";
import img8 from "../src/img/2ndpage/8.png";
import img9 from "../src/img/2ndpage/9.png";
import img10 from "../src/img/2ndpage/10.png";


function App() {
  return (
    <>
      <div className=" container">
        <div className="nav">
          <img src={Logo} alt="loading" className="logo" />
          <div className="heading">
            <h1 className="nav-heading">INDUSTRIAL SOFT SOLUTIONS </h1>
            <h1 className="nav-heading2">& SYSTEMS</h1>
          </div>
        </div>

        <div className="all-dots">
          <div className="dotted-boxes">
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
          </div>
          <div className="dotted-boxes">
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
          </div>
        </div>
        {/*  */}

        <div className="grd-two">
          <div>
            <div className="two-btnbox">
              <div className="buttonbox">
                <h3 className="btngreen-nme">Silver Spark </h3>
              </div>
              <div className="buttonbox">
                <h3 className="btngreen-nme"> Raymond’s</h3>
              </div>
            </div>

            <div className="first-four-cont">
              <h2 className="first-four-cont-nme">
                PRODUCTION IMPROVEMENT SUGGESTION
              </h2>
            </div>

            <div>
              <img src={Arrow} alt="loading" className="first-pgarrow" />
            </div>
          </div>

          <div>
            <img src={Firstimgright} alt="loading" className="Firstimgright" />
          </div>
        </div>
      </div>

      <div className="container2">
        <div className="mid-heading">
          <h2>PROCESS TO IMPROVE THE PRODUCTIVITY</h2>
        </div>
        <div className="imgs">
        <img src={img1} alt="loading" className="img1" />
        <img src={img2} alt="loading" className="img2" />
        <img src={img3} alt="loading" className="img3" />
        <img src={img4} alt="loading" className="img4" />
        <img src={img5} alt="loading" className="img5" />
        <img src={img6} alt="loading" className="img6" />
        <img src={img7} alt="loading" className="img7" />
        <img src={img8} alt="loading" className="img8" />
        <img src={img9} alt="loading" className="img9" />
        <img src={img10} alt="loading" className="img10" />
        </div>
        <div className="img-headings">
          <span className="img-heading1">1.RECORD</span>
          <span className="img-heading2">2.BREAKDOWN</span>
          <span className="img-heading3">3.VALUE, NON VALUE & REQUIRED NON VALUE ANALYSIS</span>
          <span className="img-heading4">4.COMPARISION & IMPLEMENTATION</span>
          <span className="img-heading5">5.RECORD IMPROVEMENT</span>
          <span className="img-heading6">6.TEST IMPROVEMENT</span>
          <span className="img-heading7">7.PROPER TRAINING</span>
          <span className="img-heading8">8.IMPLEMENT</span>
          <span className="img-heading9">9.REVIEW RESULTS</span>
          <span className="img-heading10">10.DOCUMENTATION</span>

        </div>
      </div>
    </>
  );
}

export default App;
