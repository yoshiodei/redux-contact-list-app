import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from './../actions/addUser';


class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
                        name: "",
                        email: "",
                        phone: ""
                     }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value, id: Math.random().toString()});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        this.setState({
            name: "",
            email: "",
            phone: ""
         })
    }

    render() {
        return (
            <>
            <h2 className="form-title" >Add New Contact</h2>
            <form className="form" onSubmit={this.handleSubmit}> 
                <label><span>Name:</span> <input type="text" required name="name" value={this.state.name} onChange={this.handleChange} /></label>
                <label><span>Email:</span> <input type="email" name="email" value={this.state.email} onChange={this.handleChange} /></label>
                <label><span>Phone:</span> <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="eg. 026-672-7205"  name="phone" value={this.state.phone} onChange={this.handleChange} /></label>
                <button type="submit">Add Contact</button>
            </form>
            </>
        );
    }
}

const mapDispatchToProps = { addUser };

export default connect(null, mapDispatchToProps)(Form);
