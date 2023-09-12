import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.jpg';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.jpeg';

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt accusantium animi corrupti earum libero dolorem atque dicta temporibus deleniti alias! </span>
        <div className="skillbars">
            <div className="skillbar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design </h2>
                    <p>This is a demo text, write here own context here !</p>
                </div>
            </div>
            <div className="skillbar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                <h2>Web  Design </h2>
                <p>This is a demo text, write here own context here !</p>
                </div>
            </div>
            <div className="skillbar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                <h2>App Design </h2>
                <p>This is a demo text, write here own context here !</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills