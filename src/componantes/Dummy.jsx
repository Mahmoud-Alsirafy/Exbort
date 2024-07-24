import React, { useEffect } from 'react'
import "./fake.css"
import spiner from "./../img/04-29-06-428_512.webp"
import { Link, useParams } from 'react-router-dom'
export default function Dummy({ DummyProducts, getDummyJsonProducts, Loder, addToCart, AddFavourite }) {


    useEffect(() => {
        getDummyJsonProducts()
    }, [])
    return (
        <section>

            <h2>Fake products</h2>
            <div className="container">

                {
                    Loder ?
                        <div><img src={spiner} alt="" /></div>
                        :
                        DummyProducts.map((value, key) => {
                            return (
                                <div className='cobel bg-white p-4' key={key}>
                                    <Link to={`/product/${value.id}`}>
                                        <img src={value.thumbnail} alt="" key={value.index} className='img' />
                                    </Link>
                                    <p className='text-center fs-3 title'>{value.title.slice(0, 10)}</p>
                                    <div className='text-warning d-flex justify-content-between container'>
                                        <i onClick={() => AddFavourite (value)} className="fa-solid fa-heart"></i>
                                        <i onClick={() => addToCart(value)} className="fa-solid fa-cart-shopping"></i>
                                    </div>
                                </div>
                            )
                        })
                }


            </div>


        </section>
    )
}
