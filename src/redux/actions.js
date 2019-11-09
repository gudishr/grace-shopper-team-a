//Action Types
const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_USERS = 'SET_USERS';
const CREATE_USER = 'CREATE_USER';
const DESTROY_PRODUCT = 'DESTROY_PRODUCT';
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR"
const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS"
const SET_CART = 'SET_CART';
const CREATE_CART = 'CREATE_CART';
const DESTROY = 'DESTROY';
const SET_LINEITEM ='SET_LINEITEM';
const CREATE_LINE_ITEM ='CREATE_LINE_ITEM';
const UPDATE_CART = 'UPDATE_CART';

const CREATE_ORDER = 'CREATE_ORDER';

//Action Creators

const setProducts = (products)=> ({ type: SET_PRODUCTS, products });
const setUsers = (users)=> ({ type: SET_USERS, users });
const _createUser = (user)=> ({ type: CREATE_USER, user });
const _destroyProduct = (product)=> ({ type: DESTROY_PRODUCT, product});
const setLoginError = (err) => ({ type: SET_LOGIN_ERROR, err });
const setLoginSuccess = (user) => ({ type: SET_LOGIN_SUCCESS, user });
const setCart = cart => ({ type: SET_CART, cart });
const createCart = cart => ({ type: CREATE_CART, cart })
const destroyCart = cart => ({ type: DESTROY, cart });
const _createLineItem = (lineitem) => ({ type: CREATE_LINE_ITEM, lineitem})
const update = cart => ({ type: UPDATE_CART, cart });

const _createOrder = (order) => ({ type: CREATE_ORDER, order });

export { setProducts, setUsers, _createUser, _destroyProduct, setLoginError, setLoginSuccess,setCart, createCart, destroyCart, _createLineItem, update, _createOrder, SET_PRODUCTS, DESTROY_PRODUCT, SET_USERS, CREATE_USER, SET_LOGIN_SUCCESS, SET_LOGIN_ERROR, SET_CART, CREATE_CART, DESTROY, UPDATE_CART, CREATE_LINE_ITEM, SET_LINEITEM, CREATE_ORDER
};
