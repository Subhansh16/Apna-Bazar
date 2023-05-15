import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from "./StateProvider";
function Payment() {
    const [{basket,user}, dispatch] = useStateValue();
    return (
        <div className = 'payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<link to="/checkout">{basket?.length} items</link>)
                </h1>
                 {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>Crossing Republik , Ghaziabad</p>
                        <p>Ghaziabad , India </p>
                    </div>

                </div>
                {/* Payment section - Review Items */}
                <div className='payment__section'>
                     <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                     </div>
                     <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                />
                        ))}

                     </div>


                </div>
                {/* Payment section - Payment method */}

                <div className='payment__section'>
                    <div className='payment__items'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.price}
                            price={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div  className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe magic will go*/}
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Payment