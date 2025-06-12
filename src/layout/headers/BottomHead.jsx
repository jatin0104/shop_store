import { Link } from "react-router-dom";
const BottomHead = () => {
    return (
        <div className="header-bottom sticky-header">
            <div className="container-fluid">
              <div className="row">
                
                <div className="col col-lg-6 col-xl-6 col-xxl-8 header-center">
                  <nav className="main-nav">
                    <ul className="menu sf-arrows">
                      <li className="active">
                        <Link to="/" className="sf-with-ul">Home</Link>
                      </li>
                      <li>
                        <Link to="/shop" className="sf-with-ul">Shop</Link>
                      </li>
                      <li>
                        <a href="about.html" className="sf-with-ul">About Us</a>
                      </li>
                      <li>
                        <a href="contact.html" className="sf-with-ul">Contact Us</a>
                      </li>
                      <li>
                        <a href="blog.html" className="sf-with-ul">Blog</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col col-lg-3 col-xl-3 col-xxl-2 header-right">
                  <i className="la la-lightbulb-o"></i><p>Clearance Up to 30% Off</p>
                </div>
              </div>
            </div>
          </div>
    )
}

export default BottomHead;