import React, { useEffect, useState } from 'react';
import "./Navbar.css";

function Navbar() {
const [show, handleShow] = useState(false);

const transitionNavbar = () => {
    if(window.scrollY > 100) {
        handleShow(true);
    } else{
        handleShow(false);
    }
};

useEffect(() =>{
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll",transitionNavbar);
} ,[]);




  return (
    <div className={`nav ${show && 'nav_black'}`}>

        <div className="nav_contents">
            
        <img className='nav_logo'
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
        
        <img className='nav_avatar'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfbfGQWWCdVmy5fWYVuTGk9fvnaUZx_r_1ohsTwrPyQTEKvD8BTIXK_JX7n7tj-DzFrHE&usqp=CAU" alt="" />
        </div>
       
        
    </div>  
  )
}

export default Navbar
