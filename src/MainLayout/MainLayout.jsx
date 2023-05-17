import logo from "../logo.svg";
import {NavLink, Outlet} from "react-router-dom";
import './MainLayout.css'
import {isActiveLink} from "../helper";

function MainLayout (){
  return (
      <>
        <header className='header center'>
          <img src={logo} className="header__logo" alt="logo" />
          <nav className='header__nav'>
            <NavLink className={isActiveLink} to='/'> Home </NavLink>
            <NavLink className={isActiveLink} to='/users'> Users </NavLink>
            <NavLink className={isActiveLink} to='/author'> Author </NavLink>
          </nav>
        </header>
        < Outlet />
      </>
  );
 }

 export default MainLayout