import React from 'react'
import "./cart.css"
import img from "./../img/cat-1.jpg"

export default function Cart({ cartItem, removeFromCart, increment, decrement }) {
    console.log(cartItem);
    
    let total=0
    return (
        <section>

            {cartItem.length > 0 ? 

            <div className="container row my-5 p-5 ">

                
                {cartItem.map((value, index) => {

                    return (
                        <div className="col-lg-9 col-md-6 col-sm-12 cart d-flex align-items-center justify-content-around w-100" key={index}>
                            <span style={{display : "none"}}>{total+=value.price*value.amount}</span>
                            <div><img src={value.img ? value.img : value.image ?value.image : value.thumbnail  } alt="" /></div>
                            <div className="price">
                                <b style={{ display: "block" }} className='fs-5'>${value.price}</b>
                                <b style={{ display: "block" }} className='fs-5'>${value.price*value.amount}</b>
                            </div>
                            <div className='d-flex align-items-center  gap-3 proess'>
                                <button onClick={() => { increment(value)}}>+</button>
                                <span>{value.amount}</span>
                                <button onClick={() => { decrement (value)}}>-</button>
                            </div>
                            <button onClick={() => { removeFromCart(index) }} className='btn btn-danger'>Delete From Cart</button>
                        </div>
                    )

                })}



                <div className="col-lg-8 col-md-6 col-sm-12 mx-auto">
                    <div className='totall p-3 d-flex align-items-center justify-content-around rounded-3 border border-3 border-black'>
                        <b className='fs-3'>Totall</b>
                        <b className='fs-3'>${total.toFixed(2)} </b>
                    </div>
                </div>

                </div>
                :
                <div className='text-danger fs-1 text-center'>Your Cart Is Empty !! <span style={{display : "block"}} >Add Some Products:)</span></div>
            }
        </section>
    )
}
