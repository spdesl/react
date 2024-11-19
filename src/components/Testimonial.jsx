import React from 'react'
import AuthorLeft from '../assets/images/author-l.svg'
import AuthorRight from '../assets/images/author-r.svg'

const Comment = () => {
  return (
    <section id="testimonials" className="client-testimonials">
    <div className="container">
        <div className="first-column">
            <h3>Clients are Loving Our App</h3>
        </div>
        <div className="second-column">
            <div className="testimonials">
                <div className="testimonial">
                    <div className="quote-icon">
                        <i className="fa-sharp fa-solid fa-quote-left"></i>
                    </div>
                    <div className="star-rating">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
                    <div className="testimonial-author">
                        <img className="profile" src={AuthorLeft}/>
                       
                    </div>
                </div>
                <div className="testimonial">
                    <div className="quote-icon">
                        <i className="fa-sharp fa-solid fa-quote-left"></i>  
                    </div>
                    <div className="star-rating">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
                    <div className="testimonial-author">
                        <img className="profile" src={AuthorRight}/>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Comment