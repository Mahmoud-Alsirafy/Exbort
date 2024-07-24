import React from 'react'
import "./home.css"
import Header from "./Header"
import Service from './Service'
import Category from './Category'
import Produte from './Produte'
import Slick from './Slick'
import Footer from './Footer'




export default function Home({ addToCart, AddFavourite }) {
    return (
        <div className='Home'>
            <Header />
            <Service/>
            <Category/>
            <Produte addToCart={addToCart} AddFavourite={AddFavourite} />
            <Slick />           
        </div>
    )
}
