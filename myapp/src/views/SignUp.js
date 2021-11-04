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
        axios.post('https://test.se', this.state)
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

//'https://ecexam-webapi.azurewebsites.net/api/Customers/'//

    render() {
        const { firstName, lastName, email } = this.state
        return (
            <div>
            <ScriptTag isHydrating={false} type="text/javascript" 
            src="Script.js" />
            <div class="container">
                <div class="row mt-5">
                    <div class="col col-lg-4">
                        <figure>
                        <blockquote class="blockquote">
                            <h2>Sign Up</h2>
                        </blockquote>
                        <figcaption class="blockquote-footer ms-3">
                            Sign Up to be a <cite title="Source Title">Customer!</cite>
                        </figcaption>
                        </figure>
                        <form onSubmit={this.submitHandler}>
                            <div class="form-floating mb-4 mt-5">
                                <input id="contactForm-firstName" name="firstName" value={firstName} onChange={this.changeHandler} required type="text" class="form-control needs-validation shadow-sm" placeholder="firstName" />
                                <label for="contactForm-firstName">First name:</label>
                                <span id="contactForm-firstName-error" class="invalid-feedback text-danger ms-3 mt-4 warning">First name must consist of at least 2 letters</span>
                            </div>
                            <div class="form-floating mb-4">
                                <input id="contactForm-lastName" name="lastName" value={lastName} onChange={this.changeHandler} required type="text" class="form-control needs-validation shadow-sm" placeholder="lastName" />
                                <label for="contactForm-lastName">Last name:</label>
                                <span id="contactForm-lastName-error" class="invalid-feedback text-danger ms-3 mt-4 warning">Last name must consist of at least 2 letters</span>
                            </div>
                            <div class="form-floating mb-4">
                                <input id="contactForm-email" name="email" value={email} onChange={this.changeHandler} required type="email" class="form-control needs-validation shadow-sm" placeholder="email" />
                                <label for="contactForm-email">E-mail:</label>
                                <span id="contactForm-email-error" class="invalid-feedback text-danger ms-3 mt-4 warning">E-mail must be valid</span>
                            </div>
                            <button id="contactForm-submit" type="submit" onClick={this.onSubmit} class="btn btn-secondary shadow-lg btn-lg mt-3">Sign Up!</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default SignUp;