import { createStore, applyMiddleware, compose } from 'redux';
import { userReducer } from './../reducers/userReducer';
import fbConfiq from './../firebase/confiq';
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";

const store = createStore(userReducer, compose(applyMiddleware(thunk.withExtraArgument({
    getFirebase, getFirestore
})),
    reactReduxFirebase(fbConfiq),
    reduxFirestore(fbConfiq)
))

export default store;