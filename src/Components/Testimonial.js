import React from "react";
import ProfilePic from "../Assets/rahul-verma-image.png";
import ProfilePic1 from "../Assets/portfolio1.jpg"
import ProfilePic2 from "../Assets/portfolio2.jpg"
import ProfilePic3 from "../Assets/portfolio3.jpg"

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        {/* <p className="primary-subheading">Testimonial</p> */}
        <h1 className="primary-heading3">Explore my <span class="highlight">portfolio showcase......</span></h1>
        <p className="primary-text3">
        Dive into a curated collection of my finest work, showcasing expertise across various industries.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <h2 className="box">GoogleFonts</h2>
      </div>
      <div className="box1">
      <img src={ProfilePic1} alt="" />
      <h2  className="box">UI_Design</h2>
      </div>
      <div className="box2">
      <img src={ProfilePic2} alt="" />
      <h2  className="box">payment_site</h2>
      </div>
      <div className="box3">
      <img src={ProfilePic3} alt="" />
      <h2  className="box">Watch_Logo</h2>
      </div>
   
   
    </div>
  );
};

export default Testimonial;