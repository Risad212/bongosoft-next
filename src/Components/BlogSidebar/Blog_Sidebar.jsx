import React from 'react';
import layout from './blogLayout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Blog_Sidebar = () => {
    return (
        <>
            <section className={layout.sidebarwrapper}>
                <aside className={layout.single_widget}>
                    <div className={layout.search_widget}>
                        <h4 className={layout.widget_title}>Search</h4>
                        <form action="#">
                            <input type="text" placeholder="Search" />
                                <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
                        </form>
                    </div>
                </aside>
                <aside className={layout.single_widget}>
                    <h4 className={layout.widget_title}>Tags</h4>
                    <div className={layout.tags}>
                        <a href="#">Design</a>
                        <a href="#">CSS</a>
                        <a href="#">php</a>
                        <a href="#">WordPress</a>
                        <a href="#">Python</a>
                        <a href="#">Life Style</a>
                        <a href="#">HTML</a>
                    </div>
                </aside>
                <aside className={layout.single_widget}>
                    <h4 className={layout.widget_title}>Categories</h4>
                    <ul className={layout.post_category_list}>
                        <li><a href="#">PHP<span>(06)</span></a></li>
                        <li><a href="#">UI/UX<span>(12)</span></a></li>
                        <li><a href="#">Programming<span>(12)</span></a></li>
                        <li><a href="#">Life Style<span>(02)</span></a></li>
                        <li><a href="#">Travel<span>(10)</span></a></li>
                    </ul>
                </aside>
            </section>
        </>
    )
};

export default Blog_Sidebar;