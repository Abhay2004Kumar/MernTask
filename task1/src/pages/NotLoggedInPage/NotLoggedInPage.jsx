import React from 'react';
import './NotLoggedIn.css'
import PostList from '../../components/PostList/PostList';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/SideBar/SideBar';
import { useState } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';


const NotLoggedInPage = () => {
    
  return (
    <div className="notloggedin-container">
      <Header />
      <HeroSection/>
      <div className="main-content">
        <PostList />
        <Sidebar />
      </div>
      
    </div>
  );
};

export default NotLoggedInPage;
