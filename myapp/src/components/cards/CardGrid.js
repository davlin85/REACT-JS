import React, { useState, useEffect } from 'react'
import Card from './Card'

function CardGrid() {

    let [customers, setCustomers] = useState ([])

    useEffect(async () => {
        async function fetchData() {
        const res = await fetch("https://ecexam-webapi.azurewebsites.net/api/Customers/")
        const data = (await res.json())
        setCustomers(data)
    }
        fetchData();
    },[])

    return (
        <div className="row row-cols-1 row-cols-md-4 g-5 mt-2 mb-5">
            
            {
            customers.map(customer =>( 
                <div>
                <Card item={customer} />
                </div>
            ))
            }

        </div>
    )
}

export default CardGrid

