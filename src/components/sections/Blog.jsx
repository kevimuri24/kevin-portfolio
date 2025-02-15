import React, { useState } from 'react';
import { Clock, ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';

const BlogPost = ({ title, excerpt, image, category, readTime, isActive }) => (
  <article className={`${isActive ? 'block' : 'hidden'} bg-white rounded-2xl overflow-hidden shadow-sm`}>
    <div className="relative aspect-[16/9] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute top-6 left-6">
        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white text-teal-600">
          {category}
        </span>
      </div>
    </div>
    <div className="p-8">
      <div className="flex items-center space-x-4 text-sm mb-4">
        <div className="flex items-center space-x-2 text-gray-600">
          <Clock size={14} />
          <span>{readTime} min read</span>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-teal-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-6">{excerpt}</p>
      <button className="group inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors">
        Read More 
        <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
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
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-teal-600 mb-2">MY BLOG</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Articles
          </h2>
          <p className="text-gray-600">
            My academic pursuit led me to <span className="text-teal-600">New York University</span> (NYU), 
            where I delved into the world of arts and letters.
          </p>
        </div>

        {/* Blog Posts */}
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
                className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-teal-600 transition-colors"
                aria-label="Previous post"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-teal-600 transition-colors"
                aria-label="Next post"
              >
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {posts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-teal-600' : 'bg-gray-200'
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