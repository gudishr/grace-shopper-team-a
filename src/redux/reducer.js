import { combineReducers } from 'redux';
import {SET_PRODUCTS, DESTROY_PRODUCT, SET_USERS, CREATE_USER, SET_LOGIN_SUCCESS, SET_LOGIN_ERROR, SET_CART, CREATE_CART, DESTROY, UPDATE_CART, CREATE_LINE_ITEM} from './actions.js';

const reducer = combineReducers({
  products: (state = [], action)=> {
    if(action.type === SET_PRODUCTS) {
      return action.products;
    }
    if(action.type === DESTROY_PRODUCT) {
      return [...state].filter( product => product.id !== action.product.id)
    }
    return state;
  },
  user: (state = [], action)=> {
    if(action.type === SET_USERS) {
      return action.users
    }
    if (action.type === CREATE_USER) {
    return [...state, action.user];
  }
  return state;
},
login: (state = [], action)=> {
  if(action.type === SET_LOGIN_SUCCESS) {
    return { ...state, email: '', password: '', err: null, user: action.user };
  }
  if(action.type === SET_LOGIN_ERROR) {
    return { ...state, email: '', password: '', user: null, err: action.err, };
  }
  return state;
},
cart: (state = [], action) => {
  switch (action.type) {
    case SET_CART:
        return action.cart;
    case CREATE_CART:
        return [...state, action.cart];
    case DESTROY:
        return state.filter(cart => cart.id !== action.cart);
    case UPDATE_CART:
        return state.map(cart => cart.id === action.cart.id ? action.cart : cart)
    default:
        return state
  }
},
lineitem: (state = [], action) => {
  switch (action.type) {
    case CREATE_LINE_ITEM:
      return [...state, action.cart];
  }
  return state;
}
});

export default reducer;
