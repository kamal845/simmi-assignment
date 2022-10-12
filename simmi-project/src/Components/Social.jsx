import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import port90 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/FireShot Capture 025 - Simmi Foundation - simmifoundation.org.png";
import port91 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/FireShot Capture 029 - Simmi Foundation - simmifoundation.org.png";
const Social=()=>{
    return(
        <>
        <div className="Social">
       <h3>Social Media Handle</h3>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="social1">
<img src={port90} alt="port90" className="port90" width="100%"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="social2">
<img src={port91} alt="port91" className="port91" width="100%"/>
                        </div>
                    </div>
                </div>
                </div>
        </div>
        </>
    )
}
export default Social;