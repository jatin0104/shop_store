import { Link } from "react-router-dom";
const BottomHead = () => {
    return (
         <div className="header-bottom sticky-header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-auto col-lg-3 col-xl-3 col-xxl-2 header-left">
                  <div className="dropdown category-dropdown show is-on" data-visible="true">
                    <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Browse Categories">
                      Browse Categories
                    </a>
                    <div className="dropdown-menu show">
                      <nav className="side-nav">
                        <ul className="menu-vertical sf-arrows">
                          <li className="megamenu-container">
                            <a className="sf-with-ul" href="#"><i className="icon-laptop"></i>Electronics</a>
                            <div className="megamenu">
                              <div className="row no-gutters">
                                <div className="col-md-8">
                                  <div className="menu-col">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="menu-title">Laptops & Computers</div>
                                        <ul>
                                          <li><a href="#">Desktop Computers</a></li>
                                          <li><a href="#">Monitors</a></li>
                                          <li><a href="#">Laptops</a></li>
                                          <li><a href="#">iPad & Tablets</a></li>
                                          <li><a href="#">Hard Drives & Storage</a></li>
                                          <li><a href="#">Printers & Supplies</a></li>
                                          <li><a href="#">Computer Accessories</a></li>
                                        </ul>
                                        <div className="menu-title">TV & Video</div>
                                        <ul>
                                          <li><a href="#">TVs</a></li>
                                          <li><a href="#">Home Audio Speakers</a></li>
                                          <li><a href="#">Projectors</a></li>
                                          <li><a href="#">Media Streaming Devices</a></li>
                                        </ul>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="menu-title">Cell Phones</div>
                                        <ul>
                                          <li><a href="#">Carrier Phones</a></li>
                                          <li><a href="#">Unlocked Phones</a></li>
                                          <li><a href="#">Phone & Cellphone Cases</a></li>
                                          <li><a href="#">Cellphone Chargers </a></li>
                                        </ul>
                                        <div className="menu-title">Digital Cameras</div>
                                        <ul>
                                          <li><a href="#">Digital SLR Cameras</a></li>
                                          <li><a href="#">Sports & Action Cameras</a></li>
                                          <li><a href="#">Camcorders</a></li>
                                          <li><a href="#">Camera Lenses</a></li>
                                          <li><a href="#">Photo Printer</a></li>
                                          <li><a href="#">Digital Memory Cards</a></li>
                                          <li><a href="#">Camera Bags, Backpacks & Cases</a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="banner banner-overlay">
                                    <a href="category.html" className="banner banner-menu">
                                      <img src="assets/images/demos/demo-13/menu/banner-1.jpg" alt="Banner" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="megamenu-container">
                            <a className="sf-with-ul" href="#"><i className="icon-couch"></i>Furniture</a>
                            <div className="megamenu">
                              <div className="row no-gutters">
                                <div className="col-md-8">
                                  <div className="menu-col">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="menu-title">Bedroom</div>
                                        <ul>
                                          <li><a href="#">Beds, Frames & Bases</a></li>
                                          <li><a href="#">Dressers</a></li>
                                          <li><a href="#">Nightstands</a></li>
                                          <li><a href="#">Kids' Beds & Headboards</a></li>
                                          <li><a href="#">Armoires</a></li>
                                        </ul>
                                        <div className="menu-title">Living Room</div>
                                        <ul></ul>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="menu-title">Office</div>
                                        <ul></ul>
                                        <div className="menu-title">Kitchen & Dining</div>
                                        <ul></ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="banner banner-overlay">
                                    <a href="category.html" className="banner banner-menu">
                                      <img src="assets/images/demos/demo-13/menu/banner-2.jpg" alt="Banner" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="megamenu-container">
                            <a className="sf-with-ul" href="#"><i className="icon-concierge-bell"></i>Cooking</a>
                            <div className="megamenu">
                              <div className="menu-col">
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="menu-title">Cookware</div>
                                    <ul>
                                      <li><a href="#">Cookware Sets</a></li>
                                      <li><a href="#">Pans, Griddles & Woks</a></li>
                                      <li><a href="#">Pots</a></li>
                                      <li><a href="#">Skillets & Grill Pans</a></li>
                                      <li><a href="#">Kettles</a></li>
                                      <li><a href="#">Soup & Stockpots</a></li>
                                    </ul>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="menu-title">Dinnerware & Tabletop</div>
                                    <ul>
                                      <li><a href="#">Plates</a></li>
                                      <li><a href="#">Cups & Mugs</a></li>
                                      <li><a href="#">Trays & Platters</a></li>
                                      <li><a href="#">Coffee & Tea Serving</a></li>
                                      <li><a href="#">Salt & Pepper Shaker</a></li>
                                    </ul>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="menu-title">Cooking Appliances</div>
                                    <ul>
                                      <li><a href="#">Microwaves</a></li>
                                      <li><a href="#">Coffee Makers</a></li>
                                      <li><a href="#">Mixers & Attachments</a></li>
                                      <li><a href="#">Slow Cookers</a></li>
                                      <li><a href="#">Air Fryers</a></li>
                                      <li><a href="#">Toasters & Ovens</a></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="row menu-banners">
                                  <div className="col-md-4">
                                    <div className="banner">
                                      <a href="#">
                                        <img src="assets/images/demos/demo-13/menu/1.jpg" alt="image" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="banner">
                                      <a href="#">
                                        <img src="assets/images/demos/demo-13/menu/2.jpg" alt="image" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="banner">
                                      <a href="#">
                                        <img src="assets/images/demos/demo-13/menu/3.jpg" alt="image" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="megamenu-container">
                            <a className="sf-with-ul" href="#"><i className="icon-tshirt"></i>Clothing</a>
                            <div className="megamenu">
                              <div className="row no-gutters">
                                <div className="col-md-8">
                                  <div className="menu-col">
                                    <div className="row">
                                      <div className="col-md-6"></div>
                                      <div className="col-md-6"></div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="banner banner-overlay">
                                    <a href="category.html" className="banner banner-menu">
                                      <img src="assets/images/demos/demo-13/menu/banner-3.jpg" alt="Banner" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="menu-col menu-brands">
                                <div className="row">
                                  <div className="col-lg-2">
                                    <a href="#" className="brand">
                                      <img src="assets/images/brands/1.png" alt="Brand Name" />
                                    </a>
                                  </div>
                                  <div className="col-lg-2">
                                    <a href="#" className="brand">
                                      <img src="assets/images/brands/2.png" alt="Brand Name" />
                                    </a>
                                  </div>
                                  <div className="col-lg-2">
                                    <a href="#" className="brand">
                                      <img src="assets/images/brands/3.png" alt="Brand Name" />
                                    </a>
                                  </div>
                                  <div className="col-lg-2">
                                    <a href="#" className="brand">
                                      <img src="assets/images/brands/4.png" alt="Brand Name" />
                                    </a>
                                  </div>
                                  <div className="col-lg-2">
                                    <a href="#" className="brand">
                                      <img src="assets/images/brands/5.png" alt="Brand Name" />
                                    </a>
                                  </div>
                                  <div className="col-lg-2">
                                    <a href="#" className="brand">
                                      <img src="assets/images/brands/6.png" alt="Brand Name" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li><a href="#"><i className="icon-blender"></i>Home Appliances</a></li>
                          <li><a href="#"><i className="icon-heartbeat"></i>Healthy & Beauty</a></li>
                          <li><a href="#"><i className="icon-shoe-prints"></i>Shoes & Boots</a></li>
                          <li><a href="#"><i className="icon-map-signs"></i>Travel & Outdoor</a></li>
                          <li><a href="#"><i className="icon-mobile-alt"></i>Smart Phones</a></li>
                          <li><a href="#"><i className="icon-tv"></i>TV & Audio</a></li>
                          <li><a href="#"><i className="icon-shopping-bag"></i>Backpack & Bag</a></li>
                          <li><a href="#"><i className="icon-music"></i>Musical Instruments</a></li>
                          <li><a href="#"><i className="icon-gift"></i>Gift Ideas</a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-6 col-xl-6 col-xxl-8 header-center">
                  <nav className="main-nav">
                    <ul className="menu sf-arrows">
                      <li className="active">
                        <Link to="/" className="sf-with-ul">Home</Link>
                      </li>
                      <li>
                        <a href="shop.html" className="sf-with-ul">Shop</a>
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