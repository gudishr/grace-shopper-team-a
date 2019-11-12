import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts } from './redux/store.js';

const { Component } = React;

class _Products extends Component {
 constructor() {
   super();
 }
 async componentDidMount() {
   await this.props.getProducts()
 }
 render() {
   const {products} = this.props
   return (
     <div id='flex-prod-parent'>
       <ul>
         {
           products.map( product => {
             return (
               <div key={product.id} id='flex-prod-child'>
                  {/* <Link to={`/products/${product.id}`} activeclassname="active"> */}
                  <div>

                  <li key='img'><img src ={product.imageURL}></img></li>

                  {/* </Link> */}
                  <Link to={`/products/${product.id}`} activeclassname="active"><h1 key='name'>{product.name}</h1></Link>
                  <li id='artist'>{product.artist}</li>
                  <li id='genre'>{product.genre}</li>
                  <li id='price'>${product.price}</li>
                  </div>
               </div>
             );
           })
         }
       </ul>
     </div>
   );
 };
};

const mapStateToProps = ({ products }) => ({ products });

const mapDispatchToProps = (dispatch) => {
return {
  getProducts: () => dispatch(getProducts())
 };
};

const Products = connect(mapStateToProps, mapDispatchToProps)(_Products);

export default Products






