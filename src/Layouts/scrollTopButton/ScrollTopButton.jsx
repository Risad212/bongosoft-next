import React, { useState } from 'react';
import scrollTopBtn from './scrollTopBtn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const ScrollTopButton = () => {
    const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  if(typeof window !== "undefined"){
    window.addEventListener('scroll', toggleVisible);
  }
    return (
        <div>
          <button className={scrollTopBtn.btn} style={{display: visible ? 'inline' : 'none'}}>
             <FontAwesomeIcon icon={faAngleUp} onClick={() => scrollToTop()} />
          </button>
        </div>
    );
};

export default ScrollTopButton;