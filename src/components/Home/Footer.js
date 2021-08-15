import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function FooterMhs() {
  return (
    <div className="footer-container" id="contacts">
      <section className="footer-subscription">
        {/* <p className="footer-subscription-heading">Universitas Hasanuddin</p> */}
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <section class="social-media">
            <h2>Contact Us</h2>
              <div class="social-media-wrap">
                <div class="social-icons">
                  <Link
                    class="social-icon-link facebook"
                    to="/"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <i class="fab fa-facebook-f" />
                  </Link>
                  <Link
                    class="social-icon-link instagram"
                    to="/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <i class="fab fa-instagram" />
                  </Link>
                  <Link
                    class="social-icon-link youtube"
                    to="/"
                    target="_blank"
                    aria-label="Youtube"
                  >
                    <i class="fab fa-youtube" />
                  </Link>
                  <Link
                    class="social-icon-link twitter"
                    to="/"
                    target="_blank"
                    aria-label="Twitter"
                  >
                    <i class="fab fa-twitter" />
                  </Link>
                </div>
              </div>
            </section>
        </div>
      </div>
    </div>
  );
}

export default FooterMhs;
