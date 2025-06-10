const Footer = () => {
    return (
      <>
      <div className="mb-4"></div>
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
      </>
    )
}

export default Footer;