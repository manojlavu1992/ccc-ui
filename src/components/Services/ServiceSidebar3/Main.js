import React from 'react'
import { Link } from 'react-router-dom'
import BG from '../../../assets/images/services/services-s-cta-1-1.jpg'

const ServiceSidebar3 = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__item sidebar__item--category">
                <h3 className="sidebar__title">Categories</h3>
                <ul className="sidebar__category">
                    <li>
                        <Link to="/DevelopMethodology">Development Methodology</Link>
                    </li>
                    <li>
                        <Link to="/Delivery">Delivery Models</Link>
                    </li>
                    <li>
                        <Link to="/Pricing">Pricing Models</Link>
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

export default ServiceSidebar3;