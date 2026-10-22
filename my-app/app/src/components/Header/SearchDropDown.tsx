import brownDD from '../../../../public/brownDD.jpg'




export default function SearchDropDown(){

    return ( 
       <div className="search-drop-wrapper">
<div className="product-list">
<div className="product">
       <img src={brownDD.src} />

       <div className="product-details">
        <h2>Brown Hoodie DayDreamerz</h2>
        {/* <h3>$23</h3> */}
       </div>
       
      </div>
<div className="product">
       <img src={brownDD.src} />

       <div className="product-details">
        <h2>Brown Hoodie DayDreamerz</h2>
        {/* <h3>$23</h3> */}
       </div>
       
      </div>
<div className="product">
       <img src={brownDD.src} />

       <div className="product-details">
        <h2>Brown Hoodie DayDreamerz</h2>
        {/* <h3>$23</h3> */}
       </div>
       
      </div>

</div>

       </div>
    )
}