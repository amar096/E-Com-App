import React from 'react'
import StarIcon from '@material-ui/icons/StarRateSharp'
import { useStateValue } from './StateProvider'
import './CheckoutProduct.css'

function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch] = useStateValue();   
    const removeFrombasket = () => {
        //remove item from the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt=""/>

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkooutProduct_price">{price}</p>
                <div className="checkoutProduct_rating">
                    {Array(rating)
                    .fill()
                    .map((_) => (
                    <p><StarIcon/></p>
                    ))}
                </div>   
                <button onClick={removeFrombasket}>Remove from basket</button>            
            </div>

        </div>
    )
}

export default CheckoutProduct
