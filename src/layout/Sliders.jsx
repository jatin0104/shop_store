const Sliders = () => {
    return (
        <div className="row">
              <div className="col-xl-9 col-xxl-8 offset-lg-3 offset-xxl-2">
                <div className="intro-slider-container slider-container-ratio mb-2">
                  <div className="intro-slider owl-carousel owl-simple owl-nav-inside" data-toggle="owl" data-owl-options='{
                                    "nav": false, 
                                    "dots": true
                                }'>
                    <div className="intro-slide">
                      <figure className="slide-image">
                          <picture>
                              <source media="(max-width: 480px)" srcSet="/assets/images/demos/demo-14/slider/slide-1-480w.jpg" />
                              <img src="/assets/images/demos/demo-14/slider/slide-1.jpg" alt="Image Desc" />
                          </picture>
                      </figure>
                      <div className="intro-content">
                          <h3 className="intro-subtitle">New Arrivals</h3>
                          <h1 className="intro-title text-white">
                              The New Way <br />To Buy Furniture
                          </h1>
                          <div className="intro-text text-white">
                              Spring Collections 2019
                          </div>
                          <a href="category.html" className="btn btn-primary">
                              <span>Discover Now</span>
                              <i className="icon-long-arrow-right"></i>
                          </a>
                      </div>
                    </div>  
                    <div className="intro-slide">
                        <figure className="slide-image">
                            <picture>
                                <source media="(max-width: 480px)" srcSet="assets/images/demos/demo-14/slider/slide-2-480w.jpg" />
                                <img src="assets/images/demos/demo-14/slider/slide-2.jpg" alt="Image Desc" />
                            </picture>
                        </figure>

                        <div className="intro-content">
                            <h3 className="intro-subtitle">Hottest Deals</h3>
                            <h1 className="intro-title">
                                <span>Wherever You Go</span> <br />DJI Mavic 2 Pro
                            </h1>

                            <div className="intro-price">
                                <sup>from</sup>
                                <span>
                                    $1,948<sup>.99</sup>
                                </span>
                            </div>
                            <a href="category.html" className="btn btn-primary">
                                <span>Discover Here</span>
                                <i className="icon-long-arrow-right"></i>
                            </a>
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
    )
}

export default Sliders;