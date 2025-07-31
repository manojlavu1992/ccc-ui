import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/images/Desktop.png';
import { useTranslation } from 'react-i18next';
// import emailjs from 'emailjs-com';

const Footer = () => {
  const { t} = useTranslation();
    const location = useLocation();
    const [footerPadding, setfooterPadding] = useState(false);
    useEffect(() => {
      if(location.pathname === "/" || location.pathname === "/service-01"){
        setfooterPadding(true)
      }else{
        setfooterPadding(false)
      }
    }, [location])
    
    return (
      <>
        <div
          className={`footer-main section-padding--bottom ${
            footerPadding ? "footer-main--top-padding" : "section-padding--top"
          }`}
        >
          <div className="container">
            <div className="row gutter-y-30">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="footer-widget footer-widget--about">
                  <Link to="/" className="footer-widget__logo">
                    <img src={Logo} width="200" height="70" alt="Sreeson" />
                  </Link>
                  <p className="footer-widget__text">
                    {t('footer_page.footer_para_1')}
                  </p>
                  <ul className="footer-widget__social">
                    <li>
                      <Link
                        to="#"
                        onClick={() =>
                          window.location.assign(
                            "https://twitter.com/SreesonCanada"
                          )
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
                        <i className="fab fa-facebook-f"></i>
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
                        <i className="fa-brands fa-linkedin"></i>
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
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="footer-widget footer-widget--links">
                  <h3 className="footer-widget__title">{t('footer_page.service')}</h3>
                  <ul className="footer-widget__links">
                    <li>
                      <Link to="/cyber-security">{t('footer_page.cyber')}</Link>
                    </li>
                    <li>
                      <Link to="/it-management">{t('footer_page.it_man')}</Link>
                    </li>
                    <li>
                      <Link to="/qa-testing">{t('footer_page.qa')}</Link>
                    </li>
                    <li>
                      <Link to="/infrastructure-plan">{t('footer_page.infra')}</Link>
                    </li>
                    <li>
                      <Link to="/it-consultant">{t('footer_page.it_cons')}</Link>
                    </li>
                    <li>
                      <Link to="/Webapp">{t('footer_page.web_app')}</Link>
                    </li>
                    <li>
                      <Link to="/mobileapp">{t('footer_page.mob_app')}</Link>
                    </li>
                    <li>
                      <Link to="/hireing">{t('footer_page.hire_dev')}</Link>
                    </li>
                    <li>
                      <Link to="/microsoftenterprise">{t('footer_page.microsoft')} </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="footer-widget footer-widget--links">
                  <h3 className="footer-widget__title">{t('footer_page.industry')}</h3>
                  <ul className="footer-widget__links">
                    <li>
                      <Link to="/Healthcare">{t('footer_page.health')}</Link>
                    </li>
                    <li>
                      <Link to="/Education">{t('footer_page.elearn')}</Link>
                    </li>
                    <li>
                      <Link to="/Social">{t('footer_page.social_net')}</Link>
                    </li>
                    <li>
                      <Link to="/Retail">{t('footer_page.retail')}</Link>
                    </li>
                    <li>
                      <Link to="/Manufactur">{t('footer_page.manufac')}</Link>
                    </li>
                    <li>
                      <Link to="/Ecommerce">{t('footer_page.ecomm')}</Link>
                    </li>
                    <li>
                      <Link to="/Energy">{t('footer_page.energy')}</Link>
                    </li>
                    <li>
                      <Link to="/Travel">{t('footer_page.travel')}</Link>
                    </li>
                    <li>
                      <Link to="/RealEstate">{t('footer_page.real_est')}</Link>
                    </li>
                    <li>
                      <Link to="/Media">{t('footer_page.media')}</Link>
                    </li>
                    <li>
                      <Link to="/Logistics">{t('footer_page.logistics')}</Link>
                    </li>
                    <li>
                      <Link to="/Construction">{t('footer_page.construction')}</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="footer-widget footer-widget--contact">
                  <h3 className="footer-widget__title">{t('footer_page.contact_detail')}</h3>
                  <ul className="footer-widget__contact">
                    {/* <li>
                                        <i className="fa fa-phone"></i>
                                        <Link to="tel:+8898006802">+ 88 ( 9800 ) 6802</Link>
                                    </li> */}
                    <li>
                      <i className="fa fa-envelope"></i>
                      <Link to="mailto:needhelp@company.com">
                        {t('footer_page.mail_to')}
                      </Link>
                    </li>
                    <li>
                      <i className="fa fa-map-marker-alt"></i>
                      {t('footer_page.address_det')}
                      <br />
                      {t('footer_page.state')}
                    </li>
                  </ul>
                  <div className="footer-widget footer-widget--newsletter">
                    <h3 className="footer-widget__title">{t('footer_page.subscribe')}</h3>
                    <p className="footer-widget__text">
                      {t('footer_page.sign_up')}
                    </p>

                    <form
                      action="#"
                      className="footer-widget__newsletter mc-form"
                      data-url="ADD_YOUR_MAILCHIMP_FORM_URL_HERE"
                    >
                      <input
                        type="email"
                        name="EMAIL"
                        placeholder="Enter Your Email"
                      />
                      <button className="thm-btn footer-widget__newsletter__btn">
                        <span>{t('footer_page.register')}</span>
                      </button>
                    </form>
                    <div className="mc-form__response"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>
              &copy; {new Date().getFullYear()} {t('footer_page.sreeson')}.
              <span className="dynamic-year"></span> {t('footer_page.rights_reserved')}
            </p>
          </div>
        </div>
      </>
    );
}

export default Footer