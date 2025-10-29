import React,{useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import theme_pattern from '../../assets/theme_pattern.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { useRef } from 'react';

const Navbar = () => {

  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
        <img id='wall' src={logo} alt="" />
        <img src={menu_open} alt="" className='nav-mob-open' onClick={openMenu} />
        <ul ref={menuRef} className="nav-menu">
            <img src={menu_close} alt="" className="nav-close" onClick={closeMenu} />
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={theme_pattern} alt='' style={{ height: "20px", width: "auto" }}/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu==="about"?<img src={theme_pattern} alt='' style={{ height: "20px", width: "auto" }}/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("project")}>Project</p></AnchorLink>{menu==="project"?<img src={theme_pattern} alt='' style={{ height: "20px", width: "auto" }}/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={theme_pattern} alt='' style={{ height: "20px", width: "auto" }}/>:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar