import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './components/Loading';
import Home from './pages/Home';
import Login from './pages/Login';
import Navigation from './components/Navigation';
import Register from './pages/Register';
import Detail from './pages/Detail';
import Add from './pages/Add';
import { asyncUnsetAuthUser } from './states/authUser/action';
import { asyncPreloadProcess } from './states/isPreload/action';

export default function App() {
  const { authUser = null, isPreload = false } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) return null;

  return (
    <>
      <Loading />
      <div className="app">
        <header>
          <div className="top-bar">
            <h1>Dicoding Forum App</h1>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home authUser={authUser} />} />
            <Route path="/login" element={<Login authUser={authUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/threads/:id" element={<Detail authUser={authUser} />} />
            <Route path="/new" element={<Add authUser={authUser} />} />
          </Routes>
        </main>
        <footer>
          <Navigation authUser={authUser} signOut={onSignOut} />
        </footer>
      </div>
    </>
  );
}
