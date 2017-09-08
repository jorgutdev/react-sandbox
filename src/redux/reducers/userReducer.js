
const initialState = {
    currentUser : null,
    isLogged: false,
};

function updateObject(oldObject, newValues) {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    return Object.assign({}, oldObject, newValues);
}


function logginUser(state,action){
    console.log('wow')
}


export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case 'LOGGIN_USER' : return logginUser(state, action);
        default : return state;
    }
}