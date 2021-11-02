import React from 'react'
import profile from '../../img/blank-profile.svg'

function Card({ item }) {
    return (
        <div className="col mb-3">
            <div className="card shadow">
                <img src={profile} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div>
                        <h3 className="card-title">{item.id}</h3>
                        <h5 className="card-title">{item.firstName} {item.lastName}</h5>
                        <p className="card-text small text-danger">{item.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

/*{
    "id": 0,
    "firstName": "string",
    "lastName": "string",
    "email": "string"
  }*/