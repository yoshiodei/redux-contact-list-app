export const EDIT_USER = "EDIT_USER";
export const DELETE_USER = "DELETE_USER";
export const ADD_USER = "ADD_USER";


export const editUser = (newUser) => {
    return {
                type: EDIT_USER,
                payload: newUser
           }
}

export const deleteUser = (id) => {
    return {
                type: DELETE_USER,
                payload: id
           }
}
