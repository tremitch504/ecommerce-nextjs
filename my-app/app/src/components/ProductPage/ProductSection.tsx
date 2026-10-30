import './productSection.css';
import shirtDD from '../../../../public/shirtDD.jpeg';


export default function ProductsSection() {
  return (

<div className="product-section-wrapper">
<div className="product-section-details-container">

<div className="product-section-details-top">
<h1 className="product-title">Misfits T-Shirt</h1>
<h2 className="product-price">$26</h2>
<div className="product-colors-list-container">
    <h1>Color:</h1>
<div className="product-colors-list">
    <div className="product-colors"></div>
   <div className="product-colors"></div>
  </div>
</div>
<div className="product-size-list-container">
    <h1>Size:</h1>
<div className="product-colors-list">
    <div className="product-size">S</div>
   <div className="product-size">M</div>
   <div className="product-size">L</div>
  </div>
</div>
</div>


{/* Overview Section */}
<div className="product-overview-section-container">
    <div className="product-overview-header">
        <h1>Product Overview</h1>
        <span className="ep--arrow-up"></span>
    {/* <span className="dashicons--arrow-down-alt2"></span>  */}
    </div>
    <div className="product-overview-description-container">
        <p>Available In Beige, Black, Brown, 
      Charcoal, Heather Grey, 
      Military Green, Navy, Off White, Tan And White
Crew Neck
Short Sleeves
Oversized Fit
Self: 100% Cotton
Imported</p>
    </div>
</div>

{/* Delivery Policy section */}
<div className="product-delivery-policy-section-container">
     <div className="product-policy-header"><h1>Delivery, Return & Exchange Policy</h1><span className="dashicons--arrow-down-alt2"></span> </div>
</div>


{/* Product Buttons section */}
<div className="product-buttons-container">
<button className="add-bag-button">Add to bag</button>
<div className="heart-icon-container"><span className="andrsrxn--heart-filled"></span></div>

</div>
</div>


<div className="product-img-container">
<img className="product-img-main" src={shirtDD.src} />

</div>




</div>
  )
}