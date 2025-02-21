import React, { useState, useCallback, memo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Memoized Navigation Button
const NavigationButton = memo(({ direction, onClick, children }) => (
  <button 
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors ${
      direction === 'left' ? '-left-3 md:-left-5' : '-right-3 md:-right-5'
    }`}
    aria-label={`${direction} testimonial`}
  >
    {children}
  </button>
));

// Memoized Testimonial Card
const TestimonialCard = memo(({ testimonial }) => (
  <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
    <div className="flex flex-col items-center text-center">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-4 md:mb-6"
        loading="lazy"
        width="96"
        height="96"
      />
      <p className="text-gray-700 italic text-base md:text-lg mb-4 md:mb-6">
        "{testimonial.testimony}"
      </p>
      <h4 className="text-lg md:text-xl font-semibold text-gray-900">
        {testimonial.name}
      </h4>
      <p className="text-sm text-gray-600">
        {testimonial.role}
      </p>
    </div>
  </div>
));

// Main Testimonials Component
const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      name: "John Doe",
      image: "/boy.png",
      testimony: "Kevin is an amazing developer! His attention to detail and problem-solving skills are top-notch.",
      role: "CEO, TechCorp",
    },
    {
      name: "Jane Smith",
      image: "/woman.png",
      testimony: "Working with Kevin was a pleasure. His creativity and technical skills brought our project to life.",
      role: "Project Manager, DesignPro",
    },
    {
      name: "Michael Brown",
      image: "/boy.png",
      testimony: "Highly recommend Kevin for any web development project. Professional and efficient!",
      role: "Founder, StartupX",
    },
  ];

  const goToNext = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }
  }, [isAnimating, testimonials.length]);

  const goToPrevious = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  }, [isAnimating, testimonials.length]);

  // Reset animation state
  React.useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // Auto-advance carousel
  React.useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <section id="testimonials" className="py-16 md:py-24 lg:py-32 bg-cyan-300">
      <div className="max-w-4xl mx-auto px-8 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
          What Clients Say
        </h2>
        
        <div className="relative px-4 md:px-8">
          {/* Carousel Container */}
          <div className="relative">
            <NavigationButton direction="left" onClick={goToPrevious}>
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            </NavigationButton>
            
            <NavigationButton direction="right" onClick={goToNext}>
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            </NavigationButton>

            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(TestimonialCarousel);