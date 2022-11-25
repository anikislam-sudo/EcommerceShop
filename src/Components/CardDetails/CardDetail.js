import React from 'react';

const CardDetail = ({Card}) => {
    const {_id,name,picture,price,discount}= Card;
    console.log(Card);
    return (
        <div >
          
    <div className="card w-96 bg-base-100 shadow-xl ">
  <figure><img src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Price:${price}</p>
    <div className="card-actions ">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

            
        </div>
    );
};

export default CardDetail;