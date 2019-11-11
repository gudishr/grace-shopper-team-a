import { setProducts, setUsers, _createUser, updateUser, _destroyProduct, setLoginError, setLoginSuccess, setLineItem, createLineItem, destroyLineItem, update, _createOrder, _getOrders } from './actions.js';
import axios from 'axios';
const API = '/api';


const getProducts = ()=> {
  return async(dispatch)=> {
    const products = (await axios.get(`${API}/products`)).data;
    dispatch(setProducts(products))
  }
};

const getUsers = ()=> {
  return async(dispatch)=> {
    const users = (await axios.get(`${API}/users`)).data;
    dispatch(setUsers(users))
  }
};

const createUser = (user)=> {
  return async(dispatch) => {
    const created = (await axios.post('/api/register', user)).data
    dispatch(_createUser(created))
  }
}

const updateUserThunks = (id, payload) => async dispatch => {
  const user = (await axios.put(`/api/users`, {id: id, ...payload})).data;
  dispatch(updateUser(user));
};

const destroyProduct = (product)=> {
 return async(dispatch)=> {
   const destroyed = (await axios.delete(`${API}/products/${product.id}`, product)).data;
   dispatch(_destroyProduct(product));
 }
};

const onLogin = (user) => {
  return async(dispatch)=> {
    await axios.post(`/api/login`, user)
    .then(response => {
      dispatch(setLoginSuccess(response.data));
    })
    .catch(e => {
      return dispatch(setLoginError(e.message));
    })
  }
}

const setLineItemThunks = () => async dispatch => {
  const lineitem = (await axios.get('/api/lineitem')).data;
  dispatch(setLineItem(lineitem));
};

const createLineItemThunks = (payload) => async dispatch => {
  console.log("in thunk", payload)
  const lineitem = (await axios.post('/api/lineitem', payload)).data;
  dispatch(createLineItem(lineitem));
}

const destroyLineItemThunks = (id) => async dispatch => {
  await axios.delete(`/api/lineitem/${id}`);
  dispatch(destroyLineItem(id));
};

const updateThunks = (id, method) => async dispatch => {
  const lineitem = (await axios.put(`/api/lineitem`, {id: id, method})).data;
  dispatch(update(lineitem));
};

const createOrder = (payload) => async dispatch => {
  const order = (await axios.post(`${API}/orders`, payload)).data;
  dispatch(_createOrder(order));
}

const getOrders = ()=> {
  return async(dispatch)=> {
    const orders = (await axios.get(`${API}/orders`)).data;
    dispatch(_getOrders(orders))
  }
};

export { getProducts, getUsers, createUser, updateUserThunks, destroyProduct, onLogin, setLineItemThunks, createLineItemThunks, destroyLineItemThunks, updateThunks, createOrder, getOrders }
