import React from 'react';
import { useParams } from 'react-router';
import EditForm from './EditForm';
import { useHistory } from 'react-router';

const EditUser = () => {
     
    const history = useHistory();

    const { id } = useParams();

    return (
        <div className="main">
            <EditForm id={id} history={history}/>
        </div>
    );
}



export default EditUser;
