import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {

    const [{ basket },dispatch] = useStateValue();

    return (       
       <div className="checkout">
           <div className="checkout_left">          
                <img src="checkoutadd.PNG" alt="checkout" className="checkout_ad"/>

                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>
                            You have no items in your basket. 
                            To buy one or two continue shoping and click "Add to Basket" next to the item.
                        </p>
                        </div>
                        ):(
                            <div>
                                <h2 className="checkout_title">Your Shopping Basket</h2>
                                {/* List out all the checkout products */}
                                {basket?.map((item) =>{
                                    console.log("item image is ", item.image)
                                    return(
                                    <CheckoutProduct 
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}                                                                
                                    />
                                )} )}
                            </div>
                )}
            </div>            
            {
                basket.length > 0 && (
                    <div>
                        <Subtotal />
                    </div>
                )
            }
       </div>
    );
}

export default Checkout
