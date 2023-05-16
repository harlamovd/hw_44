import './UsersPage.css'
import {NavLink, Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import getWeather from "../getWeather/getWeather";

function UsersPage () {
  const [usersArr, setUsersArr] = useState(null);
  const li = useLocation();

  useEffect(()=>{
    async function get () {
      const arr = await getWeather('https://jsonplaceholder.typicode.com/users');
      setUsersArr(arr)
    }
    get();
    console.log(li)
  }, []);


  function CreateUserCard ({objElement}){
    return (
      <div className='user_card'>
        <img className='user_card__img' src='/User_icon.png' alt='User Photo'/>
        <div className='user_card__content'>
          <h4 className='user_card__name'> {objElement.name} <span className='user_card__idUser'> ID: {objElement.id}</span></h4>
          <NavLink  to={`albums/${objElement.id}`} className='user_card__button_albums'>Albums</NavLink>
        </div>
      </div>
    );

  }



  return (
      <div className='wrapper'>
        <div className='users_block'>
          {usersArr ? usersArr.map((el)=>(
             < CreateUserCard key={el.id} objElement={el} />
          )) : 'Error'}
        </div>
        <div className='albums_block'>
          <Outlet />
        </div>
      </div>

  );
}

export default UsersPage