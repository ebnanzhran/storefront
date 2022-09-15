import * as React from 'react';
import Card from '@mui/material/Card';
import { CardHeader } from '@mui/material';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { addToCart } from '../../store/Cart';
import { removeFromCart } from '../../store/Cart';
import { connect } from 'react-redux';
import './products.scss'

function Products(props) {
  const style = { width: '200px', height: '200px' }

  const handleDelete = (item) => {
    removeFromCart(item);
  }

  return (
    <>
      <div className="cart-container">
        <section className="section-cart">

          <Button data-testid='cart' color="inherit"> 🛒Cart({props.cart.totalCartItems})</Button>

          {
            props.cart.cartItems.map(cartItem => {
              return (
                <>
                  <button onClick={handleDelete(cartItem.id)}>X</button>
                  <p className='items'>
                    {cartItem.name}: {cartItem.inCart} pc(s)
                  </p>
                </>
              );
            })

          }
        </section>
        <div className="div">
          <h1>
            {props.categories.activeCategory.toUpperCase()}
          </h1>
        </div>
        <section className="section1">

          <div className="ddd">

            <div className="product-list" style={{ backgroundColor: '#968e8e' }}>
              {
                props.products.map((product) => (

                  product.category === props.categories.activeCategory ?
                    <Card key={product.name} className="root" style={{ backgroundColor: '#968e8e' }}>
                      <CardHeader
                        avatar={
                          <Avatar aria-label="recipe" >
                            {product.category[0].toUpperCase()}
                          </Avatar>
                        }
                        title={product.name}
                        subheader={product.category}
                      />

                      <img className="cardMedia" src={product.image} style={style} alt="images" ></img>
                      <CardHeader
                        title={'Price  ' + product.price + '$'}
                        subheader={'In Stock  ' + product.inStock + '  Pcs'}
                      />
                      <Button
                        data-testid='button'
                        variant="contained"
                        color="primary"
                        style={{ width: 100 + '%' }}
                        onClick={() => {
                          props.addToCart(product);
                        }}
                      >
                        ADD TO CART
                      </Button>

                    </Card>
                    :
                    null
                ))
              }
            </div>
          </div>
        </section>
      </div>
    </>
  );
}


const mapStateToProps = (state) => {
  return { products: state.products, categories: state.categories, cart: state.cart };
};

const mapDispatchToProps = { addToCart };


export default connect(mapStateToProps, mapDispatchToProps)(Products);