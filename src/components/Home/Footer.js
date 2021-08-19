import React from "react";
import "./Footer.css";

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
                  <a
                    class="social-icon-link facebook"
                    href="https://www.facebook.com/hasanuddin.university/"
                    target="_blank"
                    aria-label="Facebook"
                    rel="noreferrer"
                  >
                    <i class="fab fa-facebook-f" />
                  </a>
                  <a
                    class="social-icon-link instagram"
                    href="https://www.instagram.com/hasanuddin_univ/"
                    target="_blank"
                    aria-label="Instagram"
                    rel="noreferrer"
                  >
                    <i class="fab fa-instagram" />
                  </a>
                  <a
                    class="social-icon-link youtube"
                    href="https://www.youtube.com/channel/UCRk4cMetUOgh8SJ73_Hr4Og"
                    target="_blank"
                    aria-label="Youtube"
                    rel="noreferrer"
                  >
                    <i class="fab fa-youtube" />
                  </a>
                  <a
                    class="social-icon-link twitter"
                    href="https://twitter.com/Hasanuddin_univ"
                    target="_blank"
                    aria-label="Twitter"
                    rel="noreferrer"
                  >
                    <i class="fab fa-twitter" />
                  </a>
                </div>
              </div>
            </section>
        </div>
      </div>
    </div>
  );
}

export default FooterMhs;
