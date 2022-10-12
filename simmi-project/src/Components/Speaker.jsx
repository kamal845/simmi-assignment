import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import port20 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/abhimanyu.jpeg";
import port21 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/amit_hooda.jpeg";
import port22 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/kevel_kaka.jpeg";
import port23 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/major_nithi.jpeg";
import port24 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/megha_meelu.jpeg";
import port25 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/mohit_chillar.jpeg";
import port26 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/naveen_kumar_goyat.jpeg";
import port27 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/rohan_naidu.jpeg";
import port28 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/sandeep_narwal.jpeg";
import port29 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/sneha_agarwal.jpeg";
import port30 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/vikas_kandola.jpeg";
const Speaker =()=>{

const settings = {
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
            <h3>Our Prominent Speakers</h3>
        </div>
       <Slider {...settings}>
        <div>
        <img src={port20} alt="port20" className="port20"/>
         <figcaption className="vit">Abhimanyu Singh Raghav</figcaption>
        </div>
        <div>
        <img src={port29} alt="port29" className="port29"/>
         <figcaption className="vit">Sneha Vithalaniagarwal</figcaption>
        </div>
        <div>
        <img src={port23} alt="port23" className="port23"/>
         <figcaption className="vit">Major nithi CJ</figcaption>
        </div>
        <div>
        <img src={port28} alt="port28" className="port28"/>
         <figcaption className="vit">Sandeep narwal</figcaption>
        </div>
        <div>
        <img src={port24} alt="port24" className="port24"/>
         <figcaption className="vit">megha meelu</figcaption>
        </div>
        <div>
        <img src={port25} alt="port25" className="port25"/>
         <figcaption className="vit">mohit chillar</figcaption>
        </div>
        <div>
        <img src={port21} alt="port21" className="port21"/>
         <figcaption className="vit">amit hooda</figcaption>
        </div>
        <div>
        <img src={port30} alt="port30" className="port30"/>
         <figcaption className="vit">vikash kandola</figcaption>
        </div>
        <div>
        <img src={port26} alt="port26" className="port26"/>
         <figcaption className="vit">naveen kumar goyat</figcaption>
        </div>
        <div>
        <img src={port22} alt="port22" className="port22"/>
         <figcaption className="vit">kevel kaka</figcaption>
        </div>
        <div>
        <img src={port27} alt="port27" className="port27"/>
        <figcaption className="vit">K.Rohannaidu</figcaption>
        </div>
      </Slider>
        </>
    )
}
export default Speaker;

