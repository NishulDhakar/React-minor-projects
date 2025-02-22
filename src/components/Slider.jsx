import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Password Generator",
    description: "Generate secure passwords with customizable options",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    path: "/password-generator",
    tech: ["React", "TailwindCSS"]
  },
  {
    id: 2,
    title: "Task Manager",
    description: "Organize and track your daily tasks efficiently",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
    path: "/task-manager",
    tech: ["React", "Redux", "TailwindCSS"]
  },
  {
    id: 3,
    title: "Weather App",
    description: "Check real-time weather updates for any location",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    path: "/weather-app",
    tech: ["React", "API", "TailwindCSS"]
  }
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(new Array(projects.length).fill(false));

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    if (!isHovered) {
      const autoSlideTimer = setInterval(nextSlide, 5000);
      return () => clearInterval(autoSlideTimer);
    }
  }, [isHovered]);

  const handleImageLoad = (index) => {
    setImagesLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="w-full flex-shrink-0"
            >
              <Link 
                to={project.path} 
                className="block relative group cursor-pointer"
                aria-label={`View ${project.title} project`}
              >
                <div className="relative aspect-[16/9]">
                  {!imagesLoaded[index] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                      <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      imagesLoaded[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    } group-hover:scale-105 transform`}
                    onLoad={() => handleImageLoad(index)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                    flex flex-col justify-end p-8 opacity-90 transition-all duration-500
                    group-hover:from-black/95 group-hover:via-black/60">
                    <h3 className="text-3xl font-bold text-white mb-3 transform translate-y-2 
                      group-hover:translate-y-0 transition-transform duration-500">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 mb-4 text-lg transform translate-y-2 
                      group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {project.description}
                    </p>
                    <div className="flex gap-2 flex-wrap transform translate-y-2 
                      group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-4 py-1.5 bg-orange-500/90 rounded-full text-sm text-white 
                            font-medium backdrop-blur-sm hover:bg-orange-500 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm 
          hover:bg-black/50 text-white p-4 rounded-full transition-all duration-300
          transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm 
          hover:bg-black/50 text-white p-4 rounded-full transition-all duration-300
          transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => !isAnimating && setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              currentSlide === index 
                ? 'w-8 bg-orange-500' 
                : 'w-2 bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;