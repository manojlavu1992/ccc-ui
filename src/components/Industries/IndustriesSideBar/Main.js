import React from 'react'
import { Link } from 'react-router-dom'
import BG from '../../../assets/images/services/services-s-cta-1-1.jpg';
import { useTranslation } from 'react-i18next';

const IndustriesSideBar = () => {
  const {t} = useTranslation();
  return (
    <div className="sidebar">
      <div className="sidebar__item sidebar__item--category">
        <h3 className="sidebar__title">{t('industries.industries_sidebar.categories')}</h3>
        <ul className="sidebar__category">
          <li>
            <Link to="/Healthcare">{t('industries.industries_sidebar.healthcare')}</Link>
          </li>
          <li>
            <Link to="/Education">{t('industries.industries_sidebar.education_elearning')}</Link>
          </li>
          <li>
            <Link to="/Social">{t('industries.industries_sidebar.social_network')}</Link>
          </li>
          <li>
            
            <Link to="/Retail">{t('industries.industries_sidebar.retail')}</Link>


          </li>
          <li>
            
            <Link to="/Manufactur">{t('industries.industries_sidebar.manufactur')}</Link>
          </li>
          <li>
            <Link to="/Ecommerce">{t('industries.industries_sidebar.ecommerce')}</Link>
          </li>
          <li>
            
            <Link to="/Energy">{t('industries.industries_sidebar.energy')}</Link>
          </li>
          <li>
            <Link to="/Travel">{t('industries.industries_sidebar.travel_hospitality')}</Link>
          </li>
          <li>
            <Link to="/RealEstate">{t('industries.industries_sidebar.real_estate')} </Link>
          </li>
          <li>
            <Link to="/Media">{t('industries.industries_sidebar.media_entertainment')}</Link>
          </li>
          <li>
            <Link to="/Logistics">{t('industries.industries_sidebar.logistics_distribution')}</Link>
          </li>
          <li>
            <Link to="/Construction">{t('industries.industries_sidebar.construction')}</Link>
          </li>

        </ul>
      </div>
      <div className="sidebar__item sidebar__item--cta">
        <div className="sidebar__cta"
          style={{ backgroundImage: `url(${BG})` }}>
          <i className="sidebar__cta__icon icon-phone-ringing"></i>
          <h3 className="sidebar__cta__title">{t('industries.common.tech_problems')}</h3>
          <p className="sidebar__cta__text">{t('industries.common.call_anytime')} <br /><Link to="tel:+1-(587)883-1136">{t('industries.common.call_num')}</Link></p>

        </div>
      </div>
      <div className="sidebar__item sidebar__item--btn none">
        <Link to="#" className="thm-btn sidebar__btn"><span>{t('industries.common.download')}</span></Link>
      </div>
    </div>
  )
}

export default IndustriesSideBar;