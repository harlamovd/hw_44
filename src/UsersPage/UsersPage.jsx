import './UsersPage.css';
import {NavLink, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {getWeather} from '../helper';


function UsersPage () {
  const [usersArr, setUsersArr] = useState(null);

  useEffect(()=>{
      getWeather('https://jsonplaceholder.typicode.com/users')
          .then((value)=> setUsersArr(value));
  }, []);

  function CreateUserCard ({objElement}){
    return (
      <div className='user_card'>
        <img className='user_card__img' src='/User_icon.png' alt='User Photo'/>
        <div className='user_card__content'>
          <h4 className='user_card__name'> {objElement.name} <span className='user_card__idUser'> ID: {objElement.id}</span></h4>
          <NavLink   to={`albums_user/${objElement.id}`} className={({isActive}) => isActive ? 'user_card__link_active': 'user_card__link'}>Albums</NavLink>
        </div>
      </div>
    );
  }

  return (
      <div className='wrapper'>
        <div className='users_block'>
          {usersArr ? usersArr.map((el)=>(
             < CreateUserCard key={el.id} objElement={el} />
          )) : 'Loading'}
        </div>
        <div className='albums_block'>
          <Outlet />
        </div>
      </div>
  );
}

export default UsersPage