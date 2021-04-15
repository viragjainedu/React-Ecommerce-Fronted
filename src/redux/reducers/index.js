import { combineReducers } from 'redux';

const initProducts = {
    numberCart:0,
    cart:[],
    price:[],
    _products:[],
}

function cartItems(state = initProducts , action){
    
    console.log(state)
    console.log(action.payload);

    switch(action.type){
        case 'ADD_PRODUCT':
            return{
                ...state,   
                _products: state.cart.push(action.payload.product),
                _products: state.price.push(action.payload.price),
                numberCart: state.cart.length
            }
        case 'REMOVE_PRODUCT':
            return{
                ...state,   
                _products: state.cart.splice(action.payload.index,1),
                _products: state.price.splice(action.payload.index,1),
                numberCart: state.cart.length
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    _cartItems:cartItems,
});

export default rootReducer;