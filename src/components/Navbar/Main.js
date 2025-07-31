import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/images/Desktop.png'
import WOW from 'wowjs';
import { useTranslation } from 'react-i18next';

const locales = {
  en: { title: 'English' },
  fr: { title: 'French'},
  ar: { title: 'Arabic'}
}

const Navbar = ({languageChangeDetection}) => {
  const { t, i18n} = useTranslation();
  
  const [selectedLanguage, setSelectedLanguage] = useState('en');


  const location = useLocation()
  const path = location.pathname
  const [sticky, setSticky] = useState(false)
  const [menu, setmenu] = useState({});
  const [display, setDisplay] = useState(true);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const handleLanguageChange = async (language) => {
      setSelectedLanguage(language);
      languageChangeDetection(language);
      i18n.changeLanguage(language);
  };

  useEffect(() => {
    // Function to translate text
    handleLanguageChange('en');
  }, []);

  const activeMenu = () => {
    if (path === "/" || path === "/home-02" || path === "/home-03") {
      setmenu({ home: true })
    } else if (path === "/about" || path === "/team") {
      setmenu({ pages: true })
    } else if (path === "/service-01" || path === "/service-02" || path === "qa-testing" || path === "/it-management" || path === "cyber-security" || path === "/it-consultant" || path === "/infrastructure-plan") {
      setmenu({ services: true })
    } else if (path === "/projects" || path === "/project-details") {
      setmenu({ project: true })
    } else if (path === "/blog" || path === "/blog-details") {
      setmenu({ blog: true })
    } else if (path === "/contact") {
      setmenu({ contact: true })
    } else {
      setmenu({ home: true })
    }
  }

  useEffect(() => {
    if (windowSize[0] < 1200) {
      setDisplay(false)
    } else {
      setDisplay(true);
    }
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  useEffect(() => {
    window.scroll(0, 0)
    new WOW.WOW({
      live: false
    }).init();
    activeMenu()
  }, [path]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
      if (windowSize[0] < 1200) {
        setDisplay(false)
      } else {
        setDisplay(true);
      }
    };
    window.removeEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  

  const toggelMenu = () => {
    if (windowSize[0] < 1200) {
      setDisplay(!display);
    } else {
      setDisplay(true);
    }
  };
  const isSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 50 ? setSticky(true) : setSticky(false);
  }

  const navigate = () => {
    window.location.assign("https://calendly.com/sreeson");
  } 
  return (
    <>
      <div className="topbar">
        <div className="container-fluid">
          <p className="topbar__text">Welcome to SREESON</p>
          <ul className="topbar__info">
            <li>
              <i className="fa fa-envelope"></i>
              <Link to="mailto:info@sreeson.ca">info@sreeson.ca</Link>
            </li>
            <li>
              <i className="fa fa-map-marker"></i>
              {t('nav_bar.add_detail')}
            </li>
          </ul>
          <ul className="topbar__social">
            <li>
              <Link
                to="#"
                onClick={() =>
                  window.location.assign("https://twitter.com/SreesonCanada")
                }
              >
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() =>
                  window.location.assign(
                    "https://www.facebook.com/SreesonCanada/"
                  )
                }
              >
                <i className="fab fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() =>
                  window.location.assign(
                    "https://www.linkedin.com/company/sreeson-canada-inc/"
                  )
                }
              >
                <i class="fa-brands fa-linkedin"></i>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() =>
                  window.location.assign(
                    "https://www.instagram.com/sreeson_canada/"
                  )
                }
              >
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
            <li>
              <select value={selectedLanguage} onChange={(e) => handleLanguageChange(e.target.value)}>
              {
                Object.keys(locales).map((locale) => {
                  return <option key={locale} value={locale}>{locales[locale].title}</option>
                })
              }
                  </select>
                {/* {languages.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                ))} */}
            {/* <ul>
              {
                Object.keys(locales).map((locale) => {
                  return <li key={locale} onClick={() => handleLanguageChange(locale)}>{locales[locale].title}</li>
                })
              }
            </ul> */}
            </li>
          </ul>
        </div>
      </div>
      <nav
        className={`main-menu sticky-header ${
          sticky && "sticky-header--cloned sticky-fixed"
        }`}
      >
        <div className="container-fluid">
          <div className="main-menu__logo">
            <Link to="/">
              <img src={Logo} width="100" height="43"  alt="Sreeson" />
            </Link>
          </div>
          {display && (
            <ul className={`main-menu__list main-menu__mobile ${display && "block"}`}>
              <li
                className={`menu-item-has-children ${menu.home && "current"}`}
              >
                <Link to="/" onClick={() => toggelMenu()}>
                {t('nav_bar.home')}
                </Link>
                {/* <ul>
                                <li><Link to="/">Home One</Link></li>
                                <li><Link to="/home-02">Home Two</Link></li>
                                <li><Link to="/home-03">Home Three</Link></li>
                                <li className="menu-item-has-children"><Link to="/">Header Styles</Link>
                                    <ul>
                                        <li><Link to="/">Header One</Link></li>
                                        <li><Link to="/home-02">Header Two</Link></li>
                                        <li><Link to="/home-03">Header Three</Link></li>
                                    </ul>
                                </li>
                            </ul> */}
              </li>
              <li
                className={`menu-item-has-children ${menu.pages && "current"}`}
              >
                <Link to="/about" onClick={() => toggelMenu()}>
                {t('nav_bar.about_us')}
                </Link>
                {/* <ul>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/team">Our Team</Link>
                  </li>
                </ul> */}
              </li>
              <li
                className={`menu-item-has-children ${
                  menu.services && "current"
                }`}
              >
                <Link to="/services">{t('nav_bar.services')}</Link>
                <ul>
                  {/* <li>
                    <Link to="/service-01">Services 01</Link>
                  </li>
                  <li>
                    <Link to="/service-02">Services 02</Link>
                  </li> */}
                  <li>
                    <Link to="">{t('nav_bar.it_and_development')}</Link>
                    <ul>
                      <li>
                        <Link onClick={() => toggelMenu()} to="/Webapp">
                        {t('nav_bar.web_application')}
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => toggelMenu()} to="/mobileapp">
                        {t('nav_bar.mobile_app')}
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => toggelMenu()} to="/frontend">
                        {t('nav_bar.frontend_development')}
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => toggelMenu()} to="/Clouddev">
                        {t('nav_bar.cloud_devOps')}
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => toggelMenu()} to="/Chatbot">
                        {t('nav_bar.chatbot_development')}
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => toggelMenu()} to="/Bigdata">
                        {t('nav_bar.big_data')}
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => toggelMenu()} to="/qa-testing">
                        {t('nav_bar.qa_esting')}
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => toggelMenu()} to="/Cloudintegration">
                        {t('nav_bar.cloud_integration')}
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => toggelMenu()} to="/ITmerit">
                        {t('nav_bar.it_metrics_and_dashboard')}
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => toggelMenu()} to="/cyber-security">
                        {t('nav_bar.cyber_security')}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/it-consultant">
                      {t('nav_bar.it_consultant')}
                      </Link>
                    <ul>
                      <li>
                        <Link onClick={() => toggelMenu()} to="/hireing">
                          {t('nav_bar.hire_development')}
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => toggelMenu()} to="/microsoftenterprise">
                        {t('nav_bar.microsoft')}
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => toggelMenu()} to="/Iot">
                        {t('nav_bar.iot')}
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => toggelMenu()} to="/Ar">
                        {t('nav_bar.ar_vr')}
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => toggelMenu()} to="/Business">
                        {t('nav_bar.business_technology')}
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => toggelMenu()} to="/ProductPrototype">
                        {t('nav_bar.product_prototype')}
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => toggelMenu()} to="/ManagedServices">
                        {t('nav_bar.managed_services')}
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => toggelMenu()} to="/Enterprice">
                        {t('nav_bar.enterprise_mobility')}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/">
                      {t('nav_bar.processes')}
                      </Link>
                    <ul>
                      <li>
                        <Link onClick={() => toggelMenu()} to="/DevelopMethodology">
                        {t('nav_bar.development_methodology')}
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => toggelMenu()} to="/Delivery">
                        {t('nav_bar.delivery_models')}
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => toggelMenu()} to="/Pricing">
                          {t('nav_bar.pricing_models')}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* <li>
                  <Link to="/it-management">IT Management</Link>
                </li>
                <li>
                  <Link to="/infrastructure-plan">Infrastructure Plan</Link>
                </li> */}
                </ul>
              </li>

              <li
                className={`menu-item-has-children ${
                  menu.services && "current"
                }`}
              >
                <Link to="/">
                  {t('nav_bar.industries')}
                  </Link>
                <ul>
                  {/* <li>
                    <Link to="/service-01">Services 01</Link>
                  </li>
                  <li>
                    <Link to="/service-02">Services 02</Link>
                  </li> */}
                  <li>
                    <Link onClick={() => toggelMenu()} to="/Healthcare">
                    {t('nav_bar.healthcare')}
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => toggelMenu()} to="/Education">
                    {t('nav_bar.education_e_learning')}
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => toggelMenu()} to="/Social">
                    {t('nav_bar.social_network')}
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => toggelMenu()} to="/Retail">
                    {t('nav_bar.retail')}
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => toggelMenu()} to="/Manufactur">
                    {t('nav_bar.manufactring')}
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => toggelMenu()} to="/Ecommerce">
                    {t('nav_bar.e_commerce')}
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => toggelMenu()} to="/Energy">
                    {t('nav_bar.energy')}
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => toggelMenu()} to="/Travel">
                    {t('nav_bar.travel_hospitality')}
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => toggelMenu()} to="/RealEstate">
                    {t('nav_bar.real_estate')}
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => toggelMenu()} to="/Media">
                    {t('nav_bar.media_entertainment')}
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => toggelMenu()} to="/Logistics">
                    {t('nav_bar.logistics_distribution')}
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => toggelMenu()} to="/Construction">
                    {t('nav_bar.construction')}
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li
                className={`menu-item-has-children ${
                  menu.project && "current"
                }`}
              >
                <Link to="/projects">Projects</Link>
                <ul>
                  <li>
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link to="/project-details">Projects Details</Link>
                  </li>
                </ul>
              </li>
              <li
                className={`menu-item-has-children ${menu.blog && "current"}`}
              >
                <Link to="/blog">Blog</Link>
                <ul>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/blog-details">Blog Details</Link>
                  </li>
                </ul>
              </li> */}
              <li
                className={`menu-item-has-children ${
                  menu.contact && "current"
                }`}
              >
                <Link to="/contact" onClick={() => toggelMenu()}>
                {t('nav_bar.contact')}
                </Link>
              </li>
            </ul>
          )}
          <div className="main-menu__right">
            <Link
              to="#"
              className="mobile-nav__toggler"
              onClick={() => setDisplay(!display)}
            >
              <span></span>
              <span></span>
              <span></span>
            </Link>
            <Link
              to="#"
              className="search-toggler none"
            >
              <i className="icon-magnifying-glass"></i>
            </Link>
            <Link to="#" className="main-menu__cta" onClick={navigate}>
              <i className="fa fa-clock"></i>
              <span className="main-menu__cta__text">{t('nav_bar.schedule_meeting')}</span>
            </Link>
          </div>
        </div>
      </nav>
      {/* <div className={`search-popup ${search && "active"}`}>
          <div
            className="search-popup__overlay search-toggler"
            onClick={() => setSearch(false)}
          ></div>
          <div className="search-popup__content">
            <form action="#">
              <label htmlFor="search" className="sr-only">
                search here
              </label>
              <input type="text" id="search" placeholder="Search Here..." />
              <button
                type="submit"
                aria-label="search submit"
                className="thm-btn"
              >
                <span>
                  <i className="icon-magnifying-glass"></i>
                </span>
              </button>
            </form>
          </div>
        </div> */}
    </>
  );
}

export default Navbar