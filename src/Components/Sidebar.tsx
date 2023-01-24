import React from "react";
import { SideBarStyled, SidebarItemWrapper } from "../Styled";
import logo from "../assets/logo.svg";
import home from "../assets/icon-nav-home.svg";
import homeActive from "../assets/icon-category-home.svg";
import movies from "../assets/icon-nav-movies.svg";
import moviesActive from "../assets/icon-category-movie.svg";
import series from "../assets/icon-nav-tv-series.svg";
import seriesActive from "../assets/icon-category-series.svg";
import bookmarks from "../assets/icon-nav-bookmark.svg";
import bookmarksActive from "../assets/icon-bookmark-full.svg";
import avatar from '../assets/image-avatar.png'

const Sidebar = ({ page, setpage }) => {
  const icons = [
    {
      name: "home",
      icon: page === "home" ? homeActive : home,
    },
    {
      name: "movies",
      icon: page === "movies" ? moviesActive : movies,
    },
    {
      name: "series",
      icon: page === "series" ? seriesActive : series,
    },
    {
      name: "bookmarks",
      icon: page === "bookmarks" ? bookmarksActive : bookmarks,
    },
  ];

  return (
    <SideBarStyled>
      <img onClick={()=>setpage('home')} style={{ width: "30px", height: "30px" }} src={logo} alt="" />
      <SidebarItemWrapper>
        {icons.map((icon) => (
          <img style={{width:'20px',height:'20px'}}  onClick={()=>setpage(icon.name)} src={icon.icon} alt={icon.name} key={icon.name} />
        ))}
      </SidebarItemWrapper>
       <img style={{width:'40px',height:'40px'}}  src={avatar} alt="avatar" />
    </SideBarStyled>
  );
};

export default Sidebar;
