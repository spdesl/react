import React from 'react'
import Inner from '../assets/images/logo/inner.svg'
import Inner1 from '../assets/images/logo/inner-1.svg'

const ImageUp = () => {
  return (
    <section className="img-up">
    <div className="container">
        <h2>Make your money transfer simple and clear</h2>
            <span><i class="fa-regular fa-circle-check"></i>Banking transactions are free for you</span>
            <span><i class="fa-regular fa-circle-check"></i>No monthly cash commission</span>
            <span><i class="fa-regular fa-circle-check"></i>Manage payments and transactions online</span>
            <a id="learn-up" href="">Learn more <i class="fa-solid fa-arrow-right"></i></a>
    </div> 
    <div className="card-container">
        <img className="image-up" src={Inner}/>
        <img className="image-2" src={Inner1}/>
    </div>

    </section>
  )
}

export default ImageUp