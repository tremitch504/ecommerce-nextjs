import './cartSection.css'


export default function CartSection() {
  return (
<div className="cart-section-wrapper">
    <div className="cart-section-bag-card">
        <div className="cart-section-bag-card-header">
            <div className="bag-title">
                <h1>Bag</h1> <h2>(2 products)</h2>
            </div>

            <div className="add-more-items">+ Add items</div>
            <div className="clear-bag-btn">Clear Bag</div>
        </div>

        <div className="cart-section-product-card">
            <div className="product-title-img-container">
                <img />
                <div className="product-title-container">
                    <h1>Misfits T-Shirt</h1>
                    <h2>Grey</h2>
                    <h2>L</h2>
                </div>
                </div>

                <div className="quantity-container">
                    <span className="akar-icons--circle-minus-fill"></span>
                    <h1>1</h1>
                    <span className="akar-icons--circle-plus-fill"></span>
                </div>
<div className="price-containter">
    <h1>$24.99</h1>
</div>

<span className="fa--trash-o"></span>
</div>
        <div className="cart-section-product-card">
            <div className="product-title-img-container">
                <img />
                <div className="product-title-container">
                    <h1>Misfits T-Shirt</h1>
                    <h2>Grey</h2>
                    <h2>L</h2>
                </div>
                </div>

                <div className="quantity-container">
                    <span className="akar-icons--circle-minus-fill"></span>
                    <h1>1</h1>
                    <span className="akar-icons--circle-plus-fill"></span>
                </div>
<div className="price-containter">
    <h1>$24.99</h1>
</div>

<span className="fa--trash-o"></span>
</div>
    </div>



<div className="order-summary-container">
<div className="promo-code-container">
    <div className="add-more-items">+ Add items</div>
    <div className="promo-code-header">
        <h1>Promo code</h1>
    </div>
<div className="promo-code-text-box">
<input type="text"placeholder='Type here..'/>
<button className="promo-code-apply-btn">Apply</button>
</div>
</div>
<div className="order-summary-pricing-container">
    <div className="order-summary-pricing-header"> <h1>Order Summary</h1></div>

    <div className="order-summary-pricing-receipt">

        <div className="receipt-pricing-line-item">
            <h1>Subtotal</h1>
            <h2>$78.97</h2>
        </div>
        <div className="receipt-pricing-line-item">
            <h1>Discounts</h1>
            <h2>-$5.00</h2>
        </div>
        <div className="receipt-pricing-line-item">
            <h1>Shipping</h1>
            <h2>Free</h2>
        </div>
        <div className="receipt-pricing-line-item">
            <h1>Tax</h1>
            <h2>Calculated at Checkout</h2>
        </div>
    </div>
</div>
    
  <div className="proceed-to-checkout-btn">
        <h1>Proceed to Checkout</h1>
    </div>

</div>




</div>

  )

}