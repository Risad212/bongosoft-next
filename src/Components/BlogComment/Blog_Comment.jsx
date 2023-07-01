import React from 'react';
import layout from './comment.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faFacebookF,faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Blog_Comment = () => {
    return (
        <>
            <div className={layout.comment_form_wrapper}>
            <footer className={layout.single_post_footer}>
                    <div className={layout.post_shearing}>
                        <ul>
                            <li>Share:</li>
                            <li><a href="#"><FontAwesomeIcon icon={faFacebookF}/></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter}/></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faGooglePlusG}/></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faDribbble}/></a></li>
                        </ul>
                    </div>
                    <div className={layout.post_tags}>
                        <ul>
                            <li>Tags:</li>
                            <li><a href="#">Branding</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Programming</a></li>
                        </ul>
                    </div>
                </footer>
                <div className="row">
                    <div className="col-md-12">
                        <div className={layout.comment_form}>
                            <form action="#" className={layout.clearfix}>
                                <h4 className={layout.sub_section_title}>Leave your comment</h4>
                                <div className={`${layout.clear_fix} ${layout.my_comment_box}`}>
                                    <textarea id="textarea1" name="#" cols="30" rows="10" placeholder="Comment"></textarea>
                                </div>
                                <div className={layout.input_field_wrapper}>
                                    <div className={layout.input_field}>
                                        <input type="text" className="validate" placeholder="Name" />
                                    </div>
                                    <div className={layout.input_field}>
                                        <input type="email" className="validate" placeholder="Email" />
                                    </div>
                                    <div className={layout.input_field}>
                                        <input type="text" className="validate" placeholder="Website" />
                                    </div>
                                </div>
                                <button type="submit" className={layout.button_black}>Post Comment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Blog_Comment;