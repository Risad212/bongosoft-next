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
                                                <input placeholder="Your Name" class={`${contact.form_control}` }/>
                                            </div>
                                            <div class="form-group col-6">
                                                <input placeholder="Your Email" class={`${contact.form_control}` } />
                                            </div>
                                            <div class="form-group col-12">
                                                <input placeholder="Subject" class={`${contact.form_control}` } />
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
        </>
    );
};

export default Contact;