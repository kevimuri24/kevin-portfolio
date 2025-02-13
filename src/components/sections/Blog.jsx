import React, { useState } from 'react';
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react';

const BlogPost = ({ title, excerpt, image, category, readTime, isActive }) => (
  <article className={`${isActive ? 'block' : 'hidden'}`}>
    <div className="relative aspect-[16/9] overflow-hidden mb-8">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="space-y-4">
      <div className="flex items-center space-x-4 text-sm">
        <span className="text-gray-600">{category}</span>
        <div className="flex items-center space-x-1 text-gray-600">
          <Clock size={14} />
          <span>{readTime} min ago</span>
        </div>
      </div>
      <h3 className="text-2xl font-medium">{title}</h3>
      <p className="text-gray-600 max-w-3xl">{excerpt}</p>
    </div>
  </article>
);

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const posts = [
    {
      title: "Design Dynamics: Unraveling a Decade of Graphic Evolution",
      excerpt: "Explore the dynamic shifts in graphic design over the past decade, unveiling the evolving trends, technologies, and creative dynamics that have shaped the visual landscape.",
      image: "/api/placeholder/1200/600",
      category: "Creativity",
      readTime: "3"
    },
    {
      title: "The Intersection of Art and Technology in Modern Web Design",
      excerpt: "Discover how the fusion of artistic expression and technological innovation is reshaping the way we approach web design and digital experiences.",
      image: "/api/placeholder/1200/600",
      category: "Design",
      readTime: "5"
    },
    {
      title: "My academic pursuit led me to New York University",
      excerpt: "A journey through the academic landscape that shaped my perspective on design and technology in the heart of New York City.",
      image: "/api/placeholder/1200/600",
      category: "Personal",
      readTime: "4"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + posts.length) % posts.length);
  };

  return (
    <section id="blog" className="min-h-screen pr-64 bg-white py-20">
      <div className="px-16">
        <h2 className="text-4xl font-normal mb-8">Blog</h2>
        
        <p className="mb-12">
          My academic pursuit led me to <span className="text-red-500">New York University</span> (NYU), 
          where I delved into the world of arts and letters.
        </p>

        {/* Blog Carousel */}
        <div className="relative">
          {posts.map((post, index) => (
            <BlogPost 
              key={index} 
              {...post} 
              isActive={index === currentSlide}
            />
          ))}

          {/* Navigation */}
          <div className="mt-8 flex justify-between items-center">
            <span className="text-sm text-gray-500">
              {currentSlide + 1} / {posts.length}
            </span>
            <div className="flex space-x-4">
              <button
                onClick={prevSlide}
                className="p-2 hover:text-red-500 transition-colors"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 hover:text-red-500 transition-colors"
                aria-label="Next slide"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {posts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-red-500' : 'bg-gray-200'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;