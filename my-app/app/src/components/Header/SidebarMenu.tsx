import './header.css';
import ddLogo2 from '@/public/ddLogo2.jpg';

export default function SidebarMenu() { 

    return (
        <div className="sidebar-menu-wrapper">
<div className="sidebar-menu-container">
    <div className="sidebar-menu-header">
        <span className="ant-design--close-outlined"></span>
        <img className="dd-logo-sidebar" src={ddLogo2.src}/>
    </div>

    <ul className='category-list' >
        
          <li className='category'><a href="#"><span className="boxicons--backpack-star-filled"></span><h1>Shop All </h1> </a> </li>
          {/* <li className='category'><a href="#">Unisex</a> <div className="category-arrow"><span className="akar-icons--chevron-down"></span></div></li> */}
          <li className='category'><a href="#"><span className="icon-park-outline--women-coat"></span> <h1>Women</h1></a> <div className="category-arrow"><span className="akar-icons--chevron-down"></span></div></li>
          <li className='category'><a href="#"><span className="icon-park-outline--men-jacket"></span><h1>Men</h1></a> <div className="category-arrow"><span className="akar-icons--chevron-down"></span></div></li>
          <li className='category'><a href="#"><span className="fa6-solid--children"></span><h1>Kids</h1></a> <div className="category-arrow"><span className="akar-icons--chevron-down"></span></div></li>
          <li className='category'><a href="#">Support</a></li>
        </ul>

</div>

        </div>
    )

}