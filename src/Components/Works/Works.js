import React from 'react';
import './works.css'
import Portfolio1 from '../../assets/portfolio-1.jpg';
import Portfolio2 from '../../assets/portfolio-2.jpg';
import Portfolio3 from '../../assets/portfolio-3.jpg';
import Portfolio4 from '../../assets/portfolio-4.jpg';
import Portfolio5 from '../../assets/portfolio-5.jpg';
import Portfolio6 from '../../assets/portfolio-6.jpg';

const Works = () => {
  return (
    <section id="works">
      <h2 className="workTitle">My Potfolio</h2>
      <span className="workDesc">I take pride in paying attention to the smallest details and skills and experiance to help bussiness achieve their goals create a strong online presence.</span>
      <div className="worksImgs">
        <img src={Portfolio1} alt="" className="worksimg" />
        <img src={Portfolio2} alt="" className="worksimg" />
        <img src={Portfolio3} alt="" className="worksimg" />
        <img src={Portfolio4} alt="" className="worksimg" />
        <img src={Portfolio5} alt="" className="worksimg" />
        <img src={Portfolio6} alt="" className="worksimg" />
      </div>
      <button className="wrkbtn">See more</button>
    </section>
  )
}

export default Works