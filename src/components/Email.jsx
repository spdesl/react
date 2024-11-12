import React from 'react'
import Notification from '../assets/images/logo/notification.svg'

const Email = () => {
  return (
    <section id="subscribe" class="subscribe">
    <div class="notif">
            <img src={Notification}/>
            <p>Subscribe to our newsletter to stay informed about latest updates.</p>
   <form class="subscribe-form">  
    <div class="input-container">
        <input type="email"  name="email"  placeholder="your email"/>
        <i class="fa-light fa-envelope"></i>
        <button type="submit" class="btn">subscribe</button>
    </div>
</form>
    </div>
</section>
  )
}

export default Email