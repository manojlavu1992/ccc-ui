import React from 'react'
import { Link } from 'react-router-dom'
import BG from '../../../assets/images/services/services-s-cta-1-1.jpg'

const ServiceSidebar2 = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__item sidebar__item--category">
        <h3 className="sidebar__title">Categories</h3>
        <ul className="sidebar__category">
        <li>
                      <Link to="/hireing">Hire Development</Link>
                    </li>
                    <li>
                      <Link to="/microsoftenterprise">Microsoft </Link>
                    </li>
                    <li>
                      <Link to="/Iot">IOT</Link>
                    </li>
                    <li>
                      <Link to="/Ar">AR/VR</Link>
                    </li>
                    <li>
                      <Link to="/Business">Business / Technology </Link>
                    </li>
                    <li>
                      <Link to="/ProductPrototype">Product Prototype</Link>
                    </li>
                    <li>
                      <Link to="/ManagedServices">Managed Services</Link>
                    </li>
                    <li>
                      <Link to="/Enterprice">Enterprise Mobility</Link>
                    </li>

        </ul>
      </div>
      <div className="sidebar__item sidebar__item--cta">
        <div className="sidebar__cta"
          style={{ backgroundImage: `url(${BG})` }}>
          <i className="sidebar__cta__icon icon-phone-ringing"></i>
          <h3 className="sidebar__cta__title">Have Tech Problems
            Contact Now</h3>
          <p className="sidebar__cta__text">Call Anytime <br /><Link to="tel:+1-(587)883-1136">+ 1-
            (587) 883-1136</Link></p>

        </div>
      </div>
      <div className="sidebar__item sidebar__item--btn none">
        <Link to="#" className="thm-btn sidebar__btn"><span>Download our flyers</span></Link>
      </div>
    </div>
  )
}

export default ServiceSidebar2;