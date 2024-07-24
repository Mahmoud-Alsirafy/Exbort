import React, { useEffect, useState } from 'react'
import "./fake.css"
import imge from "./../img/cat-2.jpg"
import { useParams } from 'react-router-dom'
import axios from 'axios'
export default function FakeDetalis() {

    let { productId } = useParams()


    const url = `https://fakestoreapi.com/products/${productId}`;

    


    const [FakeDetalis, setFakeDetalis] = useState({})
    
 

   async function GetProductDetalis() {
       let {data} = await axios.get(url)
       setFakeDetalis(data)
    }

  
    useEffect(() => {
        GetProductDetalis()

    } , [])

        return (
        <section>
            <h2>Fake Product</h2>


            <div className="Fake d-flex">
                <div>
                        <img src={FakeDetalis.image } alt="" className='imgr' />
                </div>
                <div>
                        <h3 className='fw-bod'>{FakeDetalis.title }</h3>

                        <h3 className='text-warning my-3'>{FakeDetalis.category }</h3>

                        <p className='text-muted p' >{FakeDetalis.description}</p>

                        <h2 className='text-warning'>Price ${FakeDetalis.price }</h2>

                    <button className='btn btn-outline-warning'>Add To Cart</button>

                </div>
            </div>


        </section>
    )
}
