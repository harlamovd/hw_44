import {useLocation, useParams} from "react-router-dom";

function AlbumsPage (){
  const {id} = useParams()
  const li = useLocation();
  return (
      <>
        asdasdasd {id} {li.pathname}
      </>

  )

}
async function a ({params}){
  await alert('ss')
  return {params}

}
export default AlbumsPage