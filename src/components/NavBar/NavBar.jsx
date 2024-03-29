import "./NavBar.css";
import { Link } from "react-router-dom";
// import * as userService from "../../utilities/users-service";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
// import {Button} from '../Button/Button'

export default function NavBar({ user, setUser }) {
  const [click, setClick] = useState(false);

  // const [button, setButton] = useState(true);

  const closeMobileMenu = () => setClick(false)

  // const showButton = () => {
  //   if(window.innerwidth <= 960){
  //     setButton(false)
  //   } else {
  //     setButton(true)
  //   }
  // }

  // window.addEventListener('resize', showButton);

  function handleClick() {
    setClick(!click);
  }

  // function handleLogOut() {
  //   // Delegate to the users-service
  //   userService.logOut();
  //   // Update state will also cause a re-render
  //   setUser(null);
  // }
  return (
    <>
      <div className="nav-bar container">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img className="Logo" src="/DiaBuddy(2).png" alt="" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li>
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Search Restaurants
              </Link>
              </li>
              {/* <li> */}
              {/* <Link to="/favrest" className="nav-links" onClick={closeMobileMenu}>
                Favorite Restaurants
              </Link>
              </li> */}
              {/* <li>
              <Link to="/mealhistory" className="nav-links" onClick={closeMobileMenu}>
                Meal History
              </Link>
              </li> */}
              {/* <li className="nav-btn">
              {button ? (
                <Link to='/AuthPage' className="btn-link">
                  <Button buttonstyle='btn--outline'>Login/SignUp</Button>
                </Link>
              ): (
                <Link to='/AuthPage' className="btn-link" onClick={closeMobileMenu}>
                  <Button buttonstyle='btn--outline'
                    buttonSize='btn--mobile'>
                      Login/SignUp</Button>
                </Link>
              )}
              </li> */}
              {/* <li>
              <Link to="" className="nav-links" onClick={closeMobileMenu}>
                Welcome, {user.name}
              </Link>
              </li>
                <li>
                <Link to="" className="nav-links" onClick={handleLogOut}>
                  Log Out
                </Link>
              </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}
