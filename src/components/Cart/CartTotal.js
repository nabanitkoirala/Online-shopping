import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotal({value}) {
    const { cartSubTotal,cartTax,cartTotal,clearCart } = value;
    return (

        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/">
                        <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>clearCart()}>
                            clear Cart
                        </button>
                    </Link>
                    <h5>
                        <span className="text-title">
                            subtotal : </span>
                            <strong>Rs {cartSubTotal}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">
                            VAT(13%) : </span>
                            <strong>Rs {cartTax}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">
                            Total : </span>
                            <strong>Rs {cartTotal}</strong>
                    </h5>
                    <Link to="/purchaseForm">
                    <button className="btn btn-success text-uppercase mb-3 px-5" type="button">
                        Purchase
                        </button>
                    </Link>
                   
                </div>
            </div>
        </div>
    )
}
