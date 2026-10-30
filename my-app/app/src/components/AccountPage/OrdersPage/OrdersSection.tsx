import '../profileInfo.css'


export default function OrdersSection() {
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

<div className="profile-info-orders-container">

<div className="profile-info-orders-header">
    <h1>My Orders</h1> 
</div>

<div className="profile-info-order-card">
    <div className="profile-info-order-card-details">
       <h1>Aug 24, 2026</h1>
       <h2>$81.37</h2>
       <h2>#10200370</h2>
       <div className="profile-info-order-status"><h1>Delivered</h1> <span className="akar-icons--check"></span> </div>
       <img />
    </div>

    <div className="profile-info-order-card-view-details-container">
        <div className="view-details-btn"><h2>View details</h2></div>
    </div>

</div>
<div className="profile-info-order-card">
    <div className="profile-info-order-card-details">
       <h1>Aug 24, 2026</h1>
       <h2>$81.37</h2>
       <h2>#10200370</h2>
       <div className="profile-info-order-status"><h1>Delivered</h1> <span className="akar-icons--check"></span> </div>
       <img />
    </div>

    <div className="profile-info-order-card-view-details-container">
        <div className="view-details-btn"><h2>View details</h2></div>
    </div>

</div>
<div className="profile-info-order-card">
    <div className="profile-info-order-card-details">
       <h1>Aug 24, 2026</h1>
       <h2>$81.37</h2>
       <h2>#10200370</h2>
       <div className="profile-info-order-status"><h1>Delivered</h1> <span className="akar-icons--check"></span> </div>
       <img />
    </div>

    <div className="profile-info-order-card-view-details-container">
        <div className="view-details-btn"><h2>View details</h2></div>
    </div>

</div>

</div>




</div>
  )

}