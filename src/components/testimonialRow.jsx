'use client'
import React from 'react'
import { testimonials } from '../../constants'
import TestimonialCard from './testimonialCard'

function TestimonialRow() {
  return (
    <section className="w-full overflow-hidden pb-40 mask-[linear-gradient(to_right,transparent,black,transparent)]">
      <div className="flex w-max animate-marquee gap-4 pr-4">
        {[...testimonials, ...testimonials].map(({ testimonial, avatar, name, carrer }, index) => (
          <TestimonialCard key={index} testimonial={testimonial} avatar={avatar} name={name} carrer={carrer} />
        ))}
      </div>
    </section>
  )
}

export default TestimonialRow
