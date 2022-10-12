import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import port16 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/Villagekid.jpeg";
import port17 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/fundRaiserKavach.jpeg";
import port18 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/WhatsApp Image 2021-11-09 at 10.34.25 (40).jpeg";
import port19 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/WhatsApp Image 2021-11-09 at 10.34.25.jpeg";
const Countries=()=>{
    return(
        <>
        <div className="countries0">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="count1">
                      <b>10+</b><br></br>
                       COUNTRIES
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="count2">
                    <b>150+</b><br></br>
                     <span>PROJECTS</span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="count3">
                   <b>10000+</b> <br></br>
                    <span>VOLUNTEERS</span>
                    </div>
                </div>
            </div>
        </div>
            <div className="hit">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="count4">
                      <b>20+</b><br></br>
                       <span>STATES</span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="count5">
                    <b>500000+</b><br></br>
                     <span>BENIFICIRIES</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div  className="container">
            <h3 className="fundr">Fundraisers</h3>
            <p className="fundp">A little change makes all the difference.</p>
            <div className="row">
                <div className="col-md-6">
                    <div className="fund1">
                     <img src={port16} alt="port16" className="port16" />
                     <div className="fund11">
                      <h4>Test Fund Raiser Kavach</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sit amet consectetur adipiscing elit duis tristique</p>
                       <span>15000 raised of 30000</span><br></br>
                       <div className="progress">
    <div className="progress-bar1"></div>
  </div>
                          <a className="gate">Read more<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                          </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="fund2">
                     <img src={port17} alt="port17" className="port17" />
                     <div className="fund21">
                      <h4> Kavach Initiative</h4>
                      <p>Simmi Foundation has taken an initiative Kavach to donate shield masks to the workers who put their lives at risk daily.
Let's make a change during this lockdown Let's make a change during this lockdown to help these workers who do not have the luxury to</p>
                       <span>21000 raised of 150000</span><br></br>
                       <div className="progress">
    <div className="progress-bar2"></div>
  </div>
                          <a className="gate">Read more <i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                          </div>
                    </div>
                </div>
            </div>
        </div>
        <div  className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="fund30">
                    <div className="fund3">
                     <img src={port19} alt="port19" className="port19" />
                     <div className="fund31">
                      <h4> Donating Clothes </h4>
                      <p>SIMMI FOUNDATION Donated Clothes and blankets to almost 4500 Underprivileged people. As we know how how important is clothes at this winter time, Hence SIMMI Foundation appeal you all to help us in this drive by donating the much you could have.
                      </p>
                       <span>10000 raised of 100000</span><br></br>
                       <div className="progress">
    <div className="progress-bar3"></div>
  </div>
                          <a className="gate">Read more<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                          </div>
                          </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="fund40">
                    <div className="fund4">
                     <img src={port18} alt="port18" className="port18" />
                     <div className="fund41">
                      <h4>  Education </h4>
                        <p>
                        Smart India Multi Management Institute (SIMMI) Foundation working
                         dedicatedly in providing education to underprivileged poor children free of cost. Meanwhile post covid situation 
                        our team working on giving Chaupal Classes and almost motivated almost 4500+
                        </p>
                       <span>10000 raised of 500000</span><br></br>
                       <div className="progress">
    <div className="progress-bar4"></div>
  </div>
                          <a className="gate">Read more<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                          </div>
                          </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Countries;
