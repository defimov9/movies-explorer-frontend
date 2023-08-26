import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useEffect, useState } from 'react';
import authApi from '../../utils/AuthApi';
import mainApi from '../../utils/MainApi';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
function App() {
  const [savedMovies, setSavedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [tooltipSettings, setTooltipSettings] = useState({
    isSuccess: false,
    message: '',
  });
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      authApi
        .checkToken(jwt)
        .then((res) => {
          setCurrentUser(res);
          setLoggedIn(true);
        })
        .catch((err) => console.log(err));
    }
  }, [navigate]);

  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getUserData(), mainApi.getSavedMovies()])
        .then(([userData, userSavedMovies]) => {
          setCurrentUser(userData);
          setSavedMovies(userSavedMovies.movies);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  const handleTooltipError = (err) => {
    setTooltipSettings({
      ...tooltipSettings,
      isSuccess: false,
      message: err,
    });
    setIsTooltipOpen(true);
  };

  const handleLogin = (email, password) => {
    setIsLoading(true);
    authApi
      .login(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
      })
      .catch((err) => {
        handleTooltipError(err);
      })
      .finally(() => setIsLoading(false));
  };

  const handleRegister = (name, email, password) => {
    setIsLoading(true);
    authApi
      .register(password, email, name)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        handleTooltipError(err);
      })
      .finally(() => setIsLoading(false));
  };

  const handleCloseTooltip = () => {
    setIsTooltipOpen(false);
  };

  const handleSignOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
    setSavedMovies([]);
    setIsLoading(false);
    navigate('/');
  };

  return (
    <CurrentUserContext.Provider
      value={{ savedMovies, setSavedMovies, currentUser, setCurrentUser }}>
      <div className='App'>
        <Routes>
          <Route
            path='/signup'
            element={
              <Register handleRegister={handleRegister} isLoading={isLoading} />
            }
          />
          <Route
            path='/signin'
            element={
              loggedIn ? (
                <Navigate to='/movies' />
              ) : (
                <Login handleLogin={handleLogin} isLoading={isLoading} />
              )
            }
          />
          <Route
            path='/movies'
            element={<ProtectedRoute component={Movies} loggedIn={loggedIn} />}
          />
          <Route path='/saved-movies' element={<SavedMovies />} />{' '}
          <Route
            path='/profile'
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile handleSignOut={handleSignOut} />
              </ProtectedRoute>
            }
          />
          <Route path='/' element={<Main loggedIn={loggedIn} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <InfoTooltip
          isOpen={isTooltipOpen}
          tooltipSettings={tooltipSettings}
          onClose={handleCloseTooltip}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
