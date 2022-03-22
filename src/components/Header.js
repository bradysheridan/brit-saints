import React from 'react';
import Markdown from 'react-markdown';
import { Link } from "react-router-dom";
import menus from '../config/menus';

function Header() {
  return(
    <div>
      <div className="header-placeholder"></div>
      <div className="header-wrap__outer">
        <div className="header-wrap__inner">
          <p>
            <Link to={"/"}>Home</Link>
            <span style={{margin: '0 7px'}}></span>
            <Link to={"/about"}>About</Link>
          </p>
          <Markdown>Visiting the Female Saints of Fez, *Rawḍ al-Awliyā’*</Markdown>
          <p>
            <a href="#">En</a>
            <span style={{margin: '0 4px'}}>/</span>
            <a href="#">Ar</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header;
