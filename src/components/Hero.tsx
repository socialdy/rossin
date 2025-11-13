export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/NCwR5Gju3lU?autoplay=1&mute=1&loop=1&playlist=NCwR5Gju3lU&controls=0"
          title="Rossin Image Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute inset-0 w-full h-full -z-10"
        ></iframe>
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
