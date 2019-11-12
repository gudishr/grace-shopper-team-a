import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer.js';
import { getProducts, getUsers, createUser, updateUserThunks, destroyProduct, onLogin, setLineItemThunks, createLineItemThunks, destroyLineItemThunks, updateThunks, createOrder, getOrders } from './thunks.js';

const store = createStore(reducer,
  applyMiddleware(thunkMiddleware)
);

export default store;
export {getProducts, getUsers, createUser, updateUserThunks, destroyProduct, onLogin, setLineItemThunks, createLineItemThunks, destroyLineItemThunks, updateThunks, createOrder, getOrders }
