"use client";
import { useState } from "react";
import StayConnected from "../StayConnected";

function CardCarousel() {
  const cardData = ["Hello", "World", "Carousel", "Test"];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-[100vw] overflow-hidden  primary_bg_color">
      {/* Navigation Buttons */}
      <div className="flex justify-end gap-10 p-10">
        <button
          className="  text-white py-2 px-4 border-white border rounded-[50%]"
          onClick={handlePrev}
        >
          {"<"}
        </button>
        <button
         className="  text-white py-2 px-4 border-white border rounded-[50%]"
          onClick={handleNext}
        >
          {">"}
        </button>
      </div>

      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out mb-10 pb-20"
        style={{
          transform: `translateX(calc(-${activeIndex} * 70vw + 10vw)) `,
        }}
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`flex-shrink-0 transition-all  w-[50vw] h-[50vw] md:h-[30vw]  flex items-center justify-center rounded-3xl bg-red-800 ${activeIndex === index
                ? "scale-105 shadow-xl shadow-black"
                : "scale-90 opacity-75"
            } text-white mx-[10vw] text-2xl font-bold`}
          >
            {card}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardCarousel;
