import React from 'react'
import IphoneBudget from '../assets/images/logo/iPhone -mybudget.svg'
import YourCard from '../assets/images/logo/iphone -yourcard.svg'
import Transfer from '../assets/images/logo/iphone-transfer.svg'

const Work = () => {
  return (
    <section className="work">
    <div className="prg">
        <h2>How Does It Work?</h2>
    </div>
    <div className="pic">
        <div className="pic1">
            <figure>
                <img src={IphoneBudget}/>
            </figure>
        </div>
        <div className="pic2">
            <figure>
                <img src={YourCard}/>
            </figure>
        </div>
        <div className="pic3">
            <figure>
                <img src={Transfer}/>
            </figure>
        </div>
    </div>
    <div className="foot">
        <h3>Latest transaction history</h3>
        <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in
            consectetur condimentum. </p>
    </div>
   

</section>
  )
}

export default Work