import React from 'react';
import layout from './comment.module.css';

const Blog_Comment = () => {
    return (
        <>
            <div className={layout.comment_form_wrapper}>
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