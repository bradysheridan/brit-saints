import React from 'react';
import Markdown from 'react-markdown';
import { Link } from "react-router-dom";
import menus from '../config/menus';

function Header({ lang, onSelectLang }) {
  return(
    <div>
      <div className="header-placeholder"></div>
      <div className="header-wrap__outer">
        <div className="header-wrap__inner">
          <p>
            <Link to={"/"}>
              Home
            </Link>
            <span style={{margin: '0 7px'}}></span>
            <Link to={"/about"}>
              About
            </Link>
          </p>
          <Markdown>
            Visiting the Female Saints of Fez, *Rawḍ al-Awliyā’*
          </Markdown>
          <p>
            <button className={["header__lang-selector", "en" === lang && "selected"].join(' ')} onClick={() => onSelectLang("en")}>
              En
            </button>
            <span style={{margin: '0 4px'}}>
              /
            </span>
            <button className={["header__lang-selector", "ar" === lang && "selected"].join(' ')} onClick={() => onSelectLang("ar")}>
              Ar
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header;
