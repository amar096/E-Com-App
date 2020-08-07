import React from 'react'
import StarIcon from '@material-ui/icons/StarRateSharp'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id,title,price,rating,image}) {
   
    const [{basket},dispatch] = useStateValue();
    const addToBasket = () =>{

        //Add item to the basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
                
            },
        });
    }
    

    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                    <p className='product_price'>
                        <small>Rs.</small>
                        <strong>{price}</strong>
                    </p>
                    <div className='product_rating'>
                        {
                            Array(rating)
                            .fill()
                            .map(()=>(<StarIcon/>))
                        }
                    </div>
            </div> 
            <img className="product_image" src={image} alt="headphone"/>
            <button onClick={addToBasket}>Add to basket</button>           
        </div>
    )
}

export default Product
