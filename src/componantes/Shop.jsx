import React from 'react'
import "./shop.css"
import Produte from './Produte'
import "./produte.css"

export default function Shop({ addToCart , AddFavourite  }) {
    return (
        <div>
            <Produte AddFavourite={AddFavourite} addToCart={addToCart} />
        </div>
    )
}
