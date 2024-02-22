import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import people from "./data";

const Review = () => {
  //! 1
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      if (newIndex > people.length - 1) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      if (newIndex < 0) {
        newIndex = 4;
      }
      return newIndex;
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    setIndex(randomNumber);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
      </div>
      <div className="name-job">
        <h4 className="name">{name}</h4>
        <p className="job">{job}</p>
      </div>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft onClick={prevPerson} />
        </button>
        <button className="next-btn">
          <FaChevronRight onClick={nextPerson} />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Random Character
      </button>
    </article>
  );
};

export default Review;

//! 1 - sag ve sol ok tusuna basinca burada nasil karakter ilerlemesini yapacagiz. array destructuring yatik. state tin 0. index e name, job, image ve text e assing etmis olduk. index i bir attiracaz ve bu daya.js de ki bir sonraki index teki datayi getirecek.
