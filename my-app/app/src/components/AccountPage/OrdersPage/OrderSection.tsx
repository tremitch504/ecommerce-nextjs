import '../profileInfo.css'


export default function OrderSection() {
  return (
     <div className="profile-info-section-wrapper">
<div className="profile-info-nav-container">
    <div className="profile-info-nav-link-box">
<div className="profile-info-nav-link"><span className="boxicons--edit"></span><h2 className='nav-title'>My Info</h2></div>
</div>

 <div className="profile-info-nav-current-link-box">
<div className="profile-info-nav-link"><span className="akar-icons--shipping-box-02"></span><h2 className='current-nav'>My Orders</h2></div>
</div>
 <div className="profile-info-nav-link-box">
<div className="profile-info-nav-link"><span className="fa-regular--address-card"></span><h2 className='nav-title'>Addresses</h2></div>
</div>
<div className="profile-info-sign-out-container"><span className="fa--sign-out"></span> <h2>Sign out</h2> </div>
</div>


<div className="order-details-section-container">
    <div className="order-details-section-header">
        <h1>Order details</h1>
        <h2>#1252684683</h2>
    </div>
<div className="order-details-section-card">
<div className="order-details-card-items-list-container">
    <div className="order-details-card-items-list-header">
        <h1>Delivered Wed, Aug 26</h1> <span className="akar-icons--check"></span>
    </div>

    <div className="order-details-card-item-box">
        <img  /> 
        <div className="order-details-card-item-title-container">
            <h1>Misfits T-Shirt</h1>
            <h2>$18.99</h2>
            <h2>Qty 1</h2>
        </div>
    </div>
    <div className="order-details-card-item-box">
        <img  /> 
        <div className="order-details-card-item-title-container">
            <h1>Misfits T-Shirt</h1>
            <h2>$18.99</h2>
            <h2>Qty 1</h2>
        </div>
    </div>
    <div className="order-details-card-item-box">
        <img  /> 
        <div className="order-details-card-item-title-container">
            <h1>Misfits T-Shirt</h1>
            <h2>$18.99</h2>
            <h2>Qty 1</h2>
        </div>
    </div>
</div>


<div className="order-details-card-track-receipt-container">
<div className="order-details-card-track-order-btn">Track order</div>

<div className="order-details-card-receipt">
    <div className="order-details-card-receipt-header">
        <h1>$81.37</h1>
        <span className="ep--arrow-up"></span>
    </div>
    <div className="receipt-pricing-details">
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
            <h2>$7.40</h2>
        </div>
    </div>
    <div className="order-details-card-receipt-footer">
        <h1>Total</h1>
        <h1>$81.37</h1>
    </div>
</div>

<div className="order-details-card-receipt-shipping">
    <div className="order-details-card-receipt-shipping-header">
        <h1>Delivered to</h1>
    </div>
    <h2>Kyle Rogger</h2>
    <h2> 5647 Apple St</h2>
    <h2>Atlanta, GA 7845</h2>
   
</div>
</div>



</div>

</div>

</div>)
}