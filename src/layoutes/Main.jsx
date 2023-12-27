import React from 'react';
import Header from '../pages/sharedPage/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/sharedPage/Footer/Footer';

const Main = () => {
  return (
    <>
      <Header></Header>
      <div className="min-h-[calc(100vh-80px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
