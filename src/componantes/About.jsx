import React from 'react'
import "./about.css"
import img from "./../img/full-length-portrait-happy-family.jpg"
import { Link, Outlet } from 'react-router-dom'

export default function About() {
    return (
        <section className='about'>
            
            <h1>About <span>Us</span></h1>
            

            <div className="container About">
                <div><img src={img} className='about-img' /></div>

                <div className='about-details'>
                    <b>Welcome To <span>oninin</span></b>

                    <p className='text-muted'> <span>oninin</span> Shop is Best online Shopping Company Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quisquam expedita dolore omnis cumque ipsa vel nam non
                    necessitatibus eius, molestiae officiis, rem et distinctio? Nisi voluptates amet in
                        aliquam sapiente.</p>
                    <Link to="shop" className='about-btn'>Shop Now</Link>
                </div>
            </div>
            
        
        
        
        </section>




        
    )
}
