import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
// import BgImg from  "../../assets/images/background/page-header-bg-1-1.jpg"

const Breadcumb = ({ Title, Breadcumb, imgSrc }) => {
  const { t } = useTranslation();
    return (
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url(${imgSrc})` }}
        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <Link to="/">{t('breadcrumb.home')}</Link>
            </li>
            <li>{Breadcumb && Breadcumb}</li>
          </ul>
          <h2 className="page-header__title">{Title && Title}</h2>
        </div>
      </div>
    );
}

export default Breadcumb