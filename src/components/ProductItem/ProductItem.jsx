import React from 'react';
import Button from "../Button/Button";
import './ProductItem.scss';

import Image from '../../assets/images/kross.png';

const ProductItem = ({ product, className, onAdd }) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={'product ' + className}>
            <div className="product__img">
                <img src={Image} />
            </div>
            <div className={'product__price'}>
                <span>{product.price} ₽</span>
            </div>
            <div className={'product__title'}>{product.title}</div>
            <div className={'product__description'}>{product.description}</div>
            {/* <Button className={'product__add-btn'} onClick={onAddHandler}>
                В корзину
            </Button> */}
        </div >
    );
};

export default ProductItem;