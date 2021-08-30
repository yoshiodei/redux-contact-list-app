import React from 'react';
import { connect } from 'react-redux';
import { editUser, deleteUser } from './../actions/userAction';
import { Link } from 'react-router-dom';

const UsersList = ({state:contactList, editUser, deleteUser}) => {
    return (
        <div className="card-div">
            {
                contactList.contacts.map(contact => {
                    return (
                        <div className="card" key={contact.id}>
                        <div className="img"></div>
                        <div className="card-details">
                            <p><span className="card-details-title">Name:</span>{contact.name}</p>
                            <p><span className="card-details-title">Email:</span> {contact.email}</p>
                            <p><span className="card-details-title">Phone:</span>{contact.phone}</p>
                        </div>
                        <div className="btn">
                            <Link to={`/edit/${contact.id}`}><p className="edit">Edit</p></Link>
                            <p className="delete" onClick={()=>{ deleteUser(contact.id) }}>Delete</p>
                        </div>
                    </div>
                    );
                })
            }
        </div>
    );
}

const mapStateToProps = (state) => ({state});

const mapDispatchToProps = { editUser, deleteUser };

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
