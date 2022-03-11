import React from 'react';
import '../App.css'

function SingleProduct({ prod, handleClick }) {
    return (
        <div className='products'>
            <div className="card" style={{ width: '18rem' }}>
                <img src={prod.image} alt={prod.name} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{prod.name}</h5>
                    <p className="card-text"> <span>$ {prod.price.split(".")[0]}</span></p>
                    <button className={prod.addToCart ?"btn btn-danger":"btn btn-primary"} onClick={() => handleClick(prod.id)}>
                        {prod.addToCart ? <><i className="fa fa-trash-o" aria-hidden="true"></i>&nbsp;&nbsp; Remove from cart</> : <><i className="fa fa-cart-plus" aria-hidden="true"></i>&nbsp;&nbsp; Add to cart</>}
                     </button>

                 </div>
            </div>
        </div>
    );
}

export default SingleProduct;