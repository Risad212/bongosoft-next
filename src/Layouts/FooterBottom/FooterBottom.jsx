import React from 'react';
import footerbottom from './footerbottom.module.css';

const FooterBottom = () => {
    return (
        <>
            <div class={footerbottom.footer_bottom}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                        </div>
                        <div class={`col-sm-12 col-lg-9 ${footerbottom.copyright_footer}`}>
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