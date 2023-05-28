import React from 'react';
import banner from './pagebanner.module.css';

const PageBanner = ({txt}) => {
    return (
        <div className={banner.banner}>
            <h2
               data-aos="fade-down" 
               data-aos-once="false"
               data-aos-delay="800"
               data-aos-duration="800" 
             >{txt}</h2>
            <ul class={banner.breadcrumb_list}
              data-aos="fade-left" 
              data-aos-once="false"
              data-aos-delay="1000"
              data-aos-duration="1000" 
             >
                <li><a href="index.php">Home</a></li>
                <li>{txt}</li>
            </ul>
        </div>
    );
};

export default PageBanner;