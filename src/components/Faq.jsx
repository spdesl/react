import React, { useEffect, useState } from 'react'
import IconPhone from '../assets/images/icon-phone.svg'
import WhatssApp from '../assets/images/icon-whatssap.svg'
import AccordionItem from './AccordionItem'



const Faq = () => {

const [accordions, setAccordions] = useState([])
const fetchFaq = async () => {
    const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq') 
    const data = await res.json()
    setAccordions(data)
}

useEffect(() => {
fetchFaq()
}, [])



  return (
    <section id="contact-options">
    <div className="contact">
        <div className="contactP">
            <h3>Any questions? Check out the FAQs </h3>
            <p>Still have unanswered questions and need to get in touch?</p>
        </div>
        <div className="contact-option">
            <div className="contact-box">
                    <img src={IconPhone}/>
                    <p>Still have questions?</p>
                
                <a href="">Contact us <i className="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="contact-box">
                    <img src={WhatssApp}/>
                    <p>Don't like phone calls?</p>
                <a href="">Contact us <i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>

    </div>
    <div className="second-column">
        <div className="accordion">

            {
                accordions.map(item => (
                <AccordionItem  key={item.id} item={item}/>
                ))
            }

        

        
        
        
    </div>
    </div>
    
    
</section>
)
}
export default Faq