import React, { useEffect, useState } from 'react'

import Testimonial from './Testimonial'

const ClientTestimonial = () => {
    const [testimonials, setTestimonials] = useState ([])

    const getTestimonials = async() => {
      const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
      const data = await res.json()
      setTestimonials(data)

    }
    useEffect(() => { 
    getTestimonials()
    }, [ ])

  return (
    <section id="testimonials" className="client-testimonials">
    <div className="container">
        <div className="first-column">
            <h3>Clients are Loving Our App</h3>
        </div>
        <div className="second-column">
        <div className="testimonials">


            {
                testimonials.map((testimonial) => (
                <Testimonial key={testimonial.id} item={testimonial} />))
            }
            
    </div>
    </div>
    </div>
  </section>
  )
}

export default ClientTestimonial