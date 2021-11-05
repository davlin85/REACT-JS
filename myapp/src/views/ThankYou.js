import React from 'react'
import CardGrid2 from '../components/cards/CardGrid2'

function Customers() {
    return (
      
            <div className="container mt-5">
                <figure className="text-center">
                    <blockquote className="blockquote">
                        <h1>Thank You!</h1>
                    </blockquote>
                    <figcaption className="blockquote-footer ms-3 header mb-5">
                        And Welcome to <cite title="Source Title">React App!</cite>
                    </figcaption>
                </figure>
                <CardGrid2 />
            </div>
    )
}

export default Customers
