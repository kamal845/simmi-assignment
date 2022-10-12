import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import port6 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/education.jpeg";
import port7 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/livelihood.jpeg";
import port8 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/healthcare.jpeg";
import port9 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/women empowerment.jpeg";
const Objective =()=>{
    return(
        <>
         <div className="container">
            <div className="Objective0">
                   <div className="object">
            <div className="row">
                <h3 className="nike">Objectives</h3>
                <div className="col-md-3">
                 <div className="Objective1">
                     <div className="objective10">
                        <img src={port6} alt="port6" className ="port6"/> 
                       <h5>Education</h5>
                         <p>We provide free academic education, scholarship, training and other incentives to the children.</p>
                          <a className="box">Read more <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                     </div>
                 </div>
                </div>
                <div className="col-md-3">
                    <div className="Objective1">
                    <figcaption className="objective10">
<img src={port7} alt="port7" className ="port7"/>
    <h5 className="live">Livelihood</h5>
    <p>We implement various schemes     to provide livelihood and uplift the poor in society.</p>
    <a className="box">Read more <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
</figcaption>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="Objective1">
                    <figcaption  className="objective10">
 <img src={port8} alt="port8" className ="port8"/>
    <h5>Healthcare</h5>
    <p> We are increasing awareness on Sanitization and providing to better nutrition, clean water and toilets.
</p>
    <a className="box">Read more <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
</figcaption>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="Objective1">
                    <figcaption className="objective10">
<img src={port9}  alt="port9" className ="port9"/>
    <h5 className="toy">Women and Youth Empowerment</h5>
    <p>We focus on providing equal opportunities to to for women in the work field.
</p>
    <a className="box">Read more <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
</figcaption>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Objective;