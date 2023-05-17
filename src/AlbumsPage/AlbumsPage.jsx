import {NavLink, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getWeather} from "../helper";
import './AlbumsPage.css';

function AlbumsPage (){
  const {id} = useParams();
  const [albumsArr, setAlbumsArr] = useState(null);

  useEffect(()=>{
    getWeather(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
        .then((value)=> setAlbumsArr(value));
  }, [id]);

  function CreateAlbumCard ({objElement}) {
    return (
        <div className='album_card'>
          <img className='album_card__img' src='/album-icon.png' alt='User Photo'/>
          <h4 className='album_card__id'> Album #{objElement.id}</h4>
          <NavLink  to={`photos_albom/${objElement.id}`} className='album_card__button_photos'>Photos</NavLink>
        </div>
    );
  }

  return (
      <>
          {albumsArr ? albumsArr.map((el)=>(
              < CreateAlbumCard key={el.id} objElement={el} />
          )) : 'Loading'}
      </>
  );
}
export default AlbumsPage