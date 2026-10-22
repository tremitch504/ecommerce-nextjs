import './header.css';
import { IoSearch } from "react-icons/io5";
import { IoCloseCircleSharp } from "react-icons/io5";


export default function PopupSearch(){

    return ( 
        <div className="popup-bar-wrapper">
        <div className="popup-bar-container" >
      <IoSearch className="search-icon" /> 
      <input className="popup-bar" type="text" placeholder="Search for products..."></input>
      </div>  
       <div className="close-bar-container"><IoCloseCircleSharp className='close-bar-button'/> </div>
        </div>
    )
}