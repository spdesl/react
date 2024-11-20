import React, { useState } from 'react'

const AccordionItem = ({item}) => {

const [isOpen, SetIsOpen] = useState(false)

const toggleAccordion = () => {
    SetIsOpen(!isOpen)
}

  return (
    <div id="n1" className="accordion-item">
            <div className={`item-tetlebar $(isOpen ? 'active': '')`} onClick={toggleAccordion}>
            <h4>{item.title}</h4>
            <div className= "btn-accordion">
                <i  className={`fa-solid $(isOpen ? 'fa-chevron-up': 'fa-chevron-down')`} ></i>
                
            </div>
        </div>
{
    isOpen && (
        <p className={`item-content $(isOpen ? 'active': '')`}>
        {item.content}</p>
    )
}
        
                </div>
  )
}

export default AccordionItem