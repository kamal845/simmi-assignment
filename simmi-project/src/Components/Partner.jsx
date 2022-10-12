import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import port31 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/amity_logo.png";
import port32 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/gargi_logo.jpeg";
import port33 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/dyalsingh_logo.jpeg";
import port34 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/igu_logo.png";
import port35 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/mca_logo.png";
import port36 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/mirandahouse_logo.png";
import port37 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/sgtb_logo.png";
import port38 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/simsree_logo.png";
import port39 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/sri_venkateswara_logo.jpeg";
import port40 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/tiss_logo.png";
import port41 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/upes_logo.png";
import port42 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/iitbhilai_logo.png";
import port43 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/lpu_logo.png";
const Partner =()=>{
const setting = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
    return(
        <>
        <div className="slot1">
            <h3>Our Partners</h3>
        </div>
       <Slider {...setting}>
        <div>
        <img src={port31} alt="port31" className="port31"/>
         <figcaption className="vit">Amity University</figcaption>
        </div>
        <div>
        <img src={port34} alt="port34" className="port34"/>
         <figcaption className="vit"> IGU Meerpur University, Haryana</figcaption>
        </div>
        <div>
        <img src={port43} alt="port43" className="port43"/>
         <figcaption className="vit">LPU, Punjab</figcaption>
        </div>
        <div>
        <img src={port36} alt="port36" className="port36"/>
         <figcaption className="vit">Miranda House, DU</figcaption>
        </div>
        <div>
        <img src={port41} alt="port41" className="port41"/>
        <figcaption className="vit">UPES, Dehradun</figcaption>
        </div>
        <div>
        <img src={port39} alt="port39" className="port39"/>
         <figcaption className="vit">Sri Venkateswara College, DU</figcaption>
        </div>
        <div>
        <img src={port40} alt="port40" className="port40"/>
         <figcaption className="vit">TISS, Hyderabad</figcaption>
        </div>
        <div>
        <img src={port42} alt="port42" className="port42"/>
        <figcaption className="vit">IIT Bhilai</figcaption>
        </div>
        <div>
        <img src={port32} alt="port32" className="port32"/>
         <figcaption className="vit">Gargi College, DU</figcaption>
        </div>
        <div>
        <img src={port33} alt="port33" className="port33"/>
         <figcaption className="vit">Dyal Singh College, DU</figcaption>
        </div>
        <div>
        <img src={port37} alt="port37" className="port37"/>
         <figcaption className="vit">Shri Guru Teg Bahadur Khalsa College, DU</figcaption>
        </div>
        <div>
        <img src={port35} alt="port35" className="port35"/>
         <figcaption className="vit">Mount Carmel College, Bangalore</figcaption>
        </div>
        <div>
        <img src={port38} alt="port38" className="port38"/>
         <figcaption className="vit">SIMSREE, Mumbai</figcaption>
        </div>
      </Slider>
        </>
    )
}
export default Partner;

