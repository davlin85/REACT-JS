import React from 'react'
import CardGrid from '../components/cards/CardGrid'

function Customers() {
    return (
      
            <div className="container mt-5">
                <figure>
                    <blockquote className="blockquote">
                        <h2>Customers</h2>
                    </blockquote>
                    <figcaption className="blockquote-footer ms-3">
                        All of our <cite title="Source Title">Customers!</cite>
                    </figcaption>
                </figure>
                <CardGrid />
            </div>
    )
}

export default Customers
