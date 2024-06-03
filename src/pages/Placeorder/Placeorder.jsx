import React,{useEffect, useState} from 'react'
import './Placeorder.css'
import { useContext } from 'react'
import { Storecontext } from '../../context/Storecontext'

const Placeorder = () => {

  const {getTotalCartAmount} = useContext(Storecontext);

  /*const abc = alert("accept");
  useEffect(()=>{
    console.log(abc)
},[abc])*/
const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      alert('Thankyou for order');
      // Reset showAlert state after showing the alert
      setShowAlert(false);
    }
  }, [showAlert]);

  return (
    <form className='place-order'>
       <div className='place-order-left'>
        <p className='title'>Delivery information</p>
        <div className="multi-fields">
          <input type="text" placeholder='first name' />
          <input type="text" placeholder='last name' />
        </div>
          <input type="text" placeholder='email address' />
          <input type="text" placeholder='street'/>
       <div className="multi-fields">
          <input type="text" placeholder='city' />
          <input type="text" placeholder='state' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='phone' />
        </div>
        <div className="place-order-right">
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
            <button onClick={() => setShowAlert(true)}>Proceed to payment</button>
          </div>
        </div>
    </form>
  )
}

export default Placeorder;
