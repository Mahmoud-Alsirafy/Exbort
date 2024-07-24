import React, { useEffect, useState } from 'react'
import "./fake.css"
import imge from "./../img/cat-2.jpg"
import { useParams } from 'react-router-dom'
import axios from 'axios'
export default function FackDummy() {

    let { DummyId } = useParams()


   

    const url = `https://dummyjson.com/products/${DummyId}`;


    

    const [DummyDetalis, setDummyDetalis] = useState({})

    

    async function GetDummyDetalis() {
        let { data } = await axios.get(url)
        setDummyDetalis(data)
    }
    useEffect(() => {
        GetDummyDetalis()
    }, [])

    return (
        <section>
            <h2>Dummy Product</h2>


            <div className="Fake d-flex">
                <div>
                    <img src={ DummyDetalis.thumbnail} alt="" className='imgr' />
                </div>
                <div>
                    <h3 className='fw-bod'>{ DummyDetalis.title}</h3>

                    <h3 className='text-warning my-3'>{DummyDetalis.category}</h3>

                    <p className='text-muted' >{DummyDetalis.description}
                    </p>

                    <h2 className='text-warning'>Price ${DummyDetalis.price}</h2>

                    <button className='btn btn-outline-warning'>Add To Cart</button>

                </div>
            </div>


        </section>
    )
}
