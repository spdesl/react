import React from 'react'
import ImageUp from '../assets/images/inner.svg'
import InnerOne from '../assets/images/inner-1.svg'
import ImageDown from '../assets/images/inner-2.svg'
import InnerCard from '../assets/images/inner-card.svg'
import IconSeven from '../assets/images/icon-7.svg'

const AppTransfer = () => {
  return (
    <section id="transfer">
    <div className="img-up">
    <div className="container">
        <h2>Make your money transfer simple and clear</h2>
        <ul className="checklist">
            <li className="checklist-item"><i className="fa-regular fa-circle-check"></i>Banking transactions are free for you</li>
            <li className="checklist-item"><i className="fa-regular fa-circle-check"></i>No monthly cash commission</li>
            <li className="checklist-item"><i className="fa-regular fa-circle-check"></i>Manage payments and transactions online</li>
        </ul>
        <div className="btn-2">
            <a id="learn-up" href="">Learn more <i class="fa-solid fa-arrow-right"></i></a>
        </div>
            
    </div> 
    <div className="card-container">
        <img className={ImageUp}/>
        <img className={InnerOne}/>
    </div>

</div>
    <section id="transfer-down">
        <div className="payment">
           <img className={ImageDown}/>
           <img className={InnerCard}/>
        </div>
        <div class="second">
        <div class="h">
            <h2>Receive payment from international bank details</h2>
        </div>
        <div class="txt">
        <div class="txt-left">
            <img src={InnerCard}/>
            <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
        </div>
        <div className="txt-right">
            <img src={IconSeven}/>
            <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
        </div>
    </div>
        <div className="btn-2">
            <a id="learn-down" href="">Learn more <i className="fa-solid fa-arrow-right"></i></a>
        </div>
        </div>
    </section>
    <br /><br /><br />
</section>
  )
}

export default AppTransfer