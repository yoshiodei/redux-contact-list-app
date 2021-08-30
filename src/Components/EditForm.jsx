import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editUser } from './../actions/editUser';


class EditForm extends Component {

    constructor(props){
        super(props);
        
        let [contact] = this.props.contacts.filter((contact) => contact.id == this.props.id);
        
        this.state = {
                        name: contact.name,
                        email: contact.email,
                        phone: contact.phone,
                        id: contact.id
                     }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editUser(this.state);
        this.setState({
            name: "",
            email: "",
            phone: ""
         });
         this.props.history.push("/");
    }

    render() {
        return (
            <>
            <h2 className="form-title" >Edit User</h2>
            <form className="form" onSubmit={this.handleSubmit}> 
                <label><span>Name:</span> <input type="text" required name="name" value={this.state.name} onChange={this.handleChange} /></label>
                <label><span>Email:</span> <input type="email" name="email" value={this.state.email} onChange={this.handleChange} /></label>
                <label><span>Phone:</span> <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="eg. 026-672-7205"  name="phone" value={this.state.phone} onChange={this.handleChange} /></label>
                <button type="submit">Edit Contact</button>
            </form>
            </>
        );
    }
}

const mapStateToProps = (state) => ({ contacts:state.contacts });

const mapDispatchToProps = { editUser };

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
