import React, { useState, useEffect } from 'react'
import Card from './Card'

function CardGrid2() {

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
        <div className="row row-cols-1 row-cols-md-3 g-3 mt-2 mb-5 justify-content-center">
            
            {
            customers.slice(-1).map(customer =>( 
                <Card key="user.id" item={customer} />
            ))
            }

        </div>
    )
}

export default CardGrid2

