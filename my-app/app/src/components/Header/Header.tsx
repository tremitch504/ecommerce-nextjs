import './header.css';
import ddLogo from '@/public/ddLogo.jpeg';
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch, IoPersonOutline, IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import SearchDropDown from './SearchDropDown';



export default function Header() { 

    return (
        <div className='header-wrapper'>
            <div className="hamburger-menu-button-container">
                 <span className="charm--menu-hamburger"></span>
            </div>
 
     <div className="page-name-container">
        <img className='page-logo' src={ddLogo.src} />
        <h1 className="page-name">DayDreamerz</h1>  
     </div>

     <div className="header-nav-container">
      <h4 className="nav-menu"><a href="#home" style={{textDecoration: "none"}}>Home</a></h4>
        <h4 className="nav-menu"><a href="#home" style={{textDecoration: "none"}}>Shop</a> <IoIosArrowDown  className="arrow-down" />
         <div className="nav-drop-wrapper">
      <div className="nav-drop-list">
         <div className="nav-category">
          <h3 className="category-name"> Shop All</h3>
         </div>
         <div className="nav-category">
          <h3 className="category-name"> Unisex</h3>
         </div>
         <div className="nav-category">
          <h3 className="category-name"> Women</h3>
         </div>
         <div className="nav-category">
          <h3 className="category-name"> Men</h3>
         </div>
         <div className="nav-category">
          <h3 className="category-name"> Kids</h3>
         </div>
      </div>
     </div>
        </h4>
        <h4 className="nav-menu"><a href="#home" style={{textDecoration: "none"}}>Support </a></h4>
     </div>

     <div className="search-bar-container">

<div className="search-bar">
    <IoSearch className="search-icon"/> 
    <input className="bar" type="text" placeholder="Search for products..."></input>
</div>
 <SearchDropDown />
     </div>

     <div className="header-icons-container">
        <IoSearchSharp className='header-search-icons'/>
 <FaRegHeart className="header-icons"/>
    <BsHandbag className="header-icons"/>
    <IoPersonOutline className="header-icons"/>
     </div>
        </div>
    )
}
