import React from "react";
import "./Home.css";
import Product from "./Product";
function Home(){
    return (
    <div className="home">
        <div className="home_container">
        <img  className="home__image" 
        src=""
        alt=""/>
        <div className="home__row">
            <Product 
            id="12321341" 
            title="The Famous Shazar Stone known for its beauty and uniqueness " 
            price={29.99} 
            image="/img2ShazarPathar.jpg" 
            rating={5}/>
            <Product 
            id="49538094"
            title=" World Famous Carpets of Bhadoi "
            price={239.0}
            image="/img4.jpg"
            rating={4}
            />
        </div>
        <div className="home__row">
             <Product 
             id="4903850"
             title="Unique and Famous Handicrafts of Orcha "
             price={199.99}
             image="/img6.jpg"
             rating={3}/>
             <Product
             id="23445930"
             title="Famous Locks of Aligarh"
             price={98.99}
             image="/img5.jpg"
             rating={5} 
             />
             <Product 
             id="3254354345"
             title="Famous Wall Paintings of Bundelkhand"
             price={198.99}
             image="/img7.jpg"
             rating={4}/>
        </div>
        <div className="home__row">
             <Product 
             id="90829332"
             title="World Famous Banarasi Sari"
             price={1094.98}
             image="/img3.jpg"
             rating={4}/>
        </div> </div>
</div>
    );}export default Home;


