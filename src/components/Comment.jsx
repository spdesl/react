import React from 'react'
import RatingLeft from '../assets/images/logo/rating-l.svg'
import QuotesLeft from '../assets/images/logo/quotes-l.svg'
import AuthorLeft from '../assets/images/logo/author-l.svg'
import RatingRight from '../assets/images/logo/rating-r.svg'
import QuotesRight from '../assets/images/logo/quotes-r.svg'
import AuthorRight from '../assets/images/logo/author-r.svg'

const Comment = () => {
  return (
    <section id="comment">
    <div className="client-all">
        <div className="commentL">
        <h3>Clients are Loving Our App</h3>
    </div>
    <div className="commentR">
        <div className="clientL">
            <figure>
                <img class="rating-L" src={RatingLeft}/>
                <img class="quotes-L" src={QuotesLeft}/>
                <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
                <img class="author-kvinna" src={AuthorLeft}/>
            </figure>
        </div>
        <div className="clientR">
            <figure>
                <img class="rating-R" src={RatingRight}/>
                <img class="quotes-R" src={QuotesRight}/>
                <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
                <img class="author-man" src={AuthorRight}/>
            </figure>
        </div>
    </div>
    </div>
</section>
  )
}

export default Comment