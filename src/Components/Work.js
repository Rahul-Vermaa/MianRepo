import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import ChoooseMeals from "../Assets/chooose-image.png"
import chose from "../Assets/Chose.png"

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Ui and Ux Testing",
      text: "Crafting intuitive digital experiences that enhance user satisfaction and engagement.",
    },
    {
      image: ChooseMeals,
      title: "Web Development",
      text: "Building dynamic and responsive websites tailored to your unique business requirements and goals.",
    },
    {
      image: DeliveryMeals,
      title: "QA Testing",
      text: "Ensuring the functionality, and performance of your digital products through quality assurance testing",
    },
    {
      image: ChoooseMeals,
      title: "Type Writting",
      text: "Compelling content creation that effectively communicates your message and engages"
    },
    {
      image: chose,
      title: "Identity & Branding",
      text: "Creating distinctive brand identities that resonate with your audience and leave a lasting impression."
    },
    {
      image: ChooseMeals,
      title: "Other",
      text: "Building dynamic and responsive websites tailored to your unique business requirements and goals.",
    },
   
  ];
  return (
    <div className="work-section-wrapper1">
      <div className="work-section-top">
        <h1 className="primary-heading1">Services specifically <span className="highlight3"> designed to  </span> meet your business needs</h1>
      <h className="Helping">I can help you with</h>
        <p className="primary-text1">
        Take your online presence to the next level with my expert web design and content creation services.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;