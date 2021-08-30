import React from 'react';
import { connect } from 'react-redux';
import { editUser, deleteUser } from './../actions/userAction';

const Card = ({contact, deleteUser}) => {

    const handleDelete = () =>{
        deleteUser(contact.id);
    }

    return (
        <div class="card" key={contact.id}>
            <div class="img"></div>
            <div className="card-details">
                <p><span className="card-details-title">Name:</span>{contact.name}</p>
                <p><span className="card-details-title">Email:</span> {contact.email}</p>
                <p><span className="card-details-title">Phone:</span>{contact.phone}</p>
            </div>
            <div className="btn">
                <p className="edit">Edit</p>
                <p className="delete" onClick={handleDelete}>Delete</p>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({state});

const mapDispatchToProps = { editUser, deleteUser };

export default connect(mapStateToProps, mapDispatchToProps)(Card);

