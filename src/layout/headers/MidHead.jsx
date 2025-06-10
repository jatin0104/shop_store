const MidHead = () => {
    return (
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
                            datatoggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            datadisplay="static"
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
                            datatoggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            datadisplay="static"
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
    )
}

export default MidHead;