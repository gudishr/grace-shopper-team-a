import { setProducts, setUsers, _createUser, _destroyProduct, setLoginError, setLoginSuccess,setCart, createCart, destroyCart, _createLineItem, update} from './actions.js';
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

const setCartThunks = () => async dispatch => {
  const cart = (await axios.get('/api/cart')).data;
  dispatch(setCart(cart));
};

const createCartThunks = (payload) => async dispatch => {
  const cart = (await axios.post('/api/cart', payload)).data;
  dispatch(createCart(cart));
}

const destroyCartThunks = (id) => async dispatch => {
  await axios.delete(`/api/cart/${id}`);
  dispatch(destroyCart(id));
};

const createLineItem = ()=> {
  return async(dispatch)=> {
    const created = (await axios.post(`${API}/cart`, lineitem)).data;
    dispatch(_createLineItem(created));
  }
};

const updateThunks = (id, method) => async dispatch => {
  const cart = (await axios.put(`/api/cart`, {id: id, method})).data;
  dispatch(update(cart));
};

export { getProducts, getUsers, createUser, destroyProduct, onLogin, setCartThunks, createCartThunks, destroyCartThunks, updateThunks, createLineItem }
