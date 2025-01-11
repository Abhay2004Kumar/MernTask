import React from 'react';
import './LoggedInPage.css';
import LHeader from '../../components/HeaderLogged/LHeader';
import PostList from '../../components/PostList/PostList';
import LSidebar from '../../components/SidebarLogged/Sidebar';

const LoggedInPage = () => {
  return (
    <div className="loggedin-container">
      <LHeader />
      <div className="main-content">
        <PostList />
        <LSidebar />
      </div>
    </div>
  );
};

export default LoggedInPage;
