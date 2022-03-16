import { Link } from "react-router-dom";
import menus from '../config/menus';

function Header() {
  return(
    <div className="header__wrap">
      <h6>
        Fes Saint Mapping Project
      </h6>

      <div>
        {
          menus.topNav.map((link, i) => (
            <Link to={link.path} key={`top-nav-link-${i}`}>
              {link.displayName}
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Header;
