import React, { useEffect } from 'react';
import { getGenresThunk } from '../entities/genres/genreSlice';
import { getMoviesThunk } from '../entities/movies/moviesSlice';
import { refreshTokens } from '../entities/users/authSlice';
import Navbar from '../widgets/ui/Navbar/Navbar';
import Sidebar from '../widgets/ui/Sidebar/Sidebar';
import AppRouter from './providers/router/AppRouter';
import { useAppDispatch } from './store/store';
import './styles/index.css';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getMoviesThunk());
    void dispatch(getGenresThunk());
    void dispatch(refreshTokens());
  }, [dispatch]);

  return (
    <div className="app">
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
