import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import productsData from './products.json';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const grouped = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    // <Container className="mt-5">
    //   <h2 className="mb-4">Product Categories</h2>
    //   {Object.keys(grouped).map((category) => (
    //     <div key={category} className="mb-5">
    //       <h4>{category}</h4>
    //       <Row>
    //         {grouped[category].map((product) => (
    //           <Col key={product.id} sm={6} md={4} lg={3} className="mb-4">
    //             <ProductCard product={product} />
    //           </Col>
    //         ))}
    //       </Row>
    //     </div>
    //   ))}
    // </Container>
    <div className="page-wrapper">
      <header className="header header-14">
        <div className="header-top">
          <div className="container">
            <div className="header-left">
              <a href="tel:#"><i className="icon-phone"></i>Call: +0123 456 789</a>
            </div>{/* End .header-left */}

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
                        </div>{/* End .header-menu */}
                      </div>{/* End .header-dropdown */}
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
                        </div>{/* End .header-menu */}
                      </div>{/* End .header-dropdown */}
                    </li>
                    <li className="login">
                      <a href="#signin-modal" data-toggle="modal">Sign in / Sign up</a>
                    </li>
                  </ul>
                </li>
              </ul>{/* End .top-menu */}
            </div>{/* End .header-right */}
          </div>{/* End .container */}
        </div>{/* End .header-top */}

        <div className="header-middle">
          <div className="container-fluid">
            <div className="row">
              <div className="col-auto col-lg-3 col-xl-3 col-xxl-2">
                <button className="mobile-menu-toggler">
                  <span className="sr-only">Toggle mobile menu</span>
                  <i className="icon-bars"></i>
                </button>
                <a href="index.html" className="logo">
                  <img src="assets/images/demos/demo-14/logo.png" alt="Molla Logo" width="105" height="25" />
                </a>
              </div>{/* End .col-xl-3 col-xxl-2 */}

              <div className="col col-lg-9 col-xl-9 col-xxl-10 header-middle-right">
                <div className="row">
                  <div className="col-lg-8 col-xxl-4-5col d-none d-lg-block">
                    <div className="header-search header-search-extended header-search-visible header-search-no-radius">
                      <a href="#" className="search-toggle" role="button"><i className="icon-search"></i></a>
                      <form action="#" method="get">
                        <div className="header-search-wrapper search-wrapper-wide">
                          <div className="select-custom">
                            <select id="cat" name="cat">
                              <option value="">All Departments</option>
                              <option value="1">Fashion</option>
                              <option value="2">- Women</option>
                              <option value="3">- Men</option>
                              <option value="4">- Jewellery</option>
                              <option value="5">- Kids Fashion</option>
                              <option value="6">Electronics</option>
                              <option value="7">- Smart TVs</option>
                              <option value="8">- Cameras</option>
                              <option value="9">- Games</option>
                              <option value="10">Home &amp; Garden</option>
                              <option value="11">Motors</option>
                              <option value="12">- Cars and Trucks</option>
                              <option value="15">- Boats</option>
                              <option value="16">- Auto Tools &amp; Supplies</option>
                            </select>
                          </div>{/* End .select-custom */}
                          <label htmlFor="q" className="sr-only">Search</label>
                          <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required />

                          <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                        </div>{/* End .header-search-wrapper */}
                      </form>
                    </div>{/* End .header-search */}
                  </div>{/* End .col-xxl-4-5col */}

                  <div className="col-lg-4 col-xxl-5col d-flex justify-content-end align-items-center">
                    <div className="header-dropdown-link">
                      <div className="dropdown compare-dropdown">
                        <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Compare Products" aria-label="Compare Products">
                          <i className="icon-random"></i>
                          <span className="compare-txt">Compare</span>
                        </a>

                        <div className="dropdown-menu dropdown-menu-right">
                          <ul className="compare-products">
                            <li className="compare-product">
                              <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                              <h4 className="compare-product-title"><a href="product.html">Blue Night Dress</a></h4>
                            </li>
                            <li className="compare-product">
                              <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                              <h4 className="compare-product-title"><a href="product.html">White Long Skirt</a></h4>
                            </li>
                          </ul>

                          <div className="compare-actions">
                            <a href="#" className="action-link">Clear All</a>
                            <a href="#" className="btn btn-outline-primary-2"><span>Compare</span><i className="icon-long-arrow-right"></i></a>
                          </div>
                        </div>{/* End .dropdown-menu */}
                      </div>{/* End .compare-dropdown */}

                      <a href="wishlist.html" className="wishlist-link">
                        <i className="icon-heart-o"></i>
                        <span className="wishlist-count">3</span>
                        <span className="wishlist-txt">Wishlist</span>
                      </a>

                      <div className="dropdown cart-dropdown">
                        <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                          <i className="icon-shopping-cart"></i>
                          <span className="cart-count">2</span>
                          <span className="cart-txt">Cart</span>
                        </a>

                        <div className="dropdown-menu dropdown-menu-right">
                          <div className="dropdown-cart-products">
                            <div className="product">
                              <div className="product-cart-details">
                                <h4 className="product-title">
                                  <a href="product.html">Beige knitted elastic runner shoes</a>
                                </h4>

                                <span className="cart-product-info">
                                  <span className="cart-product-qty">1</span>
                                  x $84.00
                                </span>
                              </div>{/* End .product-cart-details */}

                              <figure className="product-image-container">
                                <a href="product.html" className="product-image">
                                  <img src="assets/images/products/cart/product-1.jpg" alt="product" />
                                </a>
                              </figure>
                              <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                            </div>{/* End .product */}

                            <div className="product">
                              <div className="product-cart-details">
                                <h4 className="product-title">
                                  <a href="product.html">Blue utility pinafore denim dress</a>
                                </h4>

                                <span className="cart-product-info">
                                  <span className="cart-product-qty">1</span>
                                  x $76.00
                                </span>
                              </div>{/* End .product-cart-details */}

                              <figure className="product-image-container">
                                <a href="product.html" className="product-image">
                                  <img src="assets/images/products/cart/product-2.jpg" alt="product" />
                                </a>
                              </figure>
                              <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                            </div>{/* End .product */}
                          </div>{/* End .cart-product */}

                          <div className="dropdown-cart-total">
                            <span>Total</span>
                            <span className="cart-total-price">$160.00</span>
                          </div>{/* End .dropdown-cart-total */}

                          <div className="dropdown-cart-action">
                            <a href="cart.html" className="btn btn-primary">View Cart</a>
                            <a href="checkout.html" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right"></i></a>
                          </div>{/* End .dropdown-cart-total */}
                        </div>{/* End .dropdown-menu */}
                      </div>{/* End .cart-dropdown */}
                    </div>
                  </div>{/* End .col-xxl-5col */}
                </div>{/* End .row */}
              </div>{/* End .col-xl-9 col-xxl-10 */}
            </div>{/* End .row */}
          </div>{/* End .container-fluid */}
        </div>{/* End .header-middle */}

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
                                      <ul>
                                        <li><a href="#">Coffee Tables</a></li>
                                        <li><a href="#">Chairs</a></li>
                                        <li><a href="#">Tables</a></li>
                                        <li><a href="#">Futons & Sofa Beds</a></li>
                                        <li><a href="#">Cabinets & Chests</a></li>
                                      </ul>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="menu-title">Office</div>
                                      <ul>
                                        <li><a href="#">Office Chairs</a></li>
                                        <li><a href="#">Desks</a></li>
                                        <li><a href="#">Bookcases</a></li>
                                        <li><a href="#">File Cabinets</a></li>
                                        <li><a href="#">Breakroom Tables</a></li>
                                      </ul>
                                      <div className="menu-title">Kitchen & Dining</div>
                                      <ul>
                                        <li><a href="#">Dining Sets</a></li>
                                        <li><a href="#">Kitchen Storage Cabinets</a></li>
                                        <li><a href="#">Bakers Racks</a></li>
                                        <li><a href="#">Dining Chairs</a></li>
                                        <li><a href="#">Dining Room Tables</a></li>
                                        <li><a href="#">Bar Stools</a></li>
                                      </ul>
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
                                    <div className="col-md-6">
                                      <div className="menu-title">Women</div>
                                      <ul>
                                        <li><a href="#"><strong>New Arrivals</strong></a></li>
                                        <li><a href="#"><strong>Best Sellers</strong></a></li>
                                        <li><a href="#"><strong>Trending</strong></a></li>
                                        <li><a href="#">Clothing</a></li>
                                        <li><a href="#">Shoes</a></li>
                                        <li><a href="#">Bags</a></li>
                                        <li><a href="#">Accessories</a></li>
                                        <li><a href="#">Jewlery & Watches</a></li>
                                        <li><a href="#"><strong>Sale</strong></a></li>
                                      </ul>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="menu-title">Men</div>
                                      <ul>
                                        <li><a href="#"><strong>New Arrivals</strong></a></li>
                                        <li><a href="#"><strong>Best Sellers</strong></a></li>
                                        <li><a href="#"><strong>Trending</strong></a></li>
                                        <li><a href="#">Clothing</a></li>
                                        <li><a href="#">Shoes</a></li>
                                        <li><a href="#">Bags</a></li>
                                        <li><a href="#">Accessories</a></li>
                                        <li><a href="#">Jewlery & Watches</a></li>
                                      </ul>
                                    </div>
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
                    <li className="megamenu-container active">
                      <a href="index.html" className="sf-with-ul">Home</a>
                      <div className="megamenu demo">
                        <div className="menu-col">
                          <div className="menu-title">Choose your demo</div>
                          <div className="demo-list">
                            <div className="demo-item">
                              <a href="index-1.html">
                                <span className="demo-bg" style={{ backgroundImage: "url(assets/images/menu/demos/1.jpg)" }}></span>
                                <span className="demo-title">01 - furniture store</span>
                              </a>
                            </div>
                            <div className="demo-item">
                              <a href="index-2.html">
                                <span className="demo-bg" style={{ backgroundImage: "url(assets/images/menu/demos/2.jpg)" }}></span>
                                <span className="demo-title">02 - furniture store</span>
                              </a>
                            </div>
                            <div className="demo-item">
                              <a href="index-3.html">
                                <span className="demo-bg" style={{ backgroundImage: "url(assets/images/menu/demos/3.jpg)" }}></span>
                                <span className="demo-title">03 - electronic store</span>
                              </a>
                            </div>
                            <div className="demo-item">
                              <a href="index-4.html">
                                <span className="demo-bg" style={{ backgroundImage: "url(assets/images/menu/demos/4.jpg)" }}></span>
                                <span className="demo-title">04 - electronic store</span>
                              </a>
                            </div>
                            <div className="demo-item">
                              <a href="index-5.html">
                                <span className="demo-bg" style={{ backgroundImage: "url(assets/images/menu/demos/5.jpg)" }}></span>
                                <span className="demo-title">05 - fashion store</span>
                              </a>
                            </div>
                            <div className="demo-item">
                              <a href="index-6.html">
                                <span className="demo-bg" style={{ backgroundImage: "url(assets/images/menu/demos/6.jpg)" }}></span>
                                <span className="demo-title">06 - fashion store</span>
                              </a>
                            </div>
                            <div className="demo-item">
                              <a href="index-7.html">
                                <span className="demo-bg" style={{ backgroundImage: "url(assets/images/menu/demos/7.jpg)" }}></span>
                                <span className="demo-title">07 - fashion store</span>
                              </a>
                            </div>
                            <div className="demo-item">
                              <a href="index-8.html">
                                <span className="demo-bg" style={{ backgroundImage: "url(assets/images/menu/demos/8.jpg)" }}></span>
                                <span className="demo-title">08 - fashion store</span>
                              </a>
                            </div>
                            <div className="demo-item">
                              <a href="index-9.html">
                                <span className="demo-bg" style={{ backgroundImage: "url(assets/images/menu/demos/9.jpg)" }}></span>
                                <span className="demo-title">09 - fashion store</span>
                              </a>
                            </div>
                            <div className="demo-item">
                              <a href="index-10.html">
                                <span className="demo-bg" style={{ backgroundImage: "url(assets/images/menu/demos/10.jpg)" }}></span>
                                <span className="demo-title">10 - shoes store</span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-11.html">
                                <span className="demo-bg" style={{ backgroundImage: "url(assets/images/menu/demos/11.jpg)" }}></span>
                                <span className="demo-title">11 - furniture simple store</span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-12.html">
                                <span className="demo-bg" style={{ backgroundImage: "url(assets/images/menu/demos/12.jpg)" }}></span>
                                <span className="demo-title">12 - fashion simple store</span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-13.html">
                                <span className="demo-bg" style={{ backgroundImage: "url(assets/images/menu/demos/13.jpg)" }}></span>
                                <span className="demo-title">13 - market</span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-14.html">
                                <span className="demo-bg" style={{ backgroundImage: "url(assets/images/menu/demos/14.jpg)" }}></span>
                                <span className="demo-title">14 - market fullwidth</span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-15.html">
                                <span className="demo-bg" style={{ backgroundImage: "url(assets/images/menu/demos/15.jpg)" }}></span>
                                <span className="demo-title">15 - lookbook 1</span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-16.html">
                                <span className="demo-bg" style={{ backgroundImage: "url(assets/images/menu/demos/16.jpg)" }}></span>
                                <span className="demo-title">16 - lookbook 2</span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-17.html">
                                <span className="demo-bg" style={{ backgroundImage: "url(assets/images/menu/demos/17.jpg)" }}></span>
                                <span className="demo-title">17 - fashion store</span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-18.html">
                                <span className="demo-bg" style={{ backgroundImage: "url(assets/images/menu/demos/18.jpg)" }}></span>
                                <span className="demo-title">18 - fashion store (with sidebar)</span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-19.html">
                                <span className="demo-bg" style={{ backgroundImage: "url(assets/images/menu/demos/19.jpg)" }}></span>
                                <span className="demo-title">19 - games store</span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-20.html">
                                <span className="demo-bg" style={{ backgroundImage: "url(assets/images/menu/demos/20.jpg)" }}></span>
                                <span className="demo-title">20 - book store</span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-21.html">
                                <span className="demo-bg" style={{ backgroundImage: "url(assets/images/menu/demos/21.jpg)" }}></span>
                                <span className="demo-title">21 - sport store</span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-22.html">
                                <span className="demo-bg" style={{ backgroundImage: "url(assets/images/menu/demos/22.jpg)" }}></span>
                                <span className="demo-title">22 - tools store</span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-23.html">
                                <span className="demo-bg" style={{ backgroundImage: "url(assets/images/menu/demos/23.jpg)" }}></span>
                                <span className="demo-title">23 - fashion left navigation store</span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-24.html">
                                <span className="demo-bg" style={{ backgroundImage: "url(assets/images/menu/demos/24.jpg)" }}></span>
                                <span className="demo-title">24 - extreme sport store</span>
                              </a>
                            </div>
                          </div>
                          <div className="megamenu-action text-center">
                            <a href="#" className="btn btn-outline-primary-2 view-all-demos"><span>View All Demos</span><i className="icon-long-arrow-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="category.html" className="sf-with-ul">Shop</a>
                      <div className="megamenu megamenu-md">
                        <div className="row no-gutters">
                          <div className="col-md-8">
                            <div className="menu-col">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="menu-title">Shop with sidebar</div>
                                  <ul>
                                    <li><a href="category-list.html">Shop List</a></li>
                                    <li><a href="category-2cols.html">Shop Grid 2 Columns</a></li>
                                    <li><a href="category.html">Shop Grid 3 Columns</a></li>
                                    <li><a href="category-4cols.html">Shop Grid 4 Columns</a></li>
                                    <li><a href="category-market.html"><span>Shop Market<span className="tip tip-new">New</span></span></a></li>
                                  </ul>
                                  <div className="menu-title">Shop no sidebar</div>
                                  <ul>
                                    <li><a href="category-boxed.html"><span>Shop Boxed No Sidebar<span className="tip tip-hot">Hot</span></span></a></li>
                                    <li><a href="category-fullwidth.html">Shop Fullwidth No Sidebar</a></li>
                                  </ul>
                                </div>
                                <div className="col-md-6">
                                  <div className="menu-title">Product Category</div>
                                  <ul>
                                    <li><a href="product-category-boxed.html">Product Category Boxed</a></li>
                                    <li><a href="product-category-fullwidth.html"><span>Product Category Fullwidth<span className="tip tip-new">New</span></span></a></li>
                                  </ul>
                                  <div className="menu-title">Shop Pages</div>
                                  <ul>
                                    <li><a href="cart.html">Cart</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                    <li><a href="dashboard.html">My Account</a></li>
                                    <li><a href="#">Lookbook</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="banner banner-overlay">
                              <a href="category.html" className="banner banner-menu">
                                <img src="assets/images/menu/banner-1.jpg" alt="Banner" />
                                <div className="banner-content banner-content-top">
                                  <div className="banner-title text-white">Last <br />Chance<br /><span><strong>Sale</strong></span></div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="product.html" className="sf-with-ul">Product</a>
                      <div className="megamenu megamenu-sm">
                        <div className="row no-gutters">
                          <div className="col-md-6">
                            <div className="menu-col">
                              <div className="menu-title">Product Details</div>
                              <ul>
                                <li><a href="product.html">Default</a></li>
                                <li><a href="product-centered.html">Centered</a></li>
                                <li><a href="product-extended.html"><span>Extended Info<span className="tip tip-new">New</span></span></a></li>
                                <li><a href="product-gallery.html">Gallery</a></li>
                                <li><a href="product-sticky.html">Sticky Info</a></li>
                                <li><a href="product-sidebar.html">Boxed With Sidebar</a></li>
                                <li><a href="product-fullwidth.html">Full Width</a></li>
                                <li><a href="product-masonry.html">Masonry Sticky Info</a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="banner banner-overlay">
                              <a href="category.html">
                                <img src="assets/images/menu/banner-2.jpg" alt="Banner" />
                                <div className="banner-content banner-content-bottom">
                                  <div className="banner-title text-white">New Trends<br /><span><strong>spring 2019</strong></span></div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="#" className="sf-with-ul">Pages</a>
                      <ul>
                        <li>
                          <a href="about.html" className="sf-with-ul">About</a>
                          <ul>
                            <li><a href="about.html">About 01</a></li>
                            <li><a href="about-2.html">About 02</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html" className="sf-with-ul">Contact</a>
                          <ul>
                            <li><a href="contact.html">Contact 01</a></li>
                            <li><a href="contact-2.html">Contact 02</a></li>
                          </ul>
                        </li>
                        <li><a href="login.html">Login</a></li>
                        <li><a href="faq.html">FAQs</a></li>
                        <li><a href="404.html">Error 404</a></li>
                        <li><a href="coming-soon.html">Coming Soon</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog.html" className="sf-with-ul">Blog</a>
                      <ul>
                        <li><a href="blog.html">Classic</a></li>
                        <li><a href="blog-listing.html">Listing</a></li>
                        <li>
                          <a href="#">Grid</a>
                          <ul>
                            <li><a href="blog-grid-2cols.html">Grid 2 columns</a></li>
                            <li><a href="blog-grid-3cols.html">Grid 3 columns</a></li>
                            <li><a href="blog-grid-4cols.html">Grid 4 columns</a></li>
                            <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Masonry</a>
                          <ul>
                            <li><a href="blog-masonry-2cols.html">Masonry 2 columns</a></li>
                            <li><a href="blog-masonry-3cols.html">Masonry 3 columns</a></li>
                            <li><a href="blog-masonry-4cols.html">Masonry 4 columns</a></li>
                            <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Mask</a>
                          <ul>
                            <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
                            <li><a href="blog-mask-masonry.html">Blog mask masonry</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Single Post</a>
                          <ul>
                            <li><a href="single.html">Default with sidebar</a></li>
                            <li><a href="single-fullwidth.html">Fullwidth no sidebar</a></li>
                            <li><a href="single-fullwidth-sidebar.html">Fullwidth with sidebar</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="elements-list.html" className="sf-with-ul">Elements</a>
                      <ul>
                        <li><a href="elements-products.html">Products</a></li>
                        <li><a href="elements-typography.html">Typography</a></li>
                        <li><a href="elements-titles.html">Titles</a></li>
                        <li><a href="elements-banners.html">Banners</a></li>
                        <li><a href="elements-product-category.html">Product Category</a></li>
                        <li><a href="elements-video-banners.html">Video Banners</a></li>
                        <li><a href="elements-buttons.html">Buttons</a></li>
                        <li><a href="elements-accordions.html">Accordions</a></li>
                        <li><a href="elements-tabs.html">Tabs</a></li>
                        <li><a href="elements-testimonials.html">Testimonials</a></li>
                        <li><a href="elements-blog-posts.html">Blog Posts</a></li>
                        <li><a href="elements-portfolio.html">Portfolio</a></li>
                        <li><a href="elements-cta.html">Call to Action</a></li>
                        <li><a href="elements-icon-boxes.html">Icon Boxes</a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="col col-lg-3 col-xl-3 col-xxl-2 header-right">
                <i className="la la-lightbulb-o"></i>
                <p>Clearance Up to 30% Off</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
