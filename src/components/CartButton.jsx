import React from 'react'

const CartButton = () => {
    return (
        <div className="cart-product">
            <a href="product-cart.html" title="View Cart" data-toggle="tooltip">
                <i className="icofont-cart-alt" />
            </a>
            <span>03</span>
        </div>
    )
}

export default CartButton