import React, { useState, useCallback, memo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Memoized Navigation Button
const NavigationButton = memo(({ direction, onClick, children }) => (
  <button 
    onClick={onClick}
    className={`absolute ${
      direction === 'left' ? 'left-0 -translate-x-12' : 'right-0 translate-x-12'
    } top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors`}
    aria-label={`${direction} testimonial`}
  >
    {children}
  </button>
));

// Memoized Testimonial Card
const TestimonialCard = memo(({ testimonial }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <div className="flex flex-col items-center text-center">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-24 h-24 rounded-full object-cover mb-6"
        loading="lazy"
        width="96"
        height="96"
      />
      <p className="text-gray-700 italic text-lg mb-6">
        "{testimonial.testimony}"
      </p>
      <h4 className="text-xl font-semibold text-gray-900">
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

  // Consider moving this to a separate data file
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
      requestAnimationFrame(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      });
    }
  }, [isAnimating, testimonials.length]);

  const goToPrevious = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      requestAnimationFrame(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
      });
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

  // Auto-advance carousel with RAF
  React.useEffect(() => {
    let rafId;
    const interval = setInterval(() => {
      rafId = requestAnimationFrame(goToNext);
    }, 5000);

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(rafId);
    };
  }, [goToNext]);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-cyan-300">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          What Clients Say
        </h2>
        
        <div className="relative">
          <NavigationButton direction="left" onClick={goToPrevious}>
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </NavigationButton>
          
          <NavigationButton direction="right" onClick={goToNext}>
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </NavigationButton>

          <TestimonialCard testimonial={testimonials[currentIndex]} />

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