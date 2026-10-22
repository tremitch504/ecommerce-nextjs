import './footer.css';
import copyrightPic from '../../../../public/copyrightPic.jpeg';
import ddLogo2 from '../../../../public/ddLogo2.jpg';


import footerPic from '../../../../public/footerPic.jpeg';

export default function Footer() {

    return (
    <div className="footer-wrapper">

        <div className="footer-nav-container">
            <div className="shop-nav-list">
                <h1>Shop</h1>
           <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
           </ul>
            </div>
            <div className="shop-nav-list">
                <h1>Support</h1>
           <ul>
            <li>Customer Service</li>
            <li>My Account</li>
            <li>Legal & Privacy</li>
            <li>Contact Us</li>
            <li>Returns & Exchanges</li>
           </ul>
            </div>
        </div>

        <div className="footer-icons-container">
            <span className="akar-icons--instagram-fill"></span>
            <span className="akar-icons--tiktok-fill"></span>
            <span className="bi--twitter-x"></span>
        </div>

        <div className="copy-right-container">
            <h1>The content of this site is copyright-protected and is the property </h1>
            <h1>is committed to accessibility. That commitment embraces WCAG guidelines and supports assistive technologies such as screen readers.</h1>
        </div>

        <div className="footer-img-container">
            <img src={copyrightPic.src} alt="" />
            <img src={ddLogo2.src} alt="" />
        </div>
    </div>
    )
}