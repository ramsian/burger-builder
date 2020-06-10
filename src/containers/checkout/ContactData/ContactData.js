import React, { Component } from "react";
import classes from './ContactData.module.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render() {
        return(
            <div className={classes.ContactData}> 
                <h4>Enter your contact data</h4>
                <form>
                    <input type="text" name="name" placeholder="Your name"></input>
                    <input type="text" name="email" placeholder="Your E-Mail"></input>
                    <input type="text" name="street" placeholder="Your Street"></input>
                </form>
            </div>
        )
    }
};
export default ContactData;