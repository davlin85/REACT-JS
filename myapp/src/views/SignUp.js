import React, { Component } from 'react'
import axios from 'axios'

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
    }


    render() {
        const { firstName, lastName, email } = this.state
        return (
            <div class="container">
                <div class="row mt-5">
                    <div class="col col-lg-4">
                        <figure>
                        <blockquote class="blockquote">
                            <p><h2>Sign Up</h2></p>
                        </blockquote>
                        <figcaption class="blockquote-footer ms-3">
                            Sign Up to be a <cite title="Source Title">Customer!</cite>
                        </figcaption>
                        </figure>
                        <form onSubmit={this.submitHandler}>
                            <div class="form-floating mb-4 mt-5">
                                <input id="contactForm-firstName" name="firstName" value={firstName} onChange={this.changeHandler} required type="text" class="form-control needs-validation shadow-sm" placeholder="firstName" />
                                <label for="contactForm-firstName">First name:</label>
                                <span id="contactForm-firstName-error" class="invalid-feedback text-danger ms-3 mt-4">Förnamnet måste bestå av minst 2 bokstäver</span>
                            </div>
                            <div class="form-floating mb-4">
                                <input id="contactForm-lastName" name="lastName" value={lastName} onChange={this.changeHandler} required type="text" class="form-control needs-validation shadow-sm" placeholder="lastName" />
                                <label for="contactForm-lastName">Last name:</label>
                                <span id="contactForm-lastName-error" class="invalid-feedback text-danger ms-3 mt-4">Efternamnet måste bestå av minst 2 bokstäver</span>
                            </div>
                            <div class="form-floating mb-4">
                                <input id="contactForm-email" name="email" value={email} onChange={this.changeHandler} required type="email" class="form-control needs-validation shadow-sm" placeholder="email" />
                                <label for="contactForm-email">E-mail:</label>
                                <span id="contactForm-email-error" class="invalid-feedback text-danger ms-3 mt-4">E-postadressen måste vara giltlig</span>
                            </div>
                            <button id="contactForm-submit" type="submit" class="btn btn-secondary shadow-lg btn mt-3">Sign Up!</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp
