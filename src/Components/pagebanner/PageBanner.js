import React from 'react';
import banner from './pagebanner.module.css';

const PageBanner = ({txt}) => {
    return (
        <div className={banner.banner}>
            <h2>{txt}</h2>
            <ul class={banner.breadcrumb_list}>
                <li><a href="index.php">Home</a></li>
                <li>{txt}</li>
            </ul>
        </div>
    );
};

export default PageBanner;