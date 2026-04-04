import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import PopIn from '../../../components/animations/PopIn';

const testimonials = {
  heading: 'Success Stories',
  subHeading: 'Trusted by Clients & Advocates',
  items: [
    {
      id: 1,
      name: 'Sarah Jenkins',
      role: 'Client',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      content:
        "I needed legal advice for my startup but didn't know where to turn. MLawyer connected me with an expert in minutes. The video consultation was seamless.",
      rating: 5
    },
    {
      id: 2,
      name: 'David Chen',
      role: 'Corporate Lawyer',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      content:
        'This platform has transformed how I manage my practice. I can reach clients nationwide and the integrated tools save me hours of administrative work every week.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Client',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      content:
        'Transparent pricing is a game-changer. I knew exactly what I was paying for. The advocate was professional, empathetic, and resolved my issue quickly.',
      rating: 5
    }
  ]
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-primary/5 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase mb-2 block animate-pulse">{testimonials.heading}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors">{testimonials.subHeading}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.items.map((testimonial) => (
            <PopIn delay={testimonial.id * 0.2}>
              <div key={testimonial.id} className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative group">
                <div className="absolute top-8 right-8 text-primary/10 dark:text-gray-600 text-6xl group-hover:text-secondary/20 transition-colors duration-300">
                  <FaQuoteLeft />
                </div>
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} size={16} />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed relative z-10 transition-colors">
                  "{testimonial.content}"
                </p>
                <div className="mt-auto flex items-center gap-4">
                  <img
                    loading="lazy"
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 dark:ring-secondary/20"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white transition-colors">{testimonial.name}</h4>
                    <p className="text-sm text-primary dark:text-secondary font-medium transition-colors">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </PopIn>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Testimonials;
