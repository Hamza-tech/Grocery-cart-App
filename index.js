const redux = require('redux');
const createStore=redux.createStore;


const initialState = {
    numberOfBooks: 10
}



function buyBook(){
    return {
        type : "Buy_Book",
        info : "my First Redux Code"
    }
}

// Reducer working
// (prevState, action) =>newState

const Reducer = (state= initialState, action) =>{
    switch(action.type){
        case "Buy_Book ":return{
            ...state,
            numberOfBooks:state.numberOfBooks-1 
        }
        default : return state ;
    }
}

const store = createStore(Reducer);
console.log("initial State", store.getState());
const unsubscribe = store.subscribe(()=> { console.log('Updated state value', store.getState())});
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
unsubscribe();