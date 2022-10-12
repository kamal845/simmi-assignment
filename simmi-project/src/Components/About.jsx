import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import port1 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/imga75b483924.jpeg";
import port2 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/img2973827efc.jpeg";
import port3 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/img71e24d0f53.jpeg";
import port4 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/img6e825bdb65.jpeg";
const About =()=>{
    return(
        <>
        <div className="boat">
  <marquee >Smart India Multi Management Institute!   स्मार्ट इंडिया बहुद्देश्यीय प्रबन्धन संस्थान!   Registration number : 085953/2020   Niti Aayog (Govt. Of India ) Unique Id : HR/2020/0258148</marquee>
</div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" className="nit" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" className="nit" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" className="nit" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" className="nit" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={port1} className="page1" alt="carousel1"/>
    </div>
    <div class="carousel-item">
      <img src={port2} className="page2" alt="carousel2"/>
    </div>
    <div class="carousel-item">
      <img src={port3} className="page3" alt="carousel3"/>
    </div>
    <div class="carousel-item">
      <img src={port4} className="page4" alt="carousel4"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}
export default About;