import React from 'react'
import profile from '../../img/blank-profile.png'


function Card({ item }) {
    return (
        <div className="col">
            <div className="card shadow">
                <img src={profile} className="card-img-top" alt="..." />
                <div className="card-body">
                        <h3 className="card-title">{item.id}</h3>
                        <h5 className="card-title">{item.firstName} {item.lastName}</h5>
                </div>
                <div class="card-footer">
                    <small className="text-danger">{item.email}</small>
                </div>
            </div>
        </div>
    )
}

export default Card

