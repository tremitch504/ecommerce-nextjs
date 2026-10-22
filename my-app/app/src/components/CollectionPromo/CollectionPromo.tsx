import './collectionPromo.css';
import promoBG from '../../../../public/collectionPromoBG.png';



export default function CollectionPromo() {

    return ( 
        <div className="collection-promo-wrapper">
 {/* <img src={promoBG.src} alt="Description" />  */}

 <div className="collection-promo-header-container">
  <h1 className='top-header'>MISFITS COLLECTION</h1>
  <h1 className='bottom-header'>GET 20% OFF MISFITS - LIMITED TIME ONLY!</h1>
 </div>

 <div className="collection-promo-title">
    <h1>Stay warm and comfortable with our all new Misfits sweaters for the fall and winter!</h1>
 </div>

 <div className="shop-now-btn-container">
    <div className="shop-now-btn">Shop Now</div>
 </div>
 

        </div>
    )
} 