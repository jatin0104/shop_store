/* eslint-disable no-unused-vars */
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
  <>
    <div className="page-wrapper">
      <header className="header header-14">
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
                      <a href="#signin-modal" data-toggle="modal">Sign in / Sign up</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-middle">
      <div className="container-fluid">
        <div className="row">
          <div className="col-auto col-lg-3 col-xl-3 col-xxl-2">
            <button className="mobile-menu-toggler">
              <span className="sr-only">Toggle mobile menu</span>
              <i className="icon-bars"></i>
            </button>
            <a href="index.html" className="logo">
              <img
                src="/assets/images/demos/demo-14/logo.png"
                alt="Molla Logo"
                width="105"
                height="25"
              />
            </a>
          </div>

          <div className="col col-lg-9 col-xl-9 col-xxl-10 header-middle-right">
            <div className="row">
              <div className="col-lg-8 col-xxl-4-5col d-none d-lg-block">
                <div className="header-search header-search-extended header-search-visible header-search-no-radius">
                  <a href="#" className="search-toggle" role="button">
                    <i className="icon-search"></i>
                  </a>
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
                      </div>
                      <label htmlFor="q" className="sr-only">Search</label>
                      <input
                        type="search"
                        className="form-control"
                        name="q"
                        id="q"
                        placeholder="Search product ..."
                        required
                      />
                      <button className="btn btn-primary" type="submit">
                        <i className="icon-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-4 col-xxl-5col d-flex justify-content-end align-items-center">
                <div className="header-dropdown-link">
                  <div className="dropdown compare-dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      role="button"
                      dataToggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      dataDisplay="static"
                      title="Compare Products"
                      aria-label="Compare Products"
                    >
                      <i className="icon-random"></i>
                      <span className="compare-txt">Compare</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <ul className="compare-products">
                        <li className="compare-product">
                          <a href="#" className="btn-remove" title="Remove Product">
                            <i className="icon-close"></i>
                          </a>
                          <h4 className="compare-product-title">
                            <a href="product.html">Blue Night Dress</a>
                          </h4>
                        </li>
                        <li className="compare-product">
                          <a href="#" className="btn-remove" title="Remove Product">
                            <i className="icon-close"></i>
                          </a>
                          <h4 className="compare-product-title">
                            <a href="product.html">White Long Skirt</a>
                          </h4>
                        </li>
                      </ul>
                      <div className="compare-actions">
                        <a href="#" className="action-link">Clear All</a>
                        <a href="#" className="btn btn-outline-primary-2">
                          <span>Compare</span>
                          <i className="icon-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <a href="wishlist.html" className="wishlist-link">
                    <i className="icon-heart-o"></i>
                    <span className="wishlist-count">3</span>
                    <span className="wishlist-txt">Wishlist</span>
                  </a>

                  <div className="dropdown cart-dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      role="button"
                      dataToggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      dataDisplay="static"
                    >
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
                              <span className="cart-product-qty">1</span> x $84.00
                            </span>
                          </div>
                          <figure className="product-image-container">
                            <a href="product.html" className="product-image">
                              <img src="assets/images/products/cart/product-1.jpg" alt="product" />
                            </a>
                          </figure>
                          <a href="#" className="btn-remove" title="Remove Product">
                            <i className="icon-close"></i>
                          </a>
                        </div>

                        <div className="product">
                          <div className="product-cart-details">
                            <h4 className="product-title">
                              <a href="product.html">Blue utility pinafore denim dress</a>
                            </h4>
                            <span className="cart-product-info">
                              <span className="cart-product-qty">1</span> x $76.00
                            </span>
                          </div>
                          <figure className="product-image-container">
                            <a href="product.html" className="product-image">
                              <img src="assets/images/products/cart/product-2.jpg" alt="product" />
                            </a>
                          </figure>
                          <a href="#" className="btn-remove" title="Remove Product">
                            <i className="icon-close"></i>
                          </a>
                        </div>
                      </div>

                      <div className="dropdown-cart-total">
                        <span>Total</span>
                        <span className="cart-total-price">$160.00</span>
                      </div>

                      <div className="dropdown-cart-action">
                        <a href="cart.html" className="btn btn-primary">View Cart</a>
                        <a href="checkout.html" className="btn btn-outline-primary-2">
                          <span>Checkout</span>
                          <i className="icon-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
                      <a href="index.html" className="sf-with-ul">Home</a>
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
      </header>

      <main className="main">
        <div className="mb-lg-2"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-9 col-xxl-8 offset-lg-3 offset-xxl-2">
              <div className="intro-slider-container slider-container-ratio mb-2">
                <div className="intro-slider owl-carousel owl-theme">
                  <div className="intro-slide">
                    <img src="assets/images/demos/demo-14/slider/slide-1.jpg" alt="Slide Image" className="slide-image" />
                    <div className="intro-content">
                      <h2 className="intro-title">Welcome to Molla</h2>
                      <p className="intro-desc">The best eCommerce template for your online store.</p>
                      <a href="#" className="btn btn-primary">Shop Now</a>
                    </div>
                  </div>
                  <div className="intro-slide">
                    <img src="assets/images/demos/demo-14/slider/slide-2.jpg" alt="Slide Image" className="slide-image" />
                    <div className="intro-content">
                      <h2 className="intro-title">Discover Our Products</h2>
                      <p className="intro-desc">Find the perfect product for you.</p>
                      <a href="#" className="btn btn-primary">View Products</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-xxl-2 d-none d-xxl-block">
              <div className="banner banner-overlay  banner-content-stretch ">
                <a href="#">
                  <img src="assets/images/demos/demo-14/banners/banner-1.png" alt="Banner img desc" />
                </a>
                <div className="banner-content text-right">
                  <div className="price text-center">
                    <sup className="text-white">from</sup>
                    <span className="text-white">
                      <strong>$199</strong><sup className="text-white">,99</sup>
                    </span>
                  </div>
                  <a href="#" className="banner-link">Discover Now <i className="icon-long-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="products-view-wrapper">
                <div className="products-view">
                  <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/demos/demo-14/products/product-1.jpg" alt="Product" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Name</a>
                          </h2>
                          <div className="price-box">
                            <span className="product-price">$99.99</span>
                          </div>
                          <div className="product-action">
                            <a href="#" className="btn-icon-wish"><i className="icon-heart"></i></a>
                            <a href="#" className="btn-icon-quickview" data-toggle="modal" data-target="#quickview-modal"><i className="icon-eye"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/demos/demo-14/products/product-2.jpg" alt="Product" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Name</a>
                          </h2>
                          <div className="price-box">
                            <span className="product-price">$99.99</span>
                          </div>
                          <div className="product-action">
                            <a href="#" className="btn-icon-wish"><i className="icon-heart"></i></a>
                            <a href="#" className="btn-icon-quickview" data-toggle="modal" data-target="#quickview-modal"><i className="icon-eye"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/demos/demo-14/products/product-3.jpg" alt="Product" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Name</a>
                          </h2>
                          <div className="price-box">
                            <span className="product-price">$99.99</span>
                          </div>
                          <div className="product-action">
                            <a href="#" className="btn-icon-wish"><i className="icon-heart"></i></a>
                            <a href="#" className="btn-icon-quickview" data-toggle="modal" data-target="#quickview-modal"><i className="icon-eye"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/demos/demo-14/products/product-4.jpg" alt="Product" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Name</a>
                          </h2>
                          <div className="price-box">
                            <span className="product-price">$99.99</span>
                          </div>
                          <div className="product-action">
                            <a href="#" className="btn-icon-wish"><i className="icon-heart"></i></a>
                            <a href="#" className="btn-icon-quickview" data-toggle="modal" data-target="#quickview-modal"><i className="icon-eye"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="sidebar sidebar-shop">
                <div className="widget widget-clean">
                  <label>Filters:</label>
                  <a href="#" className="sidebar-filter-clear">Clean All</a>
                </div>
                <div className="widget">
                  <h3 className="widget-title">Categories</h3>
                  <ul className="widget-list">
                    <li><a href="#">Category 1</a></li>
                    <li><a href="#">Category 2</a></li>
                    <li><a href="#">Category 3</a></li>
                    <li><a href="#">Category 4</a></li>
                  </ul>
                </div>
                <div className="widget">
                  <h3 className="widget-title">Price</h3>
                  <div className="widget-price-slider">
                    <div id="price-slider"></div>
                    <div className="price-slider-amount">
                      <span className="from"></span>
                      <span className="to"></span>
                    </div>
                  </div>
                </div>
                <div className="widget">
                  <h3 className="widget-title">Color</h3>
                  <ul className="widget-list">
                    <li><a href="#">Red</a></li>
                    <li><a href="#">Blue</a></li>
                    <li><a href="#">Green</a></li>
                    <li><a href="#">Black</a></li>
                  </ul>
                </div>
                <div className="widget">
                  <h3 className="widget-title">Size</h3>
                  <ul className="widget-list">
                    <li><a href="#">Small</a></li>
                    <li><a href="#">Medium</a></li>
                    <li><a href="#">Large</a></li>
                    <li><a href="#">Extra Large</a></li>
                  </ul>
                </div>
                <div className="widget widget-banner">
                  <div className="banner banner-overlay">
                    <a href="#">
                      <img src="assets/images/demos/demo-14/banners/banner-2.jpg" alt="Banner img desc" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="widget">
                  <h4 className="widget-title">About Us</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <a href="#" className="btn btn-outline-primary-2">Read More</a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="widget">
                  <h4 className="widget-title">Contact Us</h4>
                  <ul className="contact-info">
                    <li>
                      <i className="icon-map-marker"></i>
                      123 Street Name, City, England
                    </li>
                    <li>
                      <i className="icon-phone"></i>
                      <a href="tel:#">+0123 456 789</a>
                    </li>
                    <li>
                      <i className="icon-envelope"></i>
                      <a href="mailto:">info@example.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="widget">
                  <h4 className="widget-title">Follow Us</h4>
                  <div className="social-icons">
                    <a href="#" className="social-icon" title="Facebook">
                      <i className="icon-facebook-f"></i>
                    </a>
                    <a href="#" className="social-icon" title="Twitter">
                      <i className="icon-twitter"></i>
                    </a>
                    <a href="#" className="social-icon" title="Instagram">
                      <i className="icon-instagram"></i>
                    </a>
                    <a href="#" className="social-icon" title="YouTube">
                      <i className="icon-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-left">
              <p>&copy; 2023 Molla. All Rights Reserved.</p>
            </div>
            <div className="footer-right">
              <ul className="footer-menu">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Refund Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up"></i>
      </button>

      <div className="mobile-menu-overlay"></div>
      <div className="mobile-menu-container">
        <div className="mobile-menu-wrapper">
          <div className="mobile-menu-header">
            <div className="container">
              <button className="mobile-menu-close">
                <i className="icon-close"></i>
              </button>
            </div>
          </div>
          <div className="mobile-menu-body">
            <div className="container">
              <ul className="mobile-menu-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="signin-modal" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">
                  <i className="icon-close"></i>
                </span>
              </button>
              <div className="form-box">
                <div className="form-tab">
                  <ul className="nav nav-pills nav-fill" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="true">Sign In</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="tab-content-5">
                    <div className="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="signin-tab">
                      <form action="#">
                        <div className="form-group">
                          <label htmlFor="singin-email">Username or email address *</label>
                          <input type="text" className="form-control" id="singin-email" name="singin-email" required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="singin-password">Password *</label>
                          <input type="password" className="form-control" id="singin-password" name="singin-password" required />
                        </div>
                        <div className="form-footer">
                          <button type="submit" className="btn btn-outline-primary-2">
                            <span>LOG IN</span>
                            <i className="icon-long-arrow-right"></i>
                          </button>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="signin-remember" />
                            <label className="custom-control-label" htmlFor="signin-remember">Remember Me</label>
                          </div>
                          <a href="#" className="forgot-link">Forgot Your Password?</a>
                        </div>
                      </form>
                      <div className="form-choice">
                        <p className="text-center">or sign in with</p>
                        <div className="row">
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login btn-g"></a>
                          </div>
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login btn-f"></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                      <form action="#">
                        <div className="form-group">
                          <label htmlFor="register-email">Your email address *</label>
                          <input type="email" className="form-control" id="register-email" name="register-email" required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="register-password">Password *</label>
                          <input type="password" className="form-control" id="register-password" name="register-password" required />
                        </div>
                        <div className="form-footer">
                          <button type="submit" className="btn btn-outline-primary-2">
                            <span>SIGN UP</span>
                            <i className="icon-long-arrow-right"></i>
                          </button>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="register-policy" required />
                            <label className="custom-control-label" htmlFor="register-policy">I agree to the <a href="#">privacy policy</a> *</label>
                          </div>
                        </div>
                      </form>
                      <div className="form-choice">
                        <p className="text-center">or sign in with</p>
                        <div className="row">
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login btn-g"></a>
                          </div>
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login btn-f">
                              <i className="icon-facebook-f"></i>
                              Login With Facebook
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container newsletter-popup-container mfp-hide" id="newsletter-popup-form">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="row no-gutters bg-white newsletter-popup-content">
              <div className="col-xl-3-5col col-lg-7 banner-content-wrap">
                <div className="banner-content text-center">
                  <img src="assets/images/popup/newsletter/logo.png" className="logo" alt="logo" width="60" height="15" />
                  <h2 className="banner-title">
                    get <span>25<light>%</light></span> off
                  </h2>
                  <p>Subscribe to the Molla eCommerce newsletter to receive timely updates from your favorite products.</p>
                  <form action="#">
                    <div className="input-group input-group-round">
                      <input type="email" className="form-control form-control-white" placeholder="Your Email Address" aria-label="Email Adress" required />
                      <div className="input-group-append">
                        <button className="btn" type="submit">
                          <span>go</span>
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="register-policy-2" required />
                    <label className="custom-control-label" htmlFor="register-policy-2">Do not show this popup again</label>
                  </div>
                </div>
              </div>
              <div className="col-xl-2-5col col-lg-5 ">
                <img src="assets/images/popup/newsletter/img-1.jpg" className="newsletter-img" alt="newsletter" />
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Home;
