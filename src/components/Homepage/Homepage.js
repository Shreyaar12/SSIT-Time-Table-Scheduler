import "./Homepage.css";
import React from "react";

function Homepage() {
  return (
    <div>


      <header id="body-header">
        <nav>
          <div className="dropdown-menu text-right">
            <div className="bars">
              <i className="fas fa-bars"></i>
            </div>
            <div className="dropdown-list nav-menu">
              <ul className="no-list-style">
                <li>
                  <a href="#"> Home </a>
                </li>
                <li>
                  <a href="#about"> About </a>
                </li>
                <li>
                  <a href="#skills"> Skills </a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#education">Education</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <ul className="no-list-style horizontal-list text-center nav-menu">
            <li>
              <a href="#"> Home </a>
            </li>
            <li>
              <a href="#about"> About </a>
            </li>

            <li>
              <a href="#education">Features</a>
            </li>

            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#portfolio">Blog</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div id="name-social-container">
          <div className="text-center">
            <h1 id="my-name">IEEE SSIT Time Table App</h1>
          </div>
          <div>
            <ul className="no-list-style horizontal-list text-center social-icons">
              <li>
                <a href="#">
                  <img
                    id="link"
                    alt="Qries"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
                    width="25"
                    height="25"
                    className="jin"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="jin"
                    alt="Qries"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-color-icon.png"
                    width="25"
                    height="25"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="jin"
                    alt="Qries"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_Plus_logo_%282015-2019%29.svg"
                    width="25"
                    height="25"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="jin"
                    alt="Qries"
                    src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
                    width="25"
                    height="25"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="jin"
                    alt="Qries"
                    src="https://www.iconpacks.net/icons/2/free-quora-logo-icon-2439-thumb.png"
                    width="25"
                    height="25"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <section id="about">
          <div id="my-image">
            <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000020_1549743985_macbook_mouse.jpg" />
          </div>

          <div id="about-para">
            <p>
              This app is for xyz purposes have funn
              <span className="text-highlight">have fun </span>. have fun
              <span className="text-highlight">have fun</span> since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen .
            </p>
          </div>
        </section>

        {/* <!-- </div>

        </section> --> */}

        {/* <!-- <section id="experience">

            <h1 className="section-heading mb75px">
                <span>
                    <i className="fas fa-briefcase"></i>
                </span>
                <span>  </span>
            </h1>

            <div className="timeline">

                <div className="timeline-box ">
                    <div className="timeline-container">
                        <div className="timeline-logo">
                            <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000030_1550710829_ninjasicon.png">
                        </div>
                        <h3 className="experience-designation  m0 m-blue"> Designation </h3>
                        <h4 className="experience-company-name"> Company Name </h4>
                        <h5 className="experience-duration m0"> Month YYYY - Month YYYY </h5>

                        <p className="experience-description text-justify"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>
                
                <div className="timeline-box right ">
                    <div className="timeline-container">
                        <div className="timeline-logo">
                            <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000030_1550710829_ninjasicon.png">
                        </div>
                        <h3 className="experience-designation  m0 m-blue"> Designation </h3>
                        <h4 className="experience-company-name"> Company Name </h4>
                        <h5 className="experience-duration m0"> Month YYYY - Month YYYY </h5>
                        <p className="experience-description text-justify"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>

                <div className="timeline-box left ">
                    <div className="timeline-container">
                        <div className="timeline-logo">
                            <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000030_1550710829_ninjasicon.png">
                        </div>
                        <h3 className="experience-designation m0 m-blue"> Designation </h3>
                        <h4 className="experience-company-name"> Company Name </h4>
                        <h5 className="experience-duration m0"> Month YYYY - Month YYYY </h5>

                        <p className="experience-description text-justify"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>

                <div id="timeline-divider">
                    <div className="timeline-traveller">
                        <div>
                            <i className="fas fa-plane"></i>
                        </div>
                    </div>
                </div>

            </div>

        </section> --> */}

        <section id="education">
          <h1 className="section-heading mb75px">
            <span>
              <i className="fas fa-battery-full"></i>
            </span>
            <span> Features </span>
          </h1>

          <div className="timeline">
            <div className="timeline-box left">
              <div className="timeline-container">
                {/* <!-- <div className="timeline-logo">
                            <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000032_1550746413_iiitd_logo.png">
                        </div> --> */}
                <h3 className="experience-designation m0 m-blue">Degree</h3>
                {/* <!-- <h4 className="experience-company-name "> Institute Name </h4>
                        <h5 className="experience-duration m0"> Month YYYY - Month YYYY </h5> --> */}

                <p className="experience-description text-justify">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

            <div className="timeline-box right">
              <div className="timeline-container">
                {/* <!-- <div className="timeline-logo">
                            <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000032_1550746413_iiitd_logo.png">
                        </div> --> */}
                <h3 className="experience-designation m0 m-blue">Degree</h3>
                {/* <!-- <h4 className="experience-company-name "> Institute Name </h4>
                        <h5 className="experience-duration m0"> Month YYYY - Month YYYY </h5> --> */}
                <p className="experience-description text-justify">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

            <div className="timeline-box left">
              <div className="timeline-container">
                {/* <!-- <div className="timeline-logo">
                            <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000032_1550746413_iiitd_logo.png">
                        </div> --> */}
                <h3 className="experience-designation m0 m-blue">Degree</h3>
                {/* <!--<h4 className="experience-company-name "> Institute Name </h4> 
                        <h5 className="experience-duration m0"> Month YYYY - Month YYYY </h5> --> */}

                <p className="experience-description text-justify">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

            <div id="timeline-divider">
              <div className="timeline-traveller">
                <div>
                  <i className="fas fa-car-side"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <h1 className="section-heading mb75px">
            <span>
              <i className="fas fa-th-list"></i>
            </span>
            <span> Projects by IEEE SSIT </span>
          </h1>

          <div id="portfolio-container">
            <div className="portfolio-image-container">
              <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000025_1550237330_codezen_2.png" />
              <div className="portfolio-details">
                <p>Write here basic details about the project.</p>
              </div>
            </div>
            <div className="portfolio-image-container">
              <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000025_1550237330_codezen_2.png" />
              <div className="portfolio-details">
                <p>Write here basic details about the project.</p>
              </div>
            </div>
            <div className="portfolio-image-container">
              <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000025_1550237330_codezen_2.png" />
              <div className="portfolio-details">
                <p>Write here basic details about the project.</p>
              </div>
            </div>
            <div className="portfolio-image-container">
              <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000024_1550237299_codezen.png" />
              <div className="portfolio-details">
                <p>Write here basic details about the project.</p>
              </div>
            </div>
            <div className="portfolio-image-container">
              <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000024_1550237299_codezen.png" />
              <div className="portfolio-details">
                <p>Write here basic details about the project.</p>
              </div>
            </div>
            <div className="portfolio-image-container">
              <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000024_1550237299_codezen.png" />
              <div className="portfolio-details">
                <p>Write here basic details about the project.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <h1 className="section-heading mb75px">
            <span>
              <i className="fas fa-th-list"></i>
            </span>
            <span> Blogs by IEEE SSIT </span>
          </h1>

          <div id="portfolio-container">
            <div className="portfolio-image-container">
              <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000025_1550237330_codezen_2.png" />
              <div className="portfolio-details">
                <p>Write here basic details about the project.</p>
              </div>
            </div>
            <div className="portfolio-image-container">
              <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000025_1550237330_codezen_2.png" />
              <div className="portfolio-details">
                <p>Write here basic details about the project.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <h1 className="section-heading mb50px">
            <span>
              <i className="far fa-address-card"></i>
            </span>
            <span> Contact </span>
          </h1>
          <div id="contact-container">
            <div id="contact-form-container">
              <form id="contact-form">
                <input
                  id="input-name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  id="input-email"
                  name="input-email"
                  type="text"
                  required
                  placeholder="Your Email"
                />
                <textarea
                  id="input-message"
                  name="input-message"
                  rows="2"
                  cols="40"
                  placeholder="Message"
                ></textarea>
                <button className="sub-btn" type="submit">
                  SEND MESSAGE
                </button>
              </form>
            </div>
            <div id="my-details-container">
              <h3>Get In touch</h3>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>

              <h3>Address</h3>
              <div className="my-details-info-container">
                <i className="fas fa-map-marker-alt"></i>
                <span>Vellore, India</span>
              </div>
              <div className="my-details-info-container">
                <i className="fas fa-mobile-alt"></i>
                <span>9999999999</span>
              </div>
              <div className="my-details-info-container">
                <i className="far fa-envelope"></i>
                <span>ssit@vit.com</span>
              </div>
            </div>
          </div>

          <div className="text-center social-icons">
            <ul className="no-list-style horizontal-list">
              <li>
                <a href="https://www.instagram.com/ieeessit/?hl=en">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/ieee-ssit-vit/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/channel/UCytURJu5gyXDvJB3axWGFzQ"
                  target="_blank"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </li>

              <li>
                <a href="https://www.facebook.com/SSITVIT/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Homepage;
