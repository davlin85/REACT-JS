import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import profile from '../img/blank-profile.png'

function CustomersDetails() {

    const { id } = useParams()
    const [customer, setCustomer] = useState({})

    useEffect(async () => {
        const res = await fetch(`https://ecexam-webapi.azurewebsites.net/api/Customers/${id}`)
        setCustomer(await res.json())
    }, [])

    return (

<div className="container mt-5">
<figure>
    <blockquote className="blockquote">
        <h2>{customer.firstName} {customer.lastName}</h2>
    </blockquote>
    <figcaption className="blockquote-footer ms-3">
       <cite title="Source Title">{customer.email}</cite>
    </figcaption>
</figure>

<div className="row row-cols-1 row-cols-md-4 g-4 mt-2 mb-5">
<div className="col">
            <div className="card shadow">
                <img src={profile} className="card-img-top" alt="..." />
                <div className="card-body">
                        <h3 className="card-title">{customer.id}</h3>
                        <h5 className="card-title">{customer.firstName} {customer.lastName}</h5>
                </div>
                <div className="card-footer">
                    <small className="text-danger">{customer.email}</small>
                </div>
            </div>
        </div>
       
</div>
</div>
    )
    
}

export default CustomersDetails
