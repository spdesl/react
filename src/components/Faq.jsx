import React from 'react'
import IconPhone from '../assets/images/logo/icon-phone.svg'
import IconWhatssap from '../assets/images/logo/icon-whatssap.svg'


const Faq = () => {
  return (
    <section id="footer">
    <div className="contact">
        <div className="contactP">
            <h3>Any questions? <br>Check out the FAQs</br></h3>
            <p>Still have unanswered questions and need to get in touch?</p>
        </div>
        <div className="contact-option">
            <div className="contact-box">
                <figure>
                    <img src={IconPhone}/>
                    <figcaption>Still have questions?</figcaption>
                </figure>
                <a href="">Contact us <i className="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="contact-box">
                <figure>
                    <img src={IconWhatssap}/>
                    <figcaption>Don't like phone calls?</figcaption>
                </figure>
                <a href="">Contact us <i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>

    </div>
  
    <div className="faq-1">
        <div className='accordin'>
        <div id="n1" className='accordin-item'>
            <div className='item-titelbar'>
            <h4>Is any of my personal information stored in the App?</h4>
            <div className='btn btn-accordin'>
                <i className='item-icon fa-solid fa-chevron-down'></i>
            </div>
        </div>
        <p className='item-content'>
            Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et,
                cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra
                fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi,
                enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique
                tincidunt suspendisse ut consequat.</p>
                </div>

        <div id="n2" className='accordin-item'>
            <div className='item-titelbar'>
            <h4>What formats can I download my transaction history in?</h4>
            <div className='btn btn-accordin'>
                <i className='item-icon fa-solid fa-chevron-down'></i>
            </div>
            </div>  
            <p className='item-content'>
                Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et,
                cursus. </p>
        </div>
            <div id="n3" className='acoordin-item'>
            <div className='item-titelbar'>
                <h4>Can I schedule future transfers?</h4>
                <div className='btn btn-accordin'>
                <i className='item-icon fa-solid fa-chevron-down'></i>
            </div>
            </div>
            <p className='item-content'>
                Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et,
                cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra
                fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi,
                enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique
                tincidunt suspendisse ut consequat.</p>
        </div>
        <div id="n4" className='accordin-item'>
        <div className='item-titelbar'>
            <h4>When can I use Banking App services?</h4> 
            <div className='btn btn-accordin'>
                <i className='item-icon fa-solid fa-chevron-down'></i>
            </div> 
        </div>
        <p className='item-content'>
        Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.</p>

        </div>
        <div id="n5" className='accordin-item'>
        <div className='item-titelbar'>
            <h4>Can I create my own password that is easy for me to remember?</h4>  
            <div className='btn btn-accordin'>
                <i className='item-icon fa-solid fa-chevron-down'></i>
            </div>  
        </div>
        <p className='item-content'>
        Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et,
        cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit.  
        </p>
        </div>
        <div id="n6" className='item-content'>
        <div className='item-titelbar'>
            <h4>What happens if I forget or lose my password?</h4>
            <div className='btn btn-accordin'>
                <i className='item-icon fa-solid fa-chevron-down'></i>
            </div>   
        </div>
        <p className='item-content'>
        Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et,
                cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra
                fermentum duis accumsan lectus non.</p>  
    </div>
    </div>
    </div>
</section>
  )
}

export default Faq