import { combineReducers } from 'redux';
import { SET_PRODUCTS, DESTROY_PRODUCT, SET_USERS, CREATE_USER, UPDATE_USER, SET_LOGIN_SUCCESS, SET_LOGIN_ERROR, SET_LINEITEM, CREATE_LINEITEM, DESTROY, CREATE_ORDER, GET_ORDERS, UPDATE_LINEITEM } from './actions.js';

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
  if (action.type === UPDATE_USER) {
    return state.map(user => user.id === action.user.id ? action.user : user)
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
lineitem: (state = [], action) => {
  switch (action.type) {
    case SET_LINEITEM:
        return action.lineitem;
    case CREATE_LINEITEM:
        return [...state, action.lineitem];
    case DESTROY:
        return state.filter(lineitem => lineitem.id !== action.lineitem);
    case UPDATE_LINEITEM:
        return state.map(lineitem => lineitem.id === action.lineitem.id ? action.lineitem : lineitem)
    default:
        return state
  }
},
orders: (state = [], action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return [...state, action.order];
  }
  if(action.type === GET_ORDERS) {
    return action.orders;
  }
  return state;
}
});

export default reducer;
