import React from 'react'
import CardGrid from '../components/cards/CardGrid'

function Customers() {
    return (
        <div>
            <div className="container mt-5">
                <figure>
                    <blockquote class="blockquote">
                        <h2>Customers</h2>
                    </blockquote>
                    <figcaption class="blockquote-footer ms-3">
                        All of our <cite title="Source Title">Customers!</cite>
                    </figcaption>
                </figure>
                <CardGrid />
            </div>
        </div>
    )
}

export default Customers
