import React, {useState} from 'react'
import './Fooditem.css';
import plus from '../../assets/plus.png'
import subtract from '../../assets/subtract.png'
import { useContext } from 'react';
import { Storecontext } from '../../context/Storecontext';


const Fooditem = ({id, name, Price, description, image}) => {

    //const [itemCount, setItemCount] = useState(0)
    const {cartItems, addToCart, removeFromCart} = useContext(Storecontext);

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img  className='food-item-image' src={image} alt="" />
            {!cartItems[id]
               ?<img className='add' onClick={()=>addToCart(id)} src={plus}/>
               :<div className='food-item-counter'>
                   <img onClick={()=>removeFromCart(id)} src={subtract}/>
                   <p>{cartItems[id]}</p>
                   <img onClick={()=>addToCart(id)} src={plus}/>
                             
                </div>

            }
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                {/*<img src={assets.rating_starts} alt="" />*/}
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${Price}</p>
        </div>
      
    </div>
  )
}

export default Fooditem;
