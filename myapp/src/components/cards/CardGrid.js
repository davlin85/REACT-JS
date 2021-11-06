import React, { useState, useEffect } from 'react'
import Card from './Card'
import {Link} from 'react-router-dom'

function CardGrid() {

    let [customers, setCustomers] = useState ([])

    useEffect( () => {
        async function fetchData(async) {
        const res = await fetch("https://ecexam-webapi.azurewebsites.net/api/Customers/")
        const data = (await res.json())
        setCustomers(data)
    }
        fetchData();
    },[])

    return (
        
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-2 mb-5">
            {
            customers.slice(0).reverse().map(customer =>( 
                <Link to={`customers/customer/${customer.id}`}><Card key={customer.id} item={customer} /></Link>
            ))
            }

        </div>
    )
}

export default CardGrid

