import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getWeather} from "../helper";
import './PhotosPage.css';

function PhotosPage () {
    const {id} = useParams();
    const [photosArr, setPhotosArr] = useState(null);

    useEffect(()=>{
        getWeather(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
            .then((value)=> setPhotosArr(value));
    }, [id]);

    function CreatePhotosCard ({objElement}) {
        return (
            <div className='photo_card'>
                <img className='photo_card__img' src='/photo-icon.png' alt='User Photo'/>
                <h4 className='photo_card__id'> Photo #{objElement.id}</h4>
            </div>
        );
    }
    return(
        <>
        {photosArr ? photosArr.map((el)=>(
            < CreatePhotosCard key={el.id} objElement={el} />
        )) : 'Loading'}
        </>
    );
}
export default PhotosPage