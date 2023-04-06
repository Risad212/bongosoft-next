import React from 'react';
import footerbottom from './footerbottom.module.css';

const FooterBottom = () => {
    return (
        <>
            <div className={footerbottom.footer_bottom}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                        </div>
                        <div className={`col-sm-12 col-lg-9 ${footerbottom.copyright_footer}`}>
                            <p>©2023 All rights reserved to Bongosoft Ltd.</p>
                            <p> <span>|</span>  <a href="#"> Terms &amp; Conditions </a> <span> | </span>  <a href="#"> Privacy Policy</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterBottom;