import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { getselectedProductsCount, clrDetails, setHistory } from '../Redux/actions/products-action';

function Cart({ productList, count, totalAmount, earnedPoints, clrDetails, setHistory, setSelectedProducts }) {
    const [selectedProducts, setSelectedProductsData] = useState(productList)
    useEffect(() => {
        setSelectedProductsData(productList);
    }, [productList])

    function proceedCheckoutHandler() {
        const current = new Date();
        const date1 = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

        const sendcheckoutdata = {
            totalAmount: totalAmount,
            totalItems: count,
            earnedPoints: earnedPoints,
            purchaseDate: date1
        }
        setHistory(sendcheckoutdata);
        clrDetails();

    }

    return (
        <div>
            {productList.length > 0 && <div className='row p-5 '>
                <div className="col-9 ">
                    <div className="list-group">

                        {productList.map((prod) => {
                            return (
                                <>
                                    <div className="row border p-2" key={prod.id}>
                                        <div className='col-3'><img src={prod.image} alt={prod.name} className="card-img-top" style={{ width: '80px', height: '80px' }} /></div>
                                        <div className='col-3'>{prod.name}</div>
                                        <div className='col-3'><span>$ {prod.price.split(".")[0]}</span></div>

                                    </div>
                                </>)
                        })}
                    </div>
                </div>
                <div className="col-3">
                    <div className="filters">
                        <span className="title">Subtotal ({count}) items</span>
                        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {totalAmount}</span>
                        <span style={{ fontWeight: 700, fontSize: 20 }}>EarendPoints:  {earnedPoints}</span>
                        <hr />
                        <button className="btn btn-primary" onClick={proceedCheckoutHandler}> Proceed to Checkout</button>
                    </div>
                </div>
            </div>}
            {productList.length <= 0 &&
                <>
                    <div className='container mt-2'>
                        <div className="card" style={{ width: '18rem', left: '35%' }}>
                            <div className="card-body">
                                <h5 className="card-title">Cart is Empty!</h5>
                                <Link to="/"><button className="btn btn-primary"> HOME </button> </Link>
                            </div>
                        </div>
                    </div>

                </>}
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        productList: state.selectedProducts,
        count: state.totalCount,
        totalAmount: state.totalAmount,
        earnedPoints: state.earnedPoints
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getselectedProductsCount: (count) => dispatch(getselectedProductsCount(count)),
        clrDetails: () => dispatch(clrDetails()),
        setHistory: (historyDetails) => dispatch(setHistory(historyDetails))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);