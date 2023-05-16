
import './App.css';
import UsersPage from "./UsersPage/UsersPage";
import {Routes, Route, NavLink, Link } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import MainLayout from "./MainLayout/MainLayout";
import AlbumsPage from "./Albums/Albums";


function App() {


  return (
      <>
          <Routes>
            <Route path='/' element={<  MainLayout /> }>
              <Route index element={< HomePage /> }/>
              <Route path='users' element={< UsersPage /> }>
                <Route path='albums/:id' element={< AlbumsPage /> }/>
              </Route>
            </Route>
          </Routes>
      </>
  );
}

export default App;
