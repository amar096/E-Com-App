import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home_image"
            src="banner.JPG"//"https://www.paisebachaoindia.com/wp-content/uploads/2016/01/banner.png" 
            alt=""/>
            
            {/* Product gonna have title,price,rating,image */}
            <div className='home_row'>
                <Product 
                    id = "12344"
                    title = "Headphone"
                    price={12000}
                    rating={4}
                    image="HeadPhones.jpg"
                />            
                 <Product 
                 id = "12345"
                    title = "FireStick"
                    price={12000}
                    rating={4}
                    image="firestick.PNG"
                />            
            </div>
            <div className='home_row'>
                <Product 
                id = "12346"
                    title = "Camera"
                    price={12000}
                    rating={4}
                    image="camera.jpg"
                />
                 <Product 
                 id = "12347"
                    title = "Alexa"
                    price={12000}
                    rating={4}
                    image="Capture.PNG"
                />
                 <Product 
                 id = "12348"
                    title = "HeaElectronic Cooker"
                    price={12000}
                    rating={4}
                    image="e-cooker.PNG"
                />
            </div>
            <div className='home_row'>
                <Product 
                id = "12349"
                    title = "Phone"
                    price={12000}
                    rating={4}
                    image="phones.PNG"
                />               
            </div>            
            
        </div>
    )
}

export default Home
