import { Link } from "react-router-dom";

const TopHead = () => {
    return (
        <div className="header-top">
            <div className="container">
              <div className="header-left">
                <a href="tel:#"><i className="icon-phone"></i>Call: +0123 456 789</a>
              </div>
              <div className="header-right">
                <ul className="top-menu">
                  <li>
                    <a href="#">Links</a>
                    <ul className="menus">
                      <li>
                        <div className="header-dropdown">
                          <a href="#">USD</a>
                          <div className="header-menu">
                            <ul>
                              <li><a href="#">Eur</a></li>
                              <li><a href="#">Usd</a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="header-dropdown">
                          <a href="#">Engligh</a>
                          <div className="header-menu">
                            <ul>
                              <li><a href="#">English</a></li>
                              <li><a href="#">French</a></li>
                              <li><a href="#">Spanish</a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="login">
                        <Link to="/login" >Sign in / Sign up</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
    )
}

export default TopHead;