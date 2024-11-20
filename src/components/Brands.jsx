import React from 'react'
import Logo1 from '../assets/images/logo-1.svg'
import Logo2 from '../assets/images/logo-2.svg'
import Logo3 from '../assets/images/logo-3.svg'
import Logo4 from '../assets/images/logo-4.svg'
import Logo5 from '../assets/images/logo-5.svg'
import Logo6 from '../assets/images/logo-6.svg'

const Brands = () => {
  return (
    <section id="brands">
    <div className="container">
        <div id="brand-1" className="brand-box">
            <img src={Logo1}/>
        </div>
        <div id="brand-2" className="brand-box">
            <img src={Logo2}/>
        </div>
        <div id="brand-3" className="brand-box">
            <img src={Logo3}/>
        </div>
        <div id="brand-4" className="brand-box">
            <img src={Logo4}/>
        </div>
        <div id="brand-5" className="brand-box">
            <img src={Logo5}/>
        </div>
        <div id="brand-6" className="brand-box">
            <img src={Logo6}/>
        </div>
    </div>
</section>
  )
}

export default Brands