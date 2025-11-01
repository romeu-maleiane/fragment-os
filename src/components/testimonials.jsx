import React from 'react'
import { testimonials } from '../../constants'
import TestimonialCard from './testimonialCard'

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="flex w-max animate-marquee-reverse gap-4 pr-4">
        {[...testimonials, ...testimonials].map(({ testimonial, avatar, name, carrer }, index) => (
          <TestimonialCard key={index} testimonial={testimonial} avatar={avatar} name={name} carrer={carrer} />
        ))}
      </div>
      <div className="flex w-max animate-marquee gap-4 pr-4">
        {[...testimonials, ...testimonials].map(({ testimonial, avatar, name, carrer }, index) => (
          <TestimonialCard key={index} testimonial={testimonial} avatar={avatar} name={name} carrer={carrer} />
        ))}
      </div>
      <div className="flex w-max animate-marquee-reverse-45 gap-4 pr-4">
        {[...testimonials, ...testimonials].map(({ testimonial, avatar, name, carrer }, index) => (
          <TestimonialCard key={index} testimonial={testimonial} avatar={avatar} name={name} carrer={carrer} />
        ))}
      </div>
      <div className='overlay'/>
    </section>
  )
}

export default Testimonials
