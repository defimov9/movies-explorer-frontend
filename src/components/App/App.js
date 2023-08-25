import { Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useState } from 'react';

function App() {
  const [savedMovies, setSavedMovies] = useState([]);

  return (
    <CurrentUserContext.Provider value={{ savedMovies, setSavedMovies }}>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
