import './categoriesSec.css';
import hoodiePink from '../../../../public/hoodiePink.jpg'
import brownDD from '../../../../public/brownDD.jpg';
import shirtDD from  '../../../../public/shirtDD.jpeg';
import bernieMac from  '../../../../public/bernieMac.jpg'

export default function CategoriesSec() {

    return ( 
        <div className="categories-section-wrapper">
            <div className="categories-section-header">
                <h1>Categories</h1>
            </div>

            <div className="categories-section-list-container">
                <div className="categories-section-card">
                    <img className="categories-card-img" src={hoodiePink.src} alt="" />
                    <h1>Shirts</h1>
                </div>
                <div className="categories-section-card">
                    <img className="categories-card-img" src={brownDD.src} alt="" />
                    <h1>Jackets</h1>
                </div>
                <div className="categories-section-card">
                    <img className="categories-card-img" src={shirtDD.src} alt="" />
                    <h1>Shorts</h1>
                </div>
                <div className="categories-section-card">
                    <img className="categories-card-img" src={bernieMac.src} alt="" />
                    <h1>Pants</h1>
                </div>
            </div>
        </div>
    )
} 