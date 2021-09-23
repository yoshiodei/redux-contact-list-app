import { EDIT_USER, DELETE_USER, ADD_USER, getAllusers } from './../actions/userAction';

let initialState = {
    contacts : [
      {
        name: "Yoshi Odei",
        email: "yoshiodei@email.com",
        phone: "020-151-7172",
        id: 1
      },
      {
        name: "London Donavan",
        email: "london@email.com",
        phone: "020-157-7172",
        id: 2
      },
      
    ]
  };

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_USER":
            return {...state.contacts, contacts:[...state.contacts, action.payload]};
        case "EDIT_USER":
            let editedUser = state.contacts.map((contact)=>(contact.id === action.payload.id ? action.payload : contact))
            return { ...state, contacts : editedUser};
        case DELETE_USER:
            let newList = state.contacts.filter((contact) => contact.id !== action.payload );
            return ({...state, contacts : [ ...newList ] });
        case 'SET_ALL_USERS':
            return {...state, contacts: action.payload};    
        default:
            return state;        
    }
}