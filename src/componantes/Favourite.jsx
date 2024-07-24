import React from 'react'
import img from "./../img/cat-1.jpg"
import "./favouorite.css"

export default function Favourite({ favourite, removeFromFav }) {
    return (
    <section>

        {
            favourite.length > 0 ?

                <div className='row my-3'>
                    {favourite.map((value, index) => {
                        return (
                            <div className="col-lg-12 cart col-md-12 col-ms-12" key={index}>
                                <div className="container d-flex justify-content-around fav  ">
                                    <div><img src={value.img ? value.img : value.image ? value.image : value.thumbnail} alt="" /></div>
                                    <div className='price'>
                                        <b className='fs-5'>${value.price}</b>
                                    </div>
                                    <div>
                                        <button onClick={() => { removeFromFav(index) }} className='btn btn-danger'>Delete This Item</button>
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>

                :
                <div className='text-danger fs-1 text-center'>Your Favourite Is Empty !! <span style={{ display: "block" }} >Add Some Products:)</span></div>
            }
        </section>
    )
}
