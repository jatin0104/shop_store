/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../../ProductCard';
import productsData from '../../products.json';
import TopHead from './TopHead';
import BottomHead from './BottomHead';
import MidHead from './MidHead';

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
          <TopHead />
          <MidHead />
          <BottomHead />
        </header>

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

      {/* <div className="container newsletter-popup-container mfp-hide" id="newsletter-popup-form">
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
      </div> */}

    </>
  );
};

export default Home;
