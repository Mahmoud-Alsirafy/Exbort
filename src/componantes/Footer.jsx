import React from 'react'
import "./footer.css"
import pay from "./../img/payments.png"

function Footer() {
    return (
        <footer>

            <div className="container p-5 d-flex gap-5  ">

                <div className="one">
                    <h4>GET IN TOUCH</h4>
                    <p>
                        No dolore ipsum accusam no lorem. Invidunt sed clita kasd
                        clita et et dolor sed dolor. Rebum tempor no vero est magna amet
                        no
                    </p>

                    <div className='d-flex-column icons-1 align-items-center'>
                        <div><i className="fa-solid fa-phone me-3 text-warning"></i>+012 345 67890</div>
                        <div className='my-2'><i className="fa-solid fa-envelope me-3 text-warning"></i>info@example.com</div>
                        <div><i className="fa-solid fa-location-dot me-3 text-warning"></i>123 Street, New York, USA</div>
                    </div>
                </div>
                <div className="tow">
                    <h4>QUICK SHOP</h4>


                    <div className='d-flex flex-column icons-2 align-items-left gap-2'>
                        <a href="#"><span><i className="fa-solid fa-chevron-right me-2"></i></span>Home</a>
                        <a href="#"><span><i className="fa-solid fa-chevron-right me-2"></i></span>Our Shop</a>
                        <a href="#"><span><i className="fa-solid fa-chevron-right me-2"></i></span>Shop Detali</a>
                        <a href="#"><span><i className="fa-solid fa-chevron-right me-2"></i></span>Shoping Cart</a>
                        <a href="#"><span><i className="fa-solid fa-chevron-right me-2"></i></span>Checkou</a>
                        <a href="#"><span><i className="fa-solid fa-chevron-right me-2"></i></span>Contact Us</a>
                    </div>
                </div>
                <div className="tow">
                    <h4>MY ACCOUNT</h4>


                    <div className='d-flex flex-column icons-2 align-items-left gap-2'>
                        <a href="#"><span><i className="fa-solid fa-chevron-right me-2"></i></span>Home</a>
                        <a href="#"><span><i className="fa-solid fa-chevron-right me-2"></i></span>Our Shop</a>
                        <a href="#"><span><i className="fa-solid fa-chevron-right me-2"></i></span>Shop Detali</a>
                        <a href="#"><span><i className="fa-solid fa-chevron-right me-2"></i></span>Shoping Cart</a>
                        <a href="#"><span><i className="fa-solid fa-chevron-right me-2"></i></span>Checkou</a>
                        <a href="#"><span><i className="fa-solid fa-chevron-right me-2"></i></span>Contact Us</a>
                    </div>
                </div>
                <div className="there">
                    <h4>NEWSLETTER</h4>

                    <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                    <div>
                        <input type="text" placeholder='Enter Your Address' />
                        <button>Sing Up</button>
                    </div>
                    <h6 className='my-3'>FOLLOW US</h6>
                    <div className='d-flex gap-5'>
                        <div className='sohial'><i className="fa-brands fa-twitter"></i></div>
                        <div className='sohial'><i className="fa-brands fa-instagram"></i></div>
                        <div className='sohial'><i className="fa-brands fa-facebook"></i></div>
                    </div>
                </div>

            </div>
            <hr className='container' />

            <div className='footer  container'>
                <div><p>© <span>Domain</span>. All Rights Reserved. Designed by <span>HTML Codex</span></p>
                </div>
                <div>
                    <img src={pay} alt="" />
                </div>
                
            </div>


        </footer>
    )
}

export default Footer
