import React from 'react';
import "./Nav.css";

export const Nav = () => {
  return (
    <div className='nav'>
        <h1>AndySocial</h1>
        <div className='searchbar'>
            <span><i class="uil uil-search"></i></span>
        <input type="search" placeholder="search for creators, projects and inspirations " name="search"></input>
        </div>
        <div className='nav-end'>
            <button className='btn1'><label for='create post'>create</label></button>
            <div className='img1'></div>
        </div>
    </div>
  )
}
