import logo from "../logo.svg";
import {NavLink, Outlet} from "react-router-dom";
import './MainLayout.css'

function MainLayout (){
  return (
      <>
        <header className='header center'>
          <img src={logo} className="header__logo" alt="logo" />
          <nav className='header__nav'>
            <NavLink className='header__link' to='/'> Home </NavLink>
            <NavLink className='header__link' to='/users'> Users </NavLink>
            <NavLink className='header__link' to='/author'> Author </NavLink>
          </nav>
        </header>
        < Outlet />
      </>
  );
 }

 export default MainLayout