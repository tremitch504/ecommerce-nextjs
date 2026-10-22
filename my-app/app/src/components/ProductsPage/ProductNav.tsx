import './productsBanner.css';


export default function ProductsNav() {
  return (
      <div className="products-nav-wrapper">
      
      <div className="products-nav-container">
        <div className="products-page-current-location">
            <h2>Men</h2> <span className="dashicons--arrow-right-alt2"></span> <h2>Tops</h2>
        </div>
        <div className="total-products-container">
            <h2>900 Products</h2>
        </div>
      </div>
 
 <div className="sort-by-container">
    <h2>Sort By</h2> <span className="bxs--down-arrow"></span>
 </div>
      </div>

  )

  }