import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ScrollAnimationWrapper = ({ 
  children, 
  direction = 'up',
  delay = 0,
  threshold = 0.1 
}) => {
  const [ref, isVisible] = useScrollAnimation(threshold);

  const getAnimationClass = () => {
    const baseClass = 'opacity-0 transition-all duration-1000';
    const delayClass = `delay-[${delay}ms]`;
    
    switch (direction) {
      case 'up':
        return `translate-y-20 ${baseClass} ${delayClass}`;
      case 'down':
        return `-translate-y-20 ${baseClass} ${delayClass}`;
      case 'left':
        return `-translate-x-20 ${baseClass} ${delayClass}`;
      case 'right':
        return `translate-x-20 ${baseClass} ${delayClass}`;
      default:
        return baseClass;
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : ''
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;