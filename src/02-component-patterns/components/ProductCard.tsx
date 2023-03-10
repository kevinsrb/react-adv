import { createContext, ReactElement, CSSProperties } from 'react';

import { useProduct } from '../hooks/useProduct';
<<<<<<< HEAD
import { Product, ProductContextProps } from '../interfaces/interfaces';
=======
import { ProductContextProps, Product } from '../interfaces/interfaces';
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4

import styles from '../styles/styles.module.css'

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[] 
    className?: string;
    style?: CSSProperties
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


<<<<<<< HEAD
export const ProductCard = ({ children, product, className, style }: Props ) => {
    
=======

export interface Props {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties 
}


export const ProductCard = ({ children, product, className, style }: Props ) => {

>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4
    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
<<<<<<< HEAD
            <div className={ `${styles.productCard} ${className}` }
            style={style}
=======
            <div 
                className={ `${ styles.productCard } ${ className }` }
                style={ style }
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4
            >
                { children }
            </div>
        </Provider>
    )
}
