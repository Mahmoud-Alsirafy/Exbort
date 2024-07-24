import React from 'react'
import "./service.css"

export default function Service() {
    return (
        <div className='d-flex justify-content-between container flex-wrap gap-2' id='Service'>
            <div className='d-flex gap-1 Service'>
                <i className="fa-solid fa-check"></i>
                <p>Quality Product</p>
            </div>

            <div className='d-flex gap-1 Service'>
                <i className="fa-solid fa-truck-fast"></i>
                <p>Free Shipping</p>
            </div>

            <div className='d-flex gap-1 Service'>
                <i className="fa-solid fa-arrow-right-arrow-left"></i>
                <p>14-Day Return</p>
            </div>

            <div className='d-flex gap-1 Service'>
                <i className="fa-solid fa-phone-volume"></i>
                <p>24/7 Support</p>
            </div>
        </div>
    )
}
