import React from 'react'
import IphoneCard from '../assets/images/iphone -card.svg'
import Card from '../assets/images/card.svg'
import IconOne from '../assets/images/icon-1.svg'
import IconFour from '../assets/images/icon-4.svg'
import IconTwo from '../assets/images/icon-2.svg'
import IconFive from '../assets/images/icon-5.svg'
import IconThree from '../assets/images/icon-3.svg'
import IconSix from '../assets/images/icon-6.svg'

const Features = () => {
  return (
    <section id="app-feaures">
    <div className="pictures">
        <img className="back-pic" src={IphoneCard}/>
        <img className="front-pic" src={Card}/>
    </div>
    <div className="app">
    <div className="container">
            <h2>App Features</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam
                luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
        </div>
              <div className="one">
                <div id="pay" className="icon-box">
                    <img src={IconOne}/>
                    <h3>Easy Payments</h3>
                  <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </div>
                    <div id="data" className="icon-box">
                     <img src={IconFour}/>
                     <h3>Data Security</h3>
                     <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
                    </div>
              </div>
                <div className="two">
                    <div id="cost" className="icon-box">
                        <img src={IconTwo}/>
                        <h3>Cost Statistics</h3>
                        <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                        </div>
            
                <div id="support" className="icon-box">
                        <img src={IconFive}/>
                        <h3>Support 24/7</h3>
                        <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                </div>
                </div>
                <div className="third">
                    <div id="regular" className="icon-box">
                        <img src={IconThree}/>
                        <h3>Regular Cashback</h3>
                        <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.
                            </p>  
                </div>
                <div id="standard" className="icon-box">
                        <img src={IconSix}/>
                        <h3>Top Standards</h3>
                            <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis
                                dolor arcu.</p> 
                </div>
                </div>
            
        </div>
   
</section>
  )
}

export default Features