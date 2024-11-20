import React from 'react'
import IphoneBudget from '../assets/images/iPhone -mybudget.svg'
import YourCard from '../assets/images/iphone -yourcard.svg'
import Transfer from '../assets/images/iphone-transfer.svg'

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
    <div className="end">
        <h3>Latest transaction history</h3>
        <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in
            consectetur condimentum. </p>
    </div>
    <br /><br /><br />

</section>
  )
}

export default Work