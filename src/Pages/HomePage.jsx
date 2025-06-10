import Sliders from "../layout/Sliders";
const HomePage = () => {
  return (
    <main className="main">
      <div className="mb-lg-2"></div>
      <div className="container-fluid">
        <Sliders />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-xxl-12">
            <div className="mb-3"></div>
            <div className="owl-carousel owl-simple brands-carousel" data-toggle="owl"
              data-owl-options='{
                                "nav": false, 
                                "dots": false,
                                "margin": 20,
                                "loop": true,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "420": {
                                        "items":3
                                    },
                                    "600": {
                                        "items":4
                                    },
                                    "900": {
                                        "items":5
                                    },
                                    "1600": {
                                        "items":6,
                                        "nav": true
                                    }
                                }
                            }'>
              <a href="#" className="brand">
                <img src="assets/images/brands/1.png" alt="Brand Name" />
              </a>

              <a href="#" className="brand">
                <img src="assets/images/brands/2.png" alt="Brand Name" />
              </a>

              <a href="#" className="brand">
                <img src="assets/images/brands/3.png" alt="Brand Name" />
              </a>

              <a href="#" className="brand">
                <img src="assets/images/brands/4.png" alt="Brand Name" />
              </a>

              <a href="#" className="brand">
                <img src="assets/images/brands/5.png" alt="Brand Name" />
              </a>

              <a href="#" className="brand">
                <img src="assets/images/brands/6.png" alt="Brand Name" />
              </a>

              <a href="#" className="brand">
                <img src="assets/images/brands/7.png" alt="Brand Name" />
              </a>
            </div>

            <div className="mb-5"></div>

            <div className="bg-lighter trending-products">
              <div className="heading heading-flex mb-3">
                <div className="heading-left">
                  <h2 className="title">Trending Today</h2>
                </div>

                <div className="heading-right">
                  <ul className="nav nav-pills justify-content-center" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="trending-all-link" data-toggle="tab" href="#trending-all-tab" role="tab" aria-controls="trending-all-tab" aria-selected="true">All</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="trending-elec-link" data-toggle="tab" href="#trending-elec-tab" role="tab" aria-controls="trending-elec-tab" aria-selected="false">Electronics</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="trending-furn-link" data-toggle="tab" href="#trending-furn-tab" role="tab" aria-controls="trending-furn-tab" aria-selected="false">Furniture</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="trending-cloth-link" data-toggle="tab" href="#trending-cloth-tab" role="tab" aria-controls="trending-cloth-tab" aria-selected="false">Clothes</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="trending-acc-link" data-toggle="tab" href="#trending-acc-tab" role="tab" aria-controls="trending-acc-tab" aria-selected="false">Accessories</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="tab-content tab-content-carousel">
                <div className="tab-pane p-0 fade show active" id="trending-all-tab" role="tabpanel" aria-labelledby="trending-all-link">
                  <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl"
                    data-owl-options='{
                                            "nav": false, 
                                            "dots": true,
                                            "margin": 20,
                                            "loop": true,
                                            "responsive": {
                                                "0": {
                                                    "items":1
                                                },
                                                "480": {
                                                    "items":2
                                                },
                                                "768": {
                                                    "items":3
                                                },
                                                "992": {
                                                    "items":4
                                                },
                                                "1200": {
                                                    "items":3,
                                                    "nav": true
                                                },
                                                "1600": {
                                                    "items":5,
                                                    "nav": true
                                                }
                                            }
                                        }'>
                    <div className="product text-center">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-14/products/product-1.jpg" alt="Product image" className="product-image" />
                        </a>

                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>
                      </figure>

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Furniture</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">Butler Stool Ladder</a></h3>
                        <div className="product-price">
                          <span className="new-price">$251.99</span>
                          <span className="old-price">Was $290.00</span>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: '100%' }}></div>
                          </div>
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>
                      </div>
                    </div>

                    <div className="product text-center">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-14/products/product-2.jpg" alt="Product image" className="product-image" />
                        </a>

                        <div className="product-countdown" data-until="+55h" data-relative="true" data-labels-short="true"></div>

                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>
                      </figure>

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Electronics</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">Bose - SoundSport wireless headphones</a></h3>
                        <div className="product-price">
                          <span className="new-price">$179.99</span>
                          <span className="old-price">Was $199.00</span>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: '100%' }}></div>
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>

                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{ background: '#69b4ff' }}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{ background: '#ff887f' }}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                        </div>
                      </div>
                    </div>

                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img src="assets/images/demos/demo-14/products/product-3.jpg" alt="Product image" className="product-image" />
                        </a>

                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>
                      </figure>

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Furniture</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">Can 2-Seater Sofa frame charcoal</a></h3>
                        <div className="product-price">
                          $3,050.00
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: '60%' }}></div>
                          </div>
                          <span className="ratings-text">( 8 Reviews )</span>
                        </div>

                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{ background: '#b58555' }}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{ background: '#93a6b0' }}><span className="sr-only">Color name</span></a>
                        </div>
                      </div>
                    </div>

                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img src="assets/images/demos/demo-14/products/product-4.jpg" alt="Product image" className="product-image" />
                        </a>

                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>
                      </figure>

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Clothes</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">Tan suede biker jacket</a></h3>
                        <div className="product-price">
                          $240.00
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: '80%' }}></div>
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                      </div>
                    </div>

                    <div className="product text-center">
                      <figure className="product-media">
                        <span className="product-label label-top">Top</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-14/products/product-5.jpg" alt="Product image" className="product-image" />
                        </a>

                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>
                      </figure>

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Electronics</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">Sony - Class LED 2160p Smart <br />4K Ultra HD</a></h3>
                        <div className="product-price">
                          $1,699.99
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: '80%' }}></div>
                          </div>
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                      </div>
                    </div>

                    <div className="product text-center">
                      <figure className="product-media">
                        <span className="product-label label-top">Top</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-14/products/product-6.jpg" alt="Product image" className="product-image" />
                        </a>

                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>
                      </figure>

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>
                        <div className="product-price">
                          $1,199.99
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: '100%' }}></div>
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane p-0 fade" id="trending-elec-tab" role="tabpanel" aria-labelledby="trending-elec-link">
                  <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl"
                    data-owl-options='{
                                            "nav": false, 
                                            "dots": true,
                                            "margin": 20,
                                            "loop": true,
                                            "responsive": {
                                                "0": {
                                                    "items":1
                                                },
                                                "480": {
                                                    "items":2
                                                },
                                                "768": {
                                                    "items":3
                                                },
                                                "992": {
                                                    "items":4
                                                },
                                                "1200": {
                                                    "items":3,
                                                    "nav": true
                                                },
                                                "1600": {
                                                    "items":5,
                                                    "nav": true
                                                }
                                            }
                                        }'>
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img src="assets/images/demos/demo-14/products/product-3.jpg" alt="Product image" className="product-image" />
                        </a>

                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>
                      </figure>

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Furniture</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">Can 2-Seater Sofa frame charcoal</a></h3>
                        <div className="product-price">
                          $3,050.00
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: '60%' }}></div>
                          </div>
                          <span className="ratings-text">( 8 Reviews )</span>
                        </div>

                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{ background: '#b58555' }}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{ background: '#93a6b0' }}><span className="sr-only">Color name</span></a>
                        </div>
                      </div>
                    </div>

                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img src="assets/images/demos/demo-14/products/product-4.jpg" alt="Product image" className="product-image" />
                        </a>

                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>
                      </figure>

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Clothes</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">Tan suede biker jacket</a></h3>
                        <div className="product-price">
                          $240.00
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: '80%' }}></div>
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                      </div>
                    </div>

                    <div className="product text-center">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-14/products/product-1.jpg" alt="Product image" className="product-image" />
                        </a>

                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>
                      </figure>

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Furniture</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">Butler Stool Ladder</a></h3>
                        <div className="product-price">
                          <span className="new-price">$251.99</span>
                          <span className="old-price">Was $290.00</span>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: '100%' }}></div>
                          </div>
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>
                      </div>
                    </div>

                    <div className="product text-center">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-14/products/product-2.jpg" alt="Product image" className="product-image" />
                        </a>

                        <div className="product-countdown" data-until="+55h" data-relative="true" data-labels-short="true"></div>

                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>
                      </figure>

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Electronics</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">Bose - SoundSport wireless headphones</a></h3>
                        <div className="product-price">
                          <span className="new-price">$179.99</span>
                          <span className="old-price">Was $199.00</span>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: '100%' }}></div>
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>

                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{ background: '#69b4ff' }}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{ background: '#ff887f' }}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                        </div>
                      </div>
                    </div>

                    <div className="product text-center">
                      <figure className="product-media">
                        <span className="product-label label-top">Top</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-14/products/product-6.jpg" alt="Product image" className="product-image" />
                        </a>

                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>
                      </figure>

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>
                        <div className="product-price">
                          $1,199.99
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: '100%' }}></div>
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane p-0 fade" id="trending-furn-tab" role="tabpanel" aria-labelledby="trending-furn-link">
                  <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl"
                    data-owl-options='{
                                            "nav": false, 
                                            "dots": true,
                                            "margin": 20,
                                            "loop": true,
                                            "responsive": {
                                                "0": {
                                                    "items":1
                                                },
                                                "480": {
                                                    "items":2
                                                },
                                                "768": {
                                                    "items":3
                                                },
                                                "992": {
                                                    "items":4
                                                },
                                                "1200": {
                                                    "items":3,
                                                    "nav": true
                                                },
                                                "1600": {
                                                    "items":5,
                                                    "nav": true
                                                }
                                            }
                                        }'>
                    <div className="product text-center">
                      <figure className="product-media">
                        <span className="product-label label-top">Top</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-14/products/product-6.jpg" alt="Product image" className="product-image"  />
                        </a>

                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>
                      </figure>

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>
                        <div className="product-price">
                          $1,199.99
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: '100%' }}></div>
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                      </div>
                    </div>

                    <div className="product text-center">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-14/products/product-2.jpg" alt="Product image" className="product-image" />
                        </a>

                        <div className="product-countdown" data-until="+55h" data-relative="true" data-labels-short="true"></div>

                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>
                      </figure>

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Electronics</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">Bose - SoundSport wireless headphones</a></h3>
                        <div className="product-price">
                          <span className="new-price">$179.99</span>
                          <span className="old-price">Was $199.00</span>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: '100%' }}></div>
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>

                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{ background: '#69b4ff' }}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{ background: '#ff887f' }}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                        </div>
                      </div>
                    </div>

                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img src="assets/images/demos/demo-14/products/product-3.jpg" alt="Product image" className="product-image" />
                        </a>

                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>
                      </figure>

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Furniture</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">Can 2-Seater Sofa frame charcoal</a></h3>
                        <div className="product-price">
                          $3,050.00
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: '60%' }}></div>
                          </div>
                          <span className="ratings-text">( 8 Reviews )</span>
                        </div>

                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{ background: '#b58555' }}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{ background: '#93a6b0' }}><span className="sr-only">Color name</span></a>
                        </div>
                      </div>
                    </div>

                    <div className="product text-center">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-14/products/product-1.jpg" alt="Product image" className="product-image" />
                        </a>

                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>
                      </figure>

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Furniture</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">Butler Stool Ladder</a></h3>
                        <div className="product-price">
                          <span className="new-price">$251.99</span>
                          <span className="old-price">Was $290.00</span>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: '100%' }}></div>
                          </div>
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>
                      </div>
                    </div>

                    <div className="product text-center">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-14/products/product-2.jpg" alt="Product image" className="product-image" />
                        </a>

                        <div className="product-countdown" data-until="+55h" data-relative="true" data-labels-short="true"></div>

                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>
                      </figure>

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Electronics</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">Bose - SoundSport wireless headphones</a></h3>
                        <div className="product-price">
                          <span className="new-price">$179.99</span>
                          <span className="old-price">Was $199.00</span>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: '100%' }}></div>
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>

                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{ background: '#69b4ff' }}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{ background: '#ff887f' }}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                        </div>
                      </div>
                    </div>

                    <div className="product text-center">
                      <figure className="product-media">
                        <span className="product-label label-top">Top</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-14/products/product-6.jpg" alt="Product image" className="product-image" />
                        </a>

                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>
                      </figure>

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>
                        <div className="product-price">
                          $1,199.99
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: '100%' }}></div>
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane p-0 fade" id="trending-cloth-tab" role="tabpanel" aria-labelledby="trending-cloth-link">
                  <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl"
                    data-owl-options='{
                                            "nav": false, 
                                            "dots": true,
                                            "margin": 20,
                                            "loop": true,
                                            "responsive": {
                                                "0": {
                                                    "items":1
                                                },
                                                "480": {
                                                    "items":2
                                                },
                                                "768": {
                                                    "items":3
                                                },
                                                "992": {
                                                    "items":4
                                                },
                                                "1200": {
                                                    "items":3,
                                                    "nav": true
                                                },
                                                "1600": {
                                                    "items":5,
                                                    "nav": true
                                                }
                                            }
                                        }'>
                    <div className="product text-center">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-14/products/product-1.jpg" alt="Product image" className="product-image" />
                        </a>

                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>
                      </figure>

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Furniture</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">Butler Stool Ladder</a></h3>
                        <div className="product-price">
                          <span className="new-price">$251.99</span>
                          <span className="old-price">Was $290.00</span>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: '100%' }}></div>
                          </div>
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>
                      </div>
                    </div>

                    <div className="product text-center">
                      <figure className="product-media">
                        <span className="product-label label-top">Top</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-14/products/product-5.jpg" alt="Product image" className="product-image" />
                        </a>

                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>
                      </figure>

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Electronics</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">Sony - Class LED 2160p Smart <br />4K Ultra HD</a></h3>
                        <div className="product-price">
                          $1,699.99
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: '80%' }}></div>
                          </div>
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                      </div>
                    </div>

                    <div className="product text-center">
                      <figure className="product-media">
                        <span className="product-label label-top">Top</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-14/products/product-6.jpg" alt="Product image" className="product-image" />
                        </a>

                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>
                      </figure>

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>
                        <div className="product-price">
                          $1,199.99
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: '100%' }}></div>
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane p-0 fade" id="trending-acc-tab" role="tabpanel" aria-labelledby="trending-acc-link">
                  <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl"
                    data-owl-options='{
                                            "nav": false, 
                                            "dots": true,
                                            "margin": 20,
                                            "loop": true,
                                            "responsive": {
                                                "0": {
                                                    "items":1
                                                },
                                                "480": {
                                                    "items":2
                                                },
                                                "768": {
                                                    "items":3
                                                },
                                                "992": {
                                                    "items":4
                                                },
                                                "1200": {
                                                    "items":3,
                                                    "nav": true
                                                },
                                                "1600": {
                                                    "items":5,
                                                    "nav": true
                                                }
                                            }
                                        }'>
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img src="assets/images/demos/demo-14/products/product-4.jpg" alt="Product image" className="product-image" />
                        </a>

                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>
                      </figure>

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Clothes</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">Tan suede biker jacket</a></h3>
                        <div className="product-price">
                          $240.00
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: '80%' }}></div>
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                      </div>
                    </div>

                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img src="assets/images/demos/demo-14/products/product-3.jpg" alt="Product image" className="product-image" />
                        </a>

                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>
                      </figure>

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Furniture</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">Can 2-Seater Sofa frame charcoal</a></h3>
                        <div className="product-price">
                          $3,050.00
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: '60%' }}></div>
                          </div>
                          <span className="ratings-text">( 8 Reviews )</span>
                        </div>

                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{ background: '#b58555' }}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{ background: '#93a6b0' }}><span className="sr-only">Color name</span></a>
                        </div>
                      </div>
                    </div>

                    <div className="product text-center">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-14/products/product-2.jpg" alt="Product image" className="product-image" />
                        </a>

                        <div className="product-countdown" data-until="+55h" data-relative="true" data-labels-short="true"></div>

                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>
                      </figure>

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Electronics</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">Bose - SoundSport wireless headphones</a></h3>
                        <div className="product-price">
                          <span className="new-price">$179.99</span>
                          <span className="old-price">Was $199.00</span>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: '100%' }}></div>
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>

                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{ background: '#69b4ff' }}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{ background: '#ff887f' }}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                        </div>
                      </div>
                    </div>

                    <div className="product text-center">
                      <figure className="product-media">
                        <span className="product-label label-top">Top</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-14/products/product-6.jpg" alt="Product image" className="product-image" />
                        </a>

                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div>

                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>
                      </figure>

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>
                        <div className="product-price">
                          $1,199.99
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: '100%' }}></div>
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
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
    </main>
  )
}

export default HomePage;