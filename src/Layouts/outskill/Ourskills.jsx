import React from 'react';
import skill from './ourskill.module.css';
import { CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Ourskills = () => {
    return (
        <>
            <section className={skill.our_skill_2}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-5">
                            <div className={skill.chart_left_2}>
                                <h2>experience</h2>
                                <h3>our professional skill &amp; experience</h3>
                                <p>Bongosoft Ltd. is was founded in 2017, provide complete service in Web design &amp; development, Apps development, software development, and full-service digital marketing. Our team members are devoted to delivering remarkable ROI to every client, and our dedication to results is evident in everything we do, including how we speak. We hold ourselves accountable for ensuring their investment brings a positive return.</p>
                                <a className={`btn ${skill.btn_date_picker_btn}`} href="#">Get Started</a>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-7">
                            <div className={skill.chart_right_2}>
                                <div className={skill.box_chart}>
                                    <div className={skill.chart}><CircularProgressbar value={60} text={`${90}%`} styles={{path: { stroke: `#1da255`}, text: {fill: '#1da255'}}}/></div>
                                    <p>Web Design</p>
                                </div>
                                <div className={skill.box_chart}>
                                    <div className={skill.chart}><CircularProgressbar value={60} text={`${95}%`} styles={{path: { stroke: `#1da255`}, text: {fill: '#1da255'}}}/></div>
                                    <p>Web Development</p>
                                </div>
                                <div className={skill.box_chart}>
                                    <div className={skill.chart}><CircularProgressbar value={60} text={`${80}%`} styles={{path: { stroke: `#1da255`}, text: {fill: '#1da255'}}}/></div>
                                    <p>Software Development</p>
                                </div>
                                <div className={skill.box_chart}>
                                    <div className={skill.chart}><CircularProgressbar value={60} text={`${85}%`} styles={{path: { stroke: `#1da255`}, text: {fill: '#1da255'}}}/></div>
                                    <p>Graphic Design</p>
                                </div>
                                <div className={skill.box_chart}>
                                    <div className={skill.chart}><CircularProgressbar value={60} text={`${73}%`} styles={{path: { stroke: `#1da255`}, text: {fill: '#1da255'}}}/></div>
                                    <p>App Development</p>
                                </div>
                                <div className={skill.box_chart}>
                                    <div className={skill.chart}><CircularProgressbar value={60} text={`${93}%`} styles={{path: { stroke: `#1da255`}, text: {fill: '#1da255'}}}/></div>
                                    <p>SEO &amp; SMM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Ourskills;