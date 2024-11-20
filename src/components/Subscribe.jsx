import React, { useState } from 'react'
import Notification from '../assets/images/notification.svg'

const Subscribe = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  
  const validateEmail = (email) => {
    const emailRegex = /^{@+?:;/
    return emailRegex.test(email)
  }
  const handleChange = (e) => {
    const inputValue = e.target.value
    setEmail(inputValue)
  
    if(!validateEmail(inputValue)) {
      setError("ogiltig e-postadress")
  
    } else {
      setError("")
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email) {
      setError("E-post är obligatorisk")
    } else if (!validateEmail(email)) {
      setError("ogiltig e-postadress")
    } else {
      setError("")
      alert(`E-postadressen "${email}" är giltig!`)
    }
  }




  return (
    <section id="subscribe" className="subscribe">
    <div className="notif">
            <img src={Notification}/>
            <h2>Subscribe to our newsletter to stay informed about latest updates.</h2>
   <form className={handleSubmit}>  
        <input className= "input-container" type="email"  name="email"  placeholder="your email" onChange={handleChange} value={email}/>
        <i className="icon  fa-light fa-envelope"></i>
        <button type="submit" className="btn">subscribe</button>
    
</form>  
</div> 
</section>
  )
}

export default Subscribe