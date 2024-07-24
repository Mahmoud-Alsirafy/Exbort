import React from 'react'
import "./produte.css"
import productData from "./Produtes.js"


export default function Produte({ addToCart, AddFavourite }) {
    
 

            return (
                <section className='fw-warb'>
                    <h2 className=' header-sec'> Produtrs </h2>

                    <div className="row">
                        {productData.map((val, key) => {

                            return (

                                <div className="col-lg-3 col-md-6 col-sm-12 container calss  gap-3 " key={key}>

                                    <div className="single">
                                        <div className="img h"><img src={val.img} alt="" /></div>
                                        <div className=' pb-2 pro'>
                                            <div className='pro mt-1'>
                                                <p className='pro-name'>{val.title}</p>
                                                <p className='fw-bold'>${val.price}</p>
                                                <div className='d-flex gap-1 text-warning pro'>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                            <div className=' d-flex justify-content-between  pro container'>
                                                <i onClick={() => { AddFavourite(val)}} className="fa-solid fa-heart con"></i>
                                                <i onClick={() => { addToCart(val) }} className="fa-solid fa-cart-shopping con"></i>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            )


                        })}
                   </div>

                   

                </section>
            )
    
}
