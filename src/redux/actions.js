//Action Types
const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_USERS = 'SET_USERS';
const CREATE_USER = 'CREATE_USER';
const UPDATE_USER = 'UPDATE_USER';
const DESTROY_PRODUCT = 'DESTROY_PRODUCT';
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS";
const CREATE_LINEITEM = 'CREATE_LINEITEM';
const DESTROY = 'DESTROY';
const SET_LINEITEM ='SET_LINEITEM';
const UPDATE_LINEITEM = 'UPDATE_LINEITEM';
const CREATE_ORDER = 'CREATE_ORDER';
const GET_ORDERS = 'GET_ORDERS';

//Action Creators

const setProducts = (products)=> ({ type: SET_PRODUCTS, products });
const setUsers = (users)=> ({ type: SET_USERS, users });
const _createUser = (user)=> ({ type: CREATE_USER, user });
const updateUser = (user) => ({ type: UPDATE_USER, user })
const _destroyProduct = (product)=> ({ type: DESTROY_PRODUCT, product});
const setLoginError = (err) => ({ type: SET_LOGIN_ERROR, err });
const setLoginSuccess = (user) => ({ type: SET_LOGIN_SUCCESS, user });
const setLineItem = lineitem => ({ type: SET_LINEITEM, lineitem });
const createLineItem = lineitem => ({ type: CREATE_LINEITEM, lineitem })
const destroyLineItem = lineitem => ({ type: DESTROY, lineitem });
const update = lineitem => ({ type: UPDATE_LINEITEM, lineitem });
const _createOrder = (order) => ({ type: CREATE_ORDER, order });
const _getOrders = (orders) => ({ type: GET_ORDERS, orders });

export { setProducts, setUsers, _createUser, updateUser, _destroyProduct, setLoginError, setLoginSuccess, setLineItem, createLineItem, destroyLineItem, update, _createOrder, _getOrders, SET_PRODUCTS, DESTROY_PRODUCT, SET_USERS, CREATE_USER, UPDATE_USER, SET_LOGIN_SUCCESS, SET_LOGIN_ERROR, CREATE_LINEITEM, DESTROY, UPDATE_LINEITEM, SET_LINEITEM, CREATE_ORDER, GET_ORDERS
};
