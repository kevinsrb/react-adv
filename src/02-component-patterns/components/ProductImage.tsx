import { useContext, CSSProperties} from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg';


export interface Props { 
    className?: string; 
    img?: string; 
    style?: CSSProperties;
}

export const ProductImage = ({ img = '', style}: Props) => {

    const { product } = useContext( ProductContext );
    let imgToShow: string;

    if ( img ) {
        imgToShow = img;
    } else if ( product.img ) {
        imgToShow = product.img
    } else {
        imgToShow = noImage;
    }


    return (
        <img className={ styles.productImg } src={ imgToShow }
        style={ style }
         alt="Product" 
         />
    );
}