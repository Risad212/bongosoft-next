import React from 'react';
import paralax from './paralax.module.css';

const Paralax = () => {
    return (
        <>
            <div className={paralax.main}>
                <div className={paralax.overlay}>
                    <div className={paralax.parallaxText}>
                        <h3>Let's talk about what we can build together</h3>
                        <p>Whatever may be your requirement - be it a simple website design, a complex software or application development, <br />
                            an ecommerce website, a logo and brand identity design,your apps marketing or a full <br />
                            fledged digital marketing campaign - we have a solution for you.</p>
                        <div className={`${paralax.btnQuote} m-auto col-md-5`}>
                            <a href="contact.php" className="btn-contact-us" id={paralax.btn}>Contact us now for a free quote!</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Paralax;