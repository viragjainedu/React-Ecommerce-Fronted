import React from 'react';
import {connect} from 'react-redux';
import removeItems from '../redux/actions/removeItems';



class Cart extends React.Component{
  constructor(props){
    super(props);
  }

    render(){
        return(

            
      <div id="container">
      {/* page-banner-section 
          ================================================== */}
      <section className="page-banner-section">
        <div className="container">
          <h1>Cart</h1>
          <ul className="page-depth">
            <li><a href="/">Studiare</a></li>
            <li><a href="Cart">Cart</a></li>
          </ul>
        </div>
      </section>
      {/* End page-banner-section */}
      {/* cart-section 
          ================================================== */}
      <section className="cart-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cart-box">
                <table className="shop_table table-responsive">
                  <thead>
                    <tr>
                      <th className="product-remove">&nbsp;</th>
                      <th className="product-thumbnail">&nbsp;</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-subtotal">Total</th>
                    </tr>
                  </thead>                  
                  <tbody>
                    
                        {

                          this.props.newState.cart.map(
                            (item,index) => 
                            <tr>
                          <td className="product-remove">
                            <a href="#" className="remove" onClick={() => {this.props.removeItemHandler({index: index})}}>×</a>  
                          </td>
    
                          <td className="product-thumbnail">
                            <a href="#"><img src="./assets/upload/courses/thumb1.jpg" alt="" /></a>
                          </td>
                          <td className="product-name">
                            <a href="#">{this.props.newState.cart[index]}</a>
                          </td>
                          <td className="product-price">
                            {this.props.newState.price[index]}
                          </td>
                          <td className="product-subtotal">{this.props.newState.price[index]}</td>
                          </tr>
                  
                            )
                        }
                      
                    
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="widget cart-widget">
                  <h2>Cart Totals</h2>
                  <table>
                    <tbody>
                      <tr className="cart-subtotal">
                        <th>Subtotal</th>
                          Rs. {
                            this.props.newState.price.reduce(function(tot, arr) { 
                              // return the sum with previous value
                              return(tot + arr)
                            
                              // set initial value as 0
                            },0)
                          }
                      </tr>
                      <tr className="cart-subtotal">
                        <th>With GST</th>
                          Rs. {
                            this.props.newState.price.reduce(function(tot, arr) { 
                              // return the sum with previous value
                              return(tot + arr)
                            
                              // set initial value as 0
                            },0)*0.18 + 
                              this.props.newState.price.reduce(function(tot, arr) { 
                                // return the sum with previous value
                                return(tot + arr)
                              
                                // set initial value as 0
                              },0)
                          }
                      </tr>
                      
                      
                    </tbody>
                  </table>
                  <a href="/Checkout" className="checkout-button">Proceed to checkout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End cart section */}
    </div>
    
        )
    }
}

const mapStateToProps = state => {
  return { 
      newState : state._cartItems  
  }
}

const mapDispatchToProps = dispatch => {
  return { 
      removeItemHandler:(item)=>dispatch(removeItems(item))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
