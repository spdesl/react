import React from 'react'
import AppStore from '../assets/images/logo/appstore.svg'
import GooglePlay from '../assets/images/logo/googleplay.svg'
import MyBudget from '../assets/images/logo/mybudget.svg'
import YourCard from '../assets/images/logo/yourcard.svg'

const Hero = () => {
  return (
    <section id="hero">
    <div className="container">
        <div className="headline">
            <h1>Manage All Your Money in One App</h1>
        </div>
        <div className="content">
            <p>We offer you a new generation of the mobile banking.Save, spend & manage money in your pocket.</p>
                <div classNme="buttons">
                    <a href="btn-app"><img src={AppStore} /></a>
                    <a href="btn-app"><img src={GooglePlay} /></a>
                </div>
                <a href="#" className="discover-more">
                    <span className="btn-circle">
                    <i className="fa-solid fa-chevron-down"></i>
                    </span>
                    <span>Discover more</span>
                    </a>
        </div>
<div className="images">
    <img className="img-back" src={MyBudget} />
    <img className="img-front" src={YourCard} />
</div>
    </div>
</section>
  )
}

export default Hero