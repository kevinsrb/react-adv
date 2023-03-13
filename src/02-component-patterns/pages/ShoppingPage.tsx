import { useState } from 'react';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css'
import { products } from '../data/products'

const product = products[0]

export const ShoppingPage = () => {


    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <ProductCard 
                key={product.id}
                product={ product } 
                className="bg-dark text-white"
                initialValues={{
                    count: 4,
                    maxCount: 10    
                }}
            >
                { 
                    (args) => (
                        <>
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />

                            {/* <button onClick={reset}></button> */}
                        </>
                    )
                }
                
            </ProductCard>
         
        </div>
    )
}
