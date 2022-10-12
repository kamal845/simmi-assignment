import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import port50 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/logo (1).png";
import port51 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/NITI-Aayog-logo.png";
const Footer =()=>{
    return(
        <>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer1">
                          <h4>ABOUT US</h4>
                        <p> We envisions to develop a society based on legitimate rights,
                            equity, justice, honesty, social sensitivity and a culture
                            of service in which all are self-reliant.<br></br>
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer2">
                        <h4>INITIATIVES</h4> 
                        <li>Khel Sangathan</li>
                        <li>Sukoon Parikram</li>
                        <li>Simmi Olympiads</li>
                        <li>Kalaakaar Manch</li>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer3">
                    <li>Sanskritik Setu</li>
                    <li>Sambhav Madad</li>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer4">
                        <h4>HAVE QUESTIONS?</h4> 
                        <li><i class="fa fa-map-marker" aria-hidden="true"></i>	&nbsp; &nbsp;479, Baspadamka, Tehsil Pataudi, Gurugram, Haryana - 122503, India</li>
                      <li> <i class="fa fa-phone" aria-hidden="true"></i>&nbsp; &nbsp; (+91) 70152 - 95025</li>
                       <li><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp; &nbsp; support@simmifoundation.org</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="last">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                               <img src={port50} alt="port50" className="port50" height="50px" width="50px"/> 
                               <img src={port51} alt="port51" className="port51" height="50px" width="50px"/><br></br>                      
                        Our Registration number : 085953/2020<br></br>
                        Niti Aayog (Govt. Of India ) Unique Id : HR/2020/0258148<br></br><br></br>
                        Copyright ©2022 All rights reserved | Simmi Foundation <i class="fa fa-heart" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;