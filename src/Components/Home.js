import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import BannerImage1 from '../Assets/home-banner-image.png'; 
import BannerImage2 from '../Assets/portfolio3.jpg'; 



const Home = () => {

  const [currentImage, setCurrentImage] = useState(BannerImage1);
  const [currentText, setCurrentText] = useState('founders');


  useEffect(() => {
    const texts = ['founders', 'business', 'brandsss'];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setCurrentText(texts[index]);
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);


  const handleImageChange = () => {
    setCurrentImage(currentImage === BannerImage1 ? BannerImage2 : BannerImage1);
  };


  return (
    <div className="home-container">
    <Navbar />
    {/* <img src={BannerBackground} alt="" /> */}
    <div className="home-banner-container">
      <div className="home-bannerImage-container">
        {/* <img src={BannerBackground} alt="" /> */}
      </div>
      <div className="home-text-section">
        <h1 className="primary-heading">
        Helping <span className="span">{currentText}</span>
       <span className="heighlight1"> drive growth</span> today
        </h1>
        <p className="primary-text">
        Top-tier services tailored to your needs. Boost your projects with professional expertise.
        </p>
        <button className="secondary-button">
          Request a project <FiArrowRight />{""}
        </button>
      </div>
      <div className="home-image-section">
          <img src={currentImage} alt="Banner" onClick={handleImageChange} style={{ cursor: 'pointer' }} />  ,<span className="arrow">. .</span>
        </div>
    </div>
  </div>
  )
}

export default Home