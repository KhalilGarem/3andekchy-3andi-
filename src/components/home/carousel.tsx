const Carousel = () => {
  return (
    <div className="flex justify-center">
      <div className="carousel h-[500px] w-[1450px] rounded-xl">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/images/efe7.jpg" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn-circle btn">
              ❮
            </a>
            <a href="#slide2" className="btn-circle btn">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/images/fokhar.jpg" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn-circle btn">
              ❮
            </a>
            <a href="#slide3" className="btn-circle btn">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img src="/images/sahfa.jpg" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn-circle btn">
              ❮
            </a>
            <a href="#slide1" className="btn-circle btn">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
