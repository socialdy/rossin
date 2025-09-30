import { useState } from "react";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_background.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
      </div>

      {/* Scroll Down and Pagination */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center mb-8 z-10">
        <a href="#produkte" className="scrolldown d-flex text-white flex-col items-center mb-4" tabIndex={0}>
          SCROLL
          <i className="fal fa-chevron-down mt-2"></i>
        </a>
        <ul className="slick-dots" role="tablist">
          <li className="slick-active" role="presentation">
            <button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 1" tabIndex={0} aria-selected={true}>1</button>
          </li>
        </ul>
      </div>
    </section>
  );
};
