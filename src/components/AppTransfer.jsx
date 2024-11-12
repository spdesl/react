import React from 'react'
import Inner2 from '../assets/images/logo/inner-2.svg'
import InnerCard from '../assets/images/logo/inner-card.svg'
import Payment from '../assets/images/logo/icon-payment.svg'
import Icon7 from '../assets/images/logo/icon-7.svg'

const AppTransfer = () => {
  return (
    <section id="transfer-down">
        <div className="payment">
           <img className="image-down" src={Inner2}/>
           <img className="image-4" src={InnerCard}/>
        </div>
        <div className="second">
        <div className="h">
            <h2>Receive payment from international bank details</h2>
        </div>
        <div className="txt-left">
            <img src={Payment}/>
            <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
        </div>
        <div className="txt-right">
            <img src={Icon7}/>
            <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
        </div>
    
        <div className="btn-2">
            <a id="learn-down" href="">Learn more <i class="fa-solid fa-arrow-right"></i></a>
        </div>
    </div>
    </section>
  )
}

export default AppTransfer