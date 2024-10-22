import React from "react";
import { useSpring, animated } from "react-spring";
import slideone from "../image/Carrera-Sunglasses-brands-StartupTalky.jpg";
import slidetwo from "../image/Oakley-Sunglasses-brands-StartupTalky.jpg";
import slidethree from "../image/Oakley-Sunglasses-brands-StartupTalky - Copy.jpg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const slides = [
  {
    image: slideone,
    title: "Welcome to Sailor",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image: slidetwo,
    title: "At vero eos et accusamus",
    content:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.",
  },
  {
    image: slidethree,
    title: "Temporibus autem quibusdam",
    content:
      "Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.",
  },
];

const Banner = () => {
  const [index, setIndex] = React.useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const { opacity, transform } = useSpring({
    opacity: 1,
    transform: `translateY(0px)`,
    from: { opacity: 0, transform: `translateY(20px)` },
    reset: true,
    config: { tension: 200, friction: 20 },
    onRest: () => {
      setTimeout(nextSlide, 5000);
    },
  });

  return (
    <>
      <section
        id="hero"
        className="hero section bg-gray-900 text-white relative"
      >
        <div className="relative w-full h-[900px] overflow-hidden">
          <img
            src={slides[index].image}
            alt={`Slide ${index + 1}`}
            className="absolute inset-0 opacity-60 w-full h-full object-cover"
          />
          <animated.div
            className="carousel-container  absolute top-28 ml-52 mr-52 transform -translate-x-1/2 -translate-y-1/2 text-center"
            style={{ opacity, transform }}
          >
            {/* <h2 className="text-3xl md:text-4xl mb-8 font-bold">
            {slides[index].title}
          </h2> */}
            {/* <p className="mb-8">{slides[index].content}</p>
          <a
            href="#featured-services"
            className="btn-get-started bg-red-600 hover:bg-red-800 text-white px-6 py-2 rounded"
          >
            Get Started
          </a> */}
          </animated.div>
        </div>

        {/* Previous Button */}
        <button
          className="carousel-control-prev absolute top-1/2 left-5 transform -translate-y-1/2 z-10 bg-red"
          onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
        >
          <span
            className="carousel-control-prev-icon bi bi-chevron-left"
            aria-hidden="true"
          >
            <ArrowBackIosNewIcon />
          </span>
        </button>

        {/* Next Button */}
        <button
          className="carousel-control-next absolute top-1/2 right-5 transform -translate-y-1/2 z-10"
          onClick={nextSlide}
        >
          <span
            className="carousel-control-next-icon bi bi-chevron-right"
            aria-hidden="true"
          >
            <ArrowForwardIosIcon />
          </span>
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-4 space-x-2 pb-4">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`carousel-indicator w-9 h-1  rounded-full ${
                i === index ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setIndex(i)}
            ></button>
          ))}
        </div>
      </section>
    </>
  );
};

export default Banner;
