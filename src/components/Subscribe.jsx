import React from 'react'
import Notification from '../assets/images/notification.svg'

const Email = () => {
  return (
    <section id="subscribe" className="subscribe">
    <div className="notif">
            <img src={Notification}/>
            <h2>Subscribe to our newsletter to stay informed about latest updates.</h2>
   <form className="subscribe-form">  
        <input className= "input-container" type="email"  name="email"  placeholder="your email"/>
        <i className="icon  fa-light fa-envelope"></i>
        <button type="submit" className="btn">subscribe</button>
    
</form>  
</div> 
</section>
  )
}

export default Email