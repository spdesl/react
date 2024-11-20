import React from 'react'
import AppStore from '../assets/images/appstore.svg'
import GooglePlay from '../assets/images/googleplay.svg'
import MyBudget from '../assets/images/mybudget.svg'
import YourCard from '../assets/images/yourcard.svg'

const Hero = () => {
  return (
    <section id="hero">
    <div className="container">
     <div className="headline">
    <h1>Manage All Your Money in One App</h1>
    </div>
    <div className="content">
    <p>We offer you a new generation of the mobile banking.Save, spend & manage money in your pocket.</p>
      <div className="buttons">
        <a className="btn-download-app" href="#"><img src={AppStore}/></a>
       <a className="btn-download-app" href="#"><img src={GooglePlay}/></a>
     </div>
     <a className="discover-more" href="#">
        <span className="btn-circle">
        <i className="fa-solid fa-chevron-down"></i>
        </span>
        <span>Discover more</span>
    </a>
</div>
        <div className="images">
<img className="img-back" src={MyBudget} />
<img className="img-front" src={YourCard}/>
</div>

    </div>  
</section>

  )
}

export default Hero