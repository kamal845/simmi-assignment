import React from "react";
import Logo1 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/logo.png";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
const Navbar =()=>{
return(
  <>
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
  <div class="container-fluid">
    <a className="navbar-brand">
    <img src= {Logo1} alt="LOGO" className="first" height= "35px" width="35px"/>
     <span className="flat">SIMMI Foundation</span>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav ms-auto">
      <li className="nav-item">
           <a className="nav-link active" aria-current="page">Home</a>
         </li>
         <li className="nav-item">
           <a className="nav-link">About</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" tabindex="-1" aria-disabled="true">Donate</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" tabindex="-1" aria-disabled="true">Blog</a>
        </li>
         <li className="nav-item">
           <a className="nav-link" tabindex="-1" aria-disabled="true">Gallery</a>
         </li>
         <li className="nav-item">    
        <a className="nav-link" tabindex="-1" aria-disabled="true">Volunteer</a>
              </li>
      <li className="nav-item">
           <a className="nav-link" tabindex="-1" aria-disabled="true">Events</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" tabindex="-1" aria-disabled="true">Careers</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" tabindex="-1" aria-disabled="true">Contact</a>
         </li>
      </ul>
    </div>
  </div>
</nav>
  </>
)
}
export default Navbar;