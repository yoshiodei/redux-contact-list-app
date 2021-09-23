export const addUser = (newUser) => {
    return ( dispatch, state, { getFirestore, getFirebase }) => {
        getFirestore()
        .collection('contacts')
        .add(newUser)
        .then(()=>{
            dispatch({ type: "ADD_USER", payload: newUser });
        })
    }
}

export const getAllusers =()=>{
    return ( dispatch, state, {getFirestore})=>{
    getFirestore().collection('contacts').onSnapshot((snapshot)=>{
    let users =[];
    snapshot.forEach((doc)=>{
        users.push(doc.data())
        })
      
        dispatch({
            type: 'SET_ALL_USERS',
            payload: users
        })
    })
    };
    
    };

