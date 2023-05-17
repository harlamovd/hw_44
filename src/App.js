
import './App.css';
import UsersPage from "./UsersPage/UsersPage";
import {Routes, Route} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import MainLayout from "./MainLayout/MainLayout";
import AlbumsPage from "./AlbumsPage/AlbumsPage";
import PhotosPage from "./PhotosPage/PhotosPage";
import AuthorPage from "./AuthorPage/AuthorPage";
import NotFound from "./NotFound/NotFound";

function App() {

  return (
      <>
          <Routes>
            <Route path='/' element={<  MainLayout /> }>
              <Route index element={< HomePage /> }/>
              <Route path='author' element={<  AuthorPage />} />
              <Route path='users' element={< UsersPage /> }>
                <Route path='albums_user/:id' element={< AlbumsPage /> }/>
                <Route path='albums_user/:id/photos_albom/:id' element={< PhotosPage /> }/>
              </Route>
              < Route path='/*' element={<NotFound />}/>
            </Route>

          </Routes>
      </>
  );
}

export default App;
