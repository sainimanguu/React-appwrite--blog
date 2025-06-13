import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css'
import AuthService from './appwrite/auth';
import { login, logout } from './store/authslice';
import Header from './components/header/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    AuthService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        }
        else {
          dispatch(logout());
        }
      })
      .finally(() => setloading(false))
  }, [dispatch])

 

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-slate-400'>
      <div className='w-full block'>
        <Header />
        <main>
          {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
