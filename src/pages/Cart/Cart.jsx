import React,{useContext} from 'react'
import './Cart.css'
import { Storecontext } from '../../context/Storecontext'
import { useNavigate } from 'react-router'

const Cart = () => {

  const {cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(Storecontext);

  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
          </div>
          <br/>
          <hr/>
          {food_list.map((item,index)=>{
             if(cartItems[item._id]>0)
             {
              return(
                 <div>
                <div className='cart-items-title cart-items-item'>
                   <img src={item.image} alt="" />
                   <p>{item.name}</p>
                   <p>${item.Price}</p>
                   <p>{cartItems[item._id]}</p>
                   <p>${item.Price*cartItems[item._id]}</p>
                   <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr/>
                </div>
              )
             }
          })}
        </div>
         <div className='cart-bottom'>
          <div className="cart-total">
            <h2>cart totals</h2>
            <div>
              <div className="cart-total-details">
                   <p>Subtotal</p>
                   <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                   <p>Delivery fee</p>
                   <p>${2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                 <b>total</b>
                 <b>${getTotalCartAmount()+2}</b>
              </div>
            </div>
            <button onClick={()=>navigate('/order')}>Proceed to checkout</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>if you have a promo code, enter it here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder='promo code' />
                <button >Submit</button>
              </div>
            </div>
          </div>
         </div>
      </div>
  
  )
}

export default Cart;
