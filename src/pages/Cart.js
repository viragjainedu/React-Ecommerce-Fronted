import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


class Cart extends React.Component{
    render(){
        return(

            
      <div id="container">
      <Header/>
      {/* page-banner-section 
          ================================================== */}
      <section className="page-banner-section">
        <div className="container">
          <h1>Cart</h1>
          <ul className="page-depth">
            <li><a href="index.html">Studiare</a></li>
            <li><a href="cart.html">Cart</a></li>
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
                      <th className="product-quantity">Quantity</th>
                      <th className="product-subtotal">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="product-remove">
                        <a href="#" className="remove">×</a>
                      </td>
                      <td className="product-thumbnail">
                        <a href="#"><img src="./assets/upload/courses/thumb1.jpg" alt="" /></a>
                      </td>
                      <td className="product-name">
                        <a href="#">Introduction Web Design with HTML</a>
                      </td>
                      <td className="product-price">
                        $244.00
                      </td>
                      <td className="product-quantity">
                        <input type="number" defaultValue={1} />
                      </td>
                      <td className="product-subtotal">$244.00</td>
                    </tr>
                    <tr>
                      <td className="product-remove">
                        <a href="#" className="remove">×</a>
                      </td>
                      <td className="product-thumbnail">
                        <a href="#"><img src="./assets/upload/courses/thumb2.jpg" alt="" /></a>
                      </td>
                      <td className="product-name">
                        <a href="#">Distance Learning MBA Management</a>
                      </td>
                      <td className="product-price">
                        $29.99
                      </td>
                      <td className="product-quantity">
                        <input type="number" defaultValue={1} />
                      </td>
                      <td className="product-subtotal">
                        $29.99
                      </td>
                    </tr>
                    <tr className="coupon-line"> 
                      <td colSpan={6} className="actions">
                        <input type="text" name="coupon_code" placeholder="Coupon code" />
                        <button type="submit">Update cart</button>
                      </td>
                    </tr>
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
                        <td>273.99</td>
                      </tr>
                      <tr className="order-total">
                        <th>Total</th>
                        <td>273.99</td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="checkout.html" className="checkout-button">Proceed to checkout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End cart section */}
      <Footer/>
    </div>
    
        )
    }
}
export default Cart;