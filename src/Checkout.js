import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
function Checkout(){
    const [{basket,user} ,dispatch]=useStateValue();
    console.log(user);
    return(
     <div className="checkout">
          <div className="checkout__left">
             <img 
               className="Checkout__ad"
               src=""
               alt=""
             />
    {user?(<div >
       <h3>Hello, {user.email}</h3>
       <h2 className="checkout__title">Your shopping Basket</h2>
       {basket.map(item => (
       <CheckoutProduct
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
        />
        ))}  
   </div>):( <h1>Sign in</h1>)}
   </div>
   <div className="checkout__right">
       <Subtotal />   
   </div>
</div>
    );
}
export default Checkout;