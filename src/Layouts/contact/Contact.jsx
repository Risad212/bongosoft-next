import React from 'react';
import contact from './contact.module.css';

const Contact = () => {
    return (
        <>
            <section class={contact.contact_page_section}>
                <div class="container">
                    <div class="row">
                        <div class={`col-md-7 ms-auto ${contact.contact_page_main}`}>
                            <div class={contact.contact_row}>
                                <div class={contact.contact_title_text}>
                                    <h3>REQUEST A QUICK QUOTE</h3>
                                </div>
                                <div class={contact.contact_text}>
                                    <p>We love to listen and we are eagerly waiting to talk to you regarding your project. Get in touch with us if you have any queries and we will get back to you as soon as possible.</p>
                                </div>
                                <div class={contact.contact_form}>
                                    <form id="#" action="#">
                                        <div class="row">
                                            <div class="form-group col-6">
                                                <input placeholder="Your Name" class={`${contact.form_control}`} />
                                            </div>
                                            <div class="form-group col-6">
                                                <input placeholder="Your Email" class={`${contact.form_control}`} />
                                            </div>
                                            <div class="form-group col-12">
                                                <input placeholder="Subject" class={`${contact.form_control}`} />
                                            </div>
                                            <div class="form-group col-12">
                                                <textarea rows="6" placeholder="Message" class={`${contact.form_control}`} name="Message"></textarea>
                                            </div>
                                            <div class="form-group col-12 text-center">
                                                <button class={`btn ${contact.btn_send} `} type="submit">Send</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*---- location title ------*/}
            <section class={contact.location_wrapper}>
                <div class="container">
                    <div class={contact.wrapper_text_location}>
                        <h2 class="text-center">Locations</h2>
                    </div>
                </div>
            </section>
            {/*---- Google map ------*/}
            <section class={contact.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1290.8991623422357!2d90.42607176278011!3d23.775385352230952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c791e9b32d9b%3A0x2bde4403d24db436!2sBongosoft+Ltd.!5e0!3m2!1sbn!2sbd!4v1519553583950" style={{width: "100%", height:"100%"}} frameborder="0" allowfullscreen=""></iframe>
            </section>
        </>
    );
};

export default Contact;