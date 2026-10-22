import './productsSection.css'

export default function ProductsSection() {
  return (
<div className="products-section-wrapper">
    
    <div className="products-filter-container">
<div className="size-filter-container">
  <div className="size-filter-header"><h2>Size</h2> <span className="dashicons--arrow-down-alt2"></span></div>
  <div className="size-filter-list">
    <div className="filter-sizes">S</div>
    <div className="filter-sizes">M</div>
    <div className="filter-sizes">L</div>
    <div className="filter-sizes">XL</div>
    <div className="filter-sizes-larger">XXL</div>
  </div>
</div>
<div className="colors-filter-container">
  <div className="colors-filter-header"><h2>Colors</h2> <span className="dashicons--arrow-down-alt2"></span></div>
  <div className="colors-filter-list">
    <div className="filter-colors"></div>
  </div>
</div>

<div className="price-filter-container">
  <div className="price-filter-header"><h2>Price</h2> <span className="dashicons--arrow-down-alt2"></span></div>
  <div className="price-filter-list">
    <div className="price-checkbox-container">
 <input type="checkbox" name="" id="" />
 <h2>$0-10</h2>
    </div>
    <div className="price-checkbox-container">
 <input type="checkbox" name="" id="" />
 <h2>$10-25</h2>
    </div>
    <div className="price-checkbox-container">
 <input type="checkbox" name="" id="" />
 <h2>$25-50</h2>
    </div>
    <div className="price-checkbox-container">
 <input type="checkbox" name="" id="" />
 <h2>$50-100</h2>
    </div>
   
    {/* <div className="filter-price"></div> */}
  </div>
</div>
    </div>
</div>

  )

  }