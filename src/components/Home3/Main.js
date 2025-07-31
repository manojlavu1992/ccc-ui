import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import BG1 from '../../assets/images/background/slider-3-1.jpg'
import BG2 from '../../assets/images/background/slider-3-2.jpg'
import BG3 from '../../assets/images/background/service-1-bg-1.png'
import BG4 from '../../assets/images/shapes/testi-bg-2-1.png'
import AnimatedNumber from "animated-number-react";
import { useTranslation } from 'react-i18next';

const Home3 = () => {
  const { t} = useTranslation();
  const [ytShow, setytShow] = useState(false)
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 141 ? setSticky(true) : setSticky(false);
  }
  const logoOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true,
    navText: ["<span class=\"fa-solid fa-angle-left\"></span>", "<span class=\"fa-solid fa-angle-right\"></span>"],
    dots: false,
    margin: 30,
    items: 2,
    smartSpeed: 700,
    responsive: {
      0: {
        margin: 30,
        items: 2
      },
      375: {
        margin: 30,
        items: 2
      },
      575: {
        margin: 30,
        items: 3
      },
      767: {
        margin: 50,
        items: 4
      },
      991: {
        margin: 40,
        items: 5
      },
      1199: {
        margin: 80,
        items: 5
      }
    }
  }
  const serviceOptions = {
    loop: false,
    nav: true,
    dots: false,
    items: 1,
    navText: ["<span class=\"fa fa-angle-left\"></span>", "<span class=\"fa fa-angle-right\"></span>"],
    margin: 0,
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      768: {
        items: 1,
        margin: 30
      },
      1200: {
        items: 2,
        margin: 30
      },
      1700: {
        items: 3,
        margin: 30
      }
    }
  }
  const sliderOptions = {
    loop: true,
    items: 1,
    navText: ["<span class=\"fa-solid fa-angle-left\"></span>", "<span class=\"fa-solid fa-angle-right\"></span>"],
    margin: 0,
    dots: true,
    nav: true,
    animateOut: "slideOutDown",
    animateIn: "fadeIn",
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: false
  }
  const projectOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: false,
    navText: ["<span class=\"fa-solid fa-angle-left\"></span>", "<span class=\"fa-solid fa-angle-right\"></span>"],
    dots: false,
    margin: 0,
    items: 1,
    smartSpeed: 700,
    responsive: {
      0: {
        margin: 0,
        items: 1
      },
      768: {
        margin: 30,
        items: 2
      },
      992: {
        margin: 30,
        items: 3
      },
      1200: {
        margin: 30,
        items: 4
      }
    }
  }
  return (
    <>
      <div className="header-three">
        <div className="topbar">
          <div className="container-fluid">
            <p className="topbar__text">{t("home_3_page.welcome_header")}</p>
            <ul className="topbar__info">
              <li>
                <i className="fa fa-envelope"></i>
                <Link to="mailto:info@sreeson.ca">{t("home_3_page.home_email")}</Link>
              </li>
              <li>
                <i className="fa fa-map-marker"></i>
                {t("home_3_page.address_header")}
              </li>
            </ul>
            <ul className="topbar__social">
              <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
              <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
              <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li>
              <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
            </ul>
          </div>
        </div>
        <nav className={`main-menu sticky-header ${sticky && "sticky-header--cloned sticky-fixed"}`}>
          <div className="container-fluid">
            <div className="main-menu__logo">
              <Link to="/">
                <img src="assets/images/logo-light.png" width="98" height="33" alt="Sreeson" />
              </Link>
            </div>

            <ul className="main-menu__list">
              <li className="menu-item-has-children current">
                <Link to="/">{t("home_3_page.home_header")}</Link>
                <ul>
                  <li><Link to="/">{t("home_3_page.home_one")}</Link></li>
                  <li><Link to="/home-02">{t("home_3_page.home_two")}</Link></li>
                  <li><Link to="/home-03">{t("home_3_page.home_three")}</Link></li>
                  <li className="menu-item-has-children"><Link to="/">{t("home_3_page.header_styles")}</Link>
                    <ul>
                      <li><Link to="/">{t("home_3_page.header_one")}</Link></li>
                      <li><Link to="/home-02">{t("home_3_page.header_two")}</Link></li>
                      <li><Link to="/home-03">{t("home_3_page.header_three")}</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link to="#">{t("home_3_page.pages_header")}</Link>
                <ul>
                  <li><Link to="/about">{t("home_3_page.about_us")}</Link></li>
                  <li><Link to="/team">{t("home_3_page.our_team")}</Link></li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link to="/service-01">{t("home_3_page.services")}</Link>
                <ul>
                  <li><Link to="/service-01">{t("home_3_page.services_one")}</Link></li>
                  <li><Link to="/service-02">{t("home_3_page.services_two")}</Link></li>
                  <li><Link to="/cyber-security">{t("home_3_page.cyber_security")}</Link></li>
                  <li><Link to="/it-management">{t("home_3_page.it_management")}</Link></li>
                  <li><Link to="/qa-testing">{t("home_3_page.testing")}</Link></li>
                  <li><Link to="/infrastructure-plan">{t("home_3_page.infrastructure_plan")}</Link></li>
                  <li><Link to="/it-consultent">{t("home_3_page.it_consultent")}</Link></li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link to="/projects">{t("home_3_page.projects_header")}</Link>
                <ul>
                  <li><Link to="/projects">"{t("home_3_page.projects")}"</Link></li>
                  <li><Link to="/project-details">{t("home_3_page.project_details")}</Link></li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link to="/blog">{t("home_3_page.blog_header")}</Link>
                <ul>
                  <li><Link to="/blog">{t("home_3_page.blog")}"</Link></li>
                  <li><Link to="/blog-details">{t("home_3_page.blog_details")}</Link></li>
                </ul>
              </li>
              <li><Link to="/contact">{t("home_3_page.contact")}"</Link></li>
            </ul>

            <div className="main-menu__right">
              <Link to="#" className="mobile-nav__toggler">
                <span></span>
                <span></span>
                <span></span>
              </Link>
              <Link to="#" className="search-toggler">
                <i className="icon-magnifying-glass"></i>
              </Link>
              <Link to="tel:+9288009860" className="main-menu__cta">
                <i className="fa fa-phone-alt"></i>
                <span className="main-menu__cta__text">
                  <b>{t("home_3_page.phone")}</b>
                  {t("home_3_page.call_anytime")}
                </span>
              </Link>
            </div>

          </div>
        </nav>
      </div>
      <div className="slider-one slider-three">
        <OwlCarousel className="slider-one__carousel owl-theme thm-owl__carousel" {...sliderOptions}>
          <div className="item slider-one__slide-1">
            <div className="slider-one__bg" style={{ backgroundImage: `url(${BG1})` }}>
            </div>
            <div className="slider-one__shape-1"></div>
            <div className="slider-one__shape-2"></div>
            <div className="container">
              <div className="slider-one__content text-center">
                <div className="slider-one__floated lettering-text">{t("home_3_page.technology_header")}</div>
                <p className="slider-one__text">{t("home_3_page.it_solutions")}</p>
                <div className="slider-one__title-wrapper">
                  <h2 className="slider-one__title">{t("home_3_page.future")} <br />{t("home_3_page.technology")}</h2>
                </div>
                <div className="slider-one__btns">
                  <Link to="/about" className="thm-btn slider-one__btn"><span>{t("home_3_page.learn_more")}</span></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item slider-one__slide-2">
            <div className="slider-one__bg" style={{ backgroundImage: `url(${BG2})` }}>
            </div>
            <div className="slider-one__shape-1"></div>
            <div className="slider-one__shape-2"></div>
            <div className="container">
              <div className="slider-one__content text-center">
                <div className="slider-one__floated lettering-text">{t("home_3_page.technology_header")}</div>
                <p className="slider-one__text">{t("home_3_page.it_solutions")}</p>
                <div className="slider-one__title-wrapper">
                  <h2 className="slider-one__title">{t("home_3_page.future")}<br /> {t("home_3_page.technology")}</h2>
                </div>
                <div className="slider-one__btns">
                  <Link to="/about" className="thm-btn slider-one__btn"><span>{t("home_3_page.learn_more")}</span></Link>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>

      <section className="section-padding--bottom section-padding--top">
        <div className="container">

          <div className="row gutter-y-30">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-card-two gray-bg">
                <h3 className="service-card-two__title"><Link to="/service-01">{t("home_3_page.quality_services")}</Link></h3>
                <p className="service-card-two__text">{t("home_3_page.paragraph")}
                </p>
                <div className="service-card-two__icon">
                  <i className="icon-smart-tv"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-card-two gray-bg">
                <h3 className="service-card-two__title"><Link to="/team">{t("home_3_page.expert_team")}</Link></h3>
                <p className="service-card-two__text">{t("home_3_page.paragraph")}
                </p>
                <div className="service-card-two__icon">
                  <i className="icon-link"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-card-two gray-bg">
                <h3 className="service-card-two__title"><Link to="/contact">{t("home_3_page.excellent_support")}</Link></h3>
                <p className="service-card-two__text">{t("home_3_page.paragraph")}
                </p>
                <div className="service-card-two__icon">
                  <i className="icon-technical-support"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-card-two gray-bg">
                <h3 className="service-card-two__title"><Link to="/about">{t("home_3_page.management")}</Link></h3>
                <p className="service-card-two__text">{t("home_3_page.paragraph")}
                </p>
                <div className="service-card-two__icon">
                  <i className="icon-cctv"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding--bottom about-six">
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-lg-6">
              <div className="about-six__content">
                <div className="section-title">
                  <p className="section-title__text">{t("home_3_page.welcome")}</p>
                  <h2 className="section-title__title">{t("home_3_page.title")}</h2>
                </div>
                <div className="about-six__text">{t("home_3_page.six_text")}</div>
                <ul className="about-six__list">
                  <li className="about-six__list__item">
                    <i className="far fa-check-circle about-six__list__icon"></i>
                    <h3 className="about-six__list__title count-box"><span className="count-text"
                    ><AnimatedNumber value={769} duration={1500} formatValue={(v) => Math.round(v)} /></span>
                    </h3>
                    <div className="about-six__list__text">{t("home_3_page.satisfied_clients")}</div>
                  </li>
                  <li className="about-six__list__item">
                    <i className="far fa-check-circle about-six__list__icon"></i>
                    <h3 className="about-six__list__title count-box"><span className="count-text"
                    ><AnimatedNumber value={825} duration={1500} formatValue={(v) => Math.round(v)} /></span>
                    </h3>
                    <div className="about-six__list__text">{t("home_3_page.projects_relased")}</div>
                  </li>
                </ul>
                <div className="about-six__btns">
                  <Link to="/about" className="thm-btn"><span>{t("home_3_page.learn_more")}</span></Link>
                  <Link to="/service-01" className="about-six__link">
                    {t("home_3_page.work")}
                    <i className="fa fa-angle-double-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-six__images wow fadeInUp" data-wow-duration="1500ms">
                <img src="assets/images/resources/about-six-1-1.jpg" alt="" />
                <img src="assets/images/resources/about-six-1-2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding--top section-padding--bottom service-three black-bg"
        style={{ backgroundImage: `url(${BG3})` }}>
        <div className="container">
          <div className="service-three__block">
            <div className="row">
              <div className="col-lg-7">
                <div className="section-title">
                  <p className="section-title__text">{t("home_3_page.offer")}</p>
                  <h2 className="section-title__title section-title__title--light">{t("home_3_page.challenges")}</h2>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="service-three__block__text">{t("home_3_page.block_text")}
                </div>
              </div>
            </div>
          </div>
          <ul className="service-three__list">
            <li className="service-three__list__item wow fadeInUp" data-wow-duration="1500ms"
              data-wow-delay="000ms">
              <i className="icon-coding service-three__list__icon"></i>
              <h3 className="service-three__list__title"><Link to="#">{t("home_3_page.Website")}</Link></h3>
            </li>
            <li className="service-three__list__item wow fadeInUp" data-wow-duration="1500ms"
              data-wow-delay="100ms">
              <i className="icon-apple service-three__list__icon"></i>
              <h3 className="service-three__list__title"><Link to="#">{t("home_3_page.ios")}</Link></h3>
            </li>
            <li className="service-three__list__item wow fadeInUp" data-wow-duration="1500ms"
              data-wow-delay="200ms">
              <i className="icon-android service-three__list__icon"></i>
              <h3 className="service-three__list__title"><Link to="#">{t("home_3_page.android")}</Link></h3>
            </li>
            <li className="service-three__list__item wow fadeInUp" data-wow-duration="1500ms"
              data-wow-delay="300ms">
              <i className="icon-iot service-three__list__icon"></i>
              <h3 className="service-three__list__title"><Link to="#">{t("home_3_page.iot")}</Link></h3>
            </li>
            <li className="service-three__list__item wow fadeInUp" data-wow-duration="1500ms"
              data-wow-delay="400ms">
              <i className="icon-smartband service-three__list__icon"></i>
              <h3 className="service-three__list__title"><Link to="#">{t("home_3_page.wearables")}</Link></h3>
            </li>
            <li className="service-three__list__item wow fadeInUp" data-wow-duration="1500ms"
              data-wow-delay="500ms">
              <i className="icon-tv service-three__list__icon"></i>
              <h3 className="service-three__list__title"><Link to="#">{t("home_3_page.tv")}</Link></h3>
            </li>
          </ul>
        </div>
      </section>
      <section className="cta-one cta-one--home-three">
        <div className="container">
          <div className="cta-one__inner  wow fadeInUp" data-wow-duration="1500ms">
            <div className="cta-one__circle"></div>
            <div className="section-title ">
              <h2 className="section-title__title section-title__title--light">{t("home_3_page.free")} <br />
                {t("home_3_page.any_kind")}</h2>

            </div>
            <div className="cta-one--home-three__btns">
              <Link to="/contact" className="thm-btn thm-btn--light cta-one__btn"><span>{t("home_3_page.quote")}</span></Link>
            </div>
          </div>
        </div>
      </section>
      < section className="section-padding--bottom section-padding--top service-one" >
        <div className="container-fluid">

          <OwlCarousel className="thm-owl__carousel service-one__carousel" {...serviceOptions}>
            <div className="item">
              <div className="service-card-one gray-bg">
                <div className="service-card-one__image">
                  <img src="assets/images/services/service-1-1.jpg" alt="" />
                  <div className="service-card-one__logo">G</div>
                </div>
                <div className="service-card-one__content">
                  <h3 className="service-card-one__title"><Link to="/cyber-security">{t("home_3_page.gaming")}</Link></h3>
                  <p className="service-card-one__text">{t("home_3_page.lorem_ipsum")}</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="service-card-one gray-bg">
                <div className="service-card-one__image">
                  <img src="assets/images/services/service-1-2.jpg" alt="" />
                  <div className="service-card-one__logo">B</div>
                </div>
                <div className="service-card-one__content">
                  <h3 className="service-card-one__title"><Link to="/cyber-security">{t("home_3_page.business")}</Link></h3>
                  <p className="service-card-one__text">{t("home_3_page.lorem_ipsum")}</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="service-card-one gray-bg">
                <div className="service-card-one__image">
                  <img src="assets/images/services/service-1-3.jpg" alt="" />
                  <div className="service-card-one__logo">T</div>
                </div>
                <div className="service-card-one__content">
                  <h3 className="service-card-one__title"><Link to="/cyber-security">{t("home_3_page.information")}</Link></h3>
                  <p className="service-card-one__text">{t("home_3_page.lorem_ipsum")}</p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section >

      <section
        className="section-padding--bottom section-padding--top gray-bg testimonials-one background-repeat-no background-position-top-center"
        style={{ backgroundImage: `url(${BG4})` }}>
        <div className="container">
          <div className="section-title text-center">
            <p className="section-title__text">{t("home_3_page.our_clients")}</p>
            <h2 className="section-title__title">{t("home_3_page.trust")}</h2>
          </div>
          <div className="row gutter-y-30">
            <div className="col-lg-6">
              <div className="testimonials-one-card">
                <div className="testimonials-one-card__image">
                  <img src="assets/images/resources/testi-1-1.jpg" alt="" />
                </div>
                <div className="testimonials-one-card__content">
                  <div className="testimonials-one-card__text">{t("home_3_page.para")}</div>
                  <h3 className="testimonials-one-card__title">{t("home_3_page.michal")}</h3>
                  <p className="testimonials-one-card__designation">{t("home_3_page.desinger")}</p>
                  <i className="icon-right-quote testimonials-one-card__icon"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonials-one-card">
                <div className="testimonials-one-card__image">
                  <img src="assets/images/resources/testi-1-2.jpg" alt="" />
                </div>
                <div className="testimonials-one-card__content">
                  <div className="testimonials-one-card__text">{t("home_3_page.para")}</div>
                  <h3 className="testimonials-one-card__title">{t("home_3_page.jessica")}</h3>
                  <p className="testimonials-one-card__designation">{t("home_3_page.desinger")}</p>
                  <i className="icon-right-quote testimonials-one-card__icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section-padding--bottom section-padding--top project-two">
        <div className="container-fluid">
          <div className="section-title text-center">
            <p className="section-title__text">{t("home_3_page.latest")}</p>
            <h2 className="section-title__title">{t("home_3_page.it_project")}</h2>

          </div>

          <OwlCarousel className="thm-owl__carousel" {...projectOptions} >
            <div className="item">
              <div className="project-card-one">
                <div className="project-card-one__image">
                  <img src="assets/images/projects/project-2-1.jpg" alt="" />
                </div>
                <div className="project-card-one__content">
                  <div className="project-card-one__content__inner">
                    <p className="project-card-one__text">{t("home_3_page.tech_solution")}</p>
                    <h3 className="project-card-one__title"><Link to="/project-details">{t("home_3_page.data_recovery")}</Link></h3>
                    <Link to="/project-details" className="project-card-one__more">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="project-card-one">
                <div className="project-card-one__image">
                  <img src="assets/images/projects/project-2-2.jpg" alt="" />
                </div>
                <div className="project-card-one__content">
                  <div className="project-card-one__content__inner">
                    <p className="project-card-one__text">{t("home_3_page.tech_solution")}</p>
                    <h3 className="project-card-one__title"><Link to="/project-details">{t("home_3_page.data_recovery")}</Link></h3>
                    <Link to="/project-details" className="project-card-one__more">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="project-card-one">
                <div className="project-card-one__image">
                  <img src="assets/images/projects/project-2-3.jpg" alt="" />
                </div>
                <div className="project-card-one__content">
                  <div className="project-card-one__content__inner">
                    <p className="project-card-one__text">{t("home_3_page.tech_solution")}</p>
                    <h3 className="project-card-one__title"><Link to="/project-details">{t("home_3_page.data_recovery")}</Link></h3>
                    <Link to="/project-details" className="project-card-one__more">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="project-card-one">
                <div className="project-card-one__image">
                  <img src="assets/images/projects/project-2-4.jpg" alt="" />
                </div>
                <div className="project-card-one__content">
                  <div className="project-card-one__content__inner">
                    <p className="project-card-one__text">{t("home_3_page.tech_solution")}</p>
                    <h3 className="project-card-one__title"><Link to="/project-details">{t("home_3_page.data_recovery")}</Link></h3>
                    <Link to="/project-details" className="project-card-one__more">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="project-card-one">
                <div className="project-card-one__image">
                  <img src="assets/images/projects/project-2-1.jpg" alt="" />
                </div>
                <div className="project-card-one__content">
                  <div className="project-card-one__content__inner">
                    <p className="project-card-one__text">{t("home_3_page.tech_solution")}</p>
                    <h3 className="project-card-one__title"><Link to="/project-details">{t("home_3_page.data_recovery")}</Link></h3>
                    <Link to="/project-details" className="project-card-one__more">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="project-card-one">
                <div className="project-card-one__image">
                  <img src="assets/images/projects/project-2-2.jpg" alt="" />
                </div>
                <div className="project-card-one__content">
                  <div className="project-card-one__content__inner">
                    <p className="project-card-one__text">{t("home_3_page.tech_solution")}</p>
                    <h3 className="project-card-one__title"><Link to="/project-details">{t("home_3_page.data_recovery")}</Link></h3>
                    <Link to="/project-details" className="project-card-one__more">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>

      <section className="section-padding--top section-padding--bottom contact-two">
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-lg-6">
              <div className="contact-two__image">
                <img src="assets/images/resources/contact-two-1.jpg" className="wow fadeInUp"
                  data-wow-duration="1500ms" alt="" />
                <Link to="#" onClick={() => setytShow(true)}
                  className="video-popup contact-two__video">
                  <i className="fa fa-play"></i>
                  <i className="ripple"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-two__content">
                <div className="section-title">
                  <p className="section-title__text section-title__text--light">{t("home_3_page.contact_us")}</p>

                  <h2 className="section-title__title section-title__title--light">{t("home_3_page.join_free")}</h2>
                </div>
                <form action="assets/inc/sendemail.php" className="contact-one__form contact-form-validated">
                  <div className="row ">
                    <div className="col-lg-6 col-md-12">
                      <input type="text" placeholder="Your name" name="name" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <input type="email" placeholder="Email address" name="email" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <input type="text" placeholder="Phone" name="phone" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <select name="services" className="niceselect">
                        <option value="department">{t("home_3_page.department")}</option>
                        <option value="department">{t("home_3_page.department")}</option>
                        <option value="department">{t("home_3_page.department")}</option>
                        <option value="department">{t("home_3_page.department")}</option>
                      </select>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <textarea name="message" placeholder="Write message"></textarea>
                    </div>
                    <div className="col-md-12">
                      <button className="thm-btn thm-btn--light contact-one__btn" type="submit"><span>{t("home_3_page.send_msg")}</span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding--top section-padding--bottom blog-one--home-three">
        <div className="container">
          <div className="section-title text-center">
            <p className="section-title__text">{t("home_3_page.direct")}</p>
            <h2 className="section-title__title">{t("home_3_page.checkout")} <br />
              {t("home_3_page.news")}</h2>
          </div>
          <div className="row gutter-y-30">
            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
              data-wow-delay="000ms">
              <div className="blog-card-one">
                <div className="blog-card-one__image">
                  <img src="assets/images/blog/blog-1-1.jpg" alt="" />
                  <Link to="/blog-details"></Link>
                </div>
                <div className="blog-card-one__content">
                  <div className="blog-card-one__meta">
                    <div className="blog-card-one__date">
                      <i className="fa fa-calendar-alt" aria-hidden="true"></i>
                      {t("home_3_page.july")}
                    </div>
                    <Link to="/blog" className="blog-card-one__category">{t("home_3_page.design")}</Link>
                  </div>
                  <h3 className="blog-card-one__title"><Link to="/blog-details">{t("home_3_page.web_design")}</Link></h3>
                  <Link to="/blog-details" className="blog-card-one__more">
                    {t("home_3_page.read_more")}
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
              data-wow-delay="100ms">
              <div className="blog-card-one">
                <div className="blog-card-one__image">
                  <img src="assets/images/blog/blog-1-2.jpg" alt="" />
                  <Link to="/blog-details"></Link>
                </div>
                <div className="blog-card-one__content">
                  <div className="blog-card-one__meta">
                    <div className="blog-card-one__date">
                      <i className="fa fa-calendar-alt" aria-hidden="true"></i>
                      {t("home_3_page.july")}
                    </div>
                    <Link to="/blog" className="blog-card-one__category">{t("home_3_page.graphic")}</Link>
                  </div>
                  <h3 className="blog-card-one__title"><Link to="/blog-details">{t("home_3_page.tech_support")}</Link></h3>
                  <Link to="/blog-details" className="blog-card-one__more">
                    {t("home_3_page.read_more")}
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
              data-wow-delay="200ms">
              <div className="blog-card-one">
                <div className="blog-card-one__image">
                  <img src="assets/images/blog/blog-1-3.jpg" alt="" />
                  <Link to="/blog-details"></Link>
                </div>
                <div className="blog-card-one__content">
                  <div className="blog-card-one__meta">
                    <div className="blog-card-one__date">
                      <i className="fa fa-calendar-alt" aria-hidden="true"></i>
                      {t("home_3_page.july")}
                    </div>
                    <Link to="/blog" className="blog-card-one__category">{t("home_3_page.seo")}</Link>
                  </div>
                  <h3 className="blog-card-one__title"><Link to="/blog-details">{t("home_3_page.profit_double")}</Link></h3>
                  <Link to="/blog-details" className="blog-card-one__more">
                    {t("home_3_page.read_more")}
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="client-carousel client-carousel--two">
        <div className="container">
          <OwlCarousel className="thm-owl__carousel" {...logoOptions}>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
          </OwlCarousel>
        </div>
      </div>
      {ytShow &&
        <div className="YouTubePopUp-Wrap">
          <div className="YouTubePopUp-Content">
            <span className="YouTubePopUp-Close" onClick={() => setytShow(false)}></span>
            <iframe src="https://www.youtube.com/embed/rzfmZC3kg3M?autoplay=1" title='ytvideo' allowFullScreen></iframe>
          </div>
        </div>}
    </>
  )
}

export default Home3