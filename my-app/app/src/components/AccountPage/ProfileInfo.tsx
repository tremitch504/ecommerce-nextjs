import './profileInfo.css';




export default function ProfileInfo() {
  return (
    <div className="profile-info-section-wrapper">
<div className="profile-info-nav-container">
    <div className="profile-info-nav-current-link-box">
<div className="profile-info-nav-link"><span className="boxicons--edit"></span><h2 className='current-nav'>My Info</h2></div>
</div>

 <div className="profile-info-nav-link-box">
<div className="profile-info-nav-link"><span className="akar-icons--shipping-box-02"></span><h2 className='nav-title'>My Orders</h2></div>
</div>
 <div className="profile-info-nav-link-box">
<div className="profile-info-nav-link"><span className="fa-regular--address-card"></span><h2 className='nav-title'>Addresses</h2></div>
</div>

<div className="profile-info-sign-out-container"><span className="fa--sign-out"></span> <h2>Sign out</h2> </div>
</div>

<div className="profile-info-address-container">
    
    <div className="account-info-container">
        <div className="account-info-header">
            <h1>Account Info</h1>
            <h2>edit</h2>
        </div>

        <div className="account-info-details">
            <div className="account-info-title-container"><h1>Name: </h1> <h2>Kyle Rogger</h2></div>
            <div className="account-info-title-container"><h1>Email: </h1> <h2>roggerkyle23@gmail.com</h2></div>
            <div className="account-info-title-container"><h1>Mobile Number:</h1> <h2>3234564567</h2></div>
            <div className="account-info-title-container"><h1>Birthday: </h1> <h2>Unknown</h2></div>
        </div>
    </div>

    <div className="profile-info-addresses-container">
<div className="account-info-addresses-header">
            <h1>Address</h1>
            <h2>Add new</h2>
        </div>

        <div className="address-box-container">
            <div className="address-box-details-container">
                <h2>Kyle Rogger</h2>
                <h2>3456 Apple St</h2>
                <h2>Orlando, FL 32839 </h2>
                <h2>US</h2>
                <h2>3234564567</h2>
            </div>

            <div className="default-status-address-container">
                <h1>Default Shipping Address</h1>
            </div>
        </div>
    </div>
</div>

    </div>
  )

}