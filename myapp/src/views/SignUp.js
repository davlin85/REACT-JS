import React, { Component } from 'react'
import axios from 'axios'
import ScriptTag from 'react-script-tag'


class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://ecexam-webapi.azurewebsites.net/api/Customers/', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

            {
                window.location.href="/thankyou";
            }
    } 

    render() {
        const { firstName, lastName, email } = this.state
        return (
            <div>
            <ScriptTag isHydrating={false} type="text/javascript" 
            src="Script.js" />
            <div className="container">
                <div className="row mt-5">
                    <div className="col col-lg-4">
                        <figure>
                        <blockquote className="blockquote">
                            <h2>Sign Up</h2>
                        </blockquote>
                        <figcaption className="blockquote-footer ms-3">
                            Sign Up to be a <cite title="Source Title">Customer!</cite>
                        </figcaption>
                        </figure>
                        <form onSubmit={this.submitHandler}>
                            <div className="form-floating mb-4 mt-5">
                                <input id="contactForm-firstName" name="firstName" value={firstName} onChange={this.changeHandler} required type="text" className="form-control needs-validation shadow-sm" placeholder="firstName" />
                                <label htmlFor="contactForm-firstName">First name:</label>
                                <span id="contactForm-firstName-error" className="invalid-feedback text-danger ms-3 mt-4 warning">First name must consist of at least 2 letters</span>
                            </div>
                            <div className="form-floating mb-4">
                                <input id="contactForm-lastName" name="lastName" value={lastName} onChange={this.changeHandler} required type="text" className="form-control needs-validation shadow-sm" placeholder="lastName" />
                                <label htmlFor="contactForm-firstName">Last name:</label>
                                <span id="contactForm-lastName-error" className="invalid-feedback text-danger ms-3 mt-4 warning">Last name must consist of at least 2 letters</span>
                            </div>
                            <div className="form-floating mb-4">
                                <input id="contactForm-email" name="email" value={email} onChange={this.changeHandler} required type="email" className="form-control needs-validation shadow-sm" placeholder="email" />
                                <label htmlFor="contactForm-firstName">E-mail:</label>
                                <span id="contactForm-email-error" className="invalid-feedback text-danger ms-3 mt-4 warning">E-mail must be valid</span>
                            </div>
                            <button id="contactForm-submit" type="submit" onClick={this.onSubmit} className="btn btn-secondary bg-gradient shadow-lg btn-lg mt-3">Sign Up!</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default SignUp;