import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
// import ServiceSidebar from '../ServiceSidebar/Main'
import itc from "../../../assets/images/industries/retaill.png";
import IndustriesSideBar from '../IndustriesSideBar/Main';
import { useTranslation } from 'react-i18next';


const Retail = () => {
  const {t} = useTranslation();
    // const [clicked, setClicked] = useState(0);
    // const faqs = [
    // 	{
    // 		question: "Nulla eu nisi pellentesque, ultrices lorem eget, mattis dolo",
    // 		answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat. Vivamus vel eros vitae estaliquet pellentesque vitae."
    // 	},
    // 	{
    // 		question: "Praesent nec ante sed libero tempus rutrum",
    // 		answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat. Vivamus vel eros vitae estaliquet pellentesque vitae."
    // 	},
    // 	{
    // 		question: "Integer et mi in eros commodo bibendum",
    // 		answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat. Vivamus vel eros vitae estaliquet pellentesque vitae."
    // 	},
    // 	{
    // 		question: "Proin commodo turpis eu leo tempus varius",
    // 		answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat. Vivamus vel eros vitae estaliquet pellentesque vitae."
    // 	}
    // ]
    return (
        <>
            <Breadcumb Title={t('breadcrumb.retail_ndustry')} Breadcumb={t('industries.common.industries')} />
            <section className="section-padding--bottom section-padding--top service-details--page">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-8">
                            <div className="service-details__image">
                                <img src={itc} alt="" />
                            </div>
                            <h3 className="service-details__title">{t('industries.retail.title')}</h3>
                            <div className="service-details__content">{t('industries.retail.retail_industry')}
                                <p>
                                    <b>{t('industries.retail.transformation')}.</b>
                                </p>
                                <p>
                                {t('industries.retail.creating')}
                                </p>
                                <p>
                                {t('industries.retail.retailer')}.
                                </p>
                                <p>
                                {t('industries.retail.Omni_channel')}
                                </p>
                                <h4>{t('industries.retail.technology')}</h4>
                                <p>
                                    <b>{t('industries.retail.experience')}.</b>
                                </p>
                                <p>
                                    <b>{t('industries.retail.retail_consulting')}</b>
                                </p>
                                <p>
                                {t('industries.retail.consulting')}
                                </p>
                                <p>
                                    <b>{t('industries.retail.software')}</b>
                                </p>
                                <p>
                                {t('industries.retail.developed')}
                                </p>
                                <p>
                                    <b>{t('industries.retail.itegrated')}</b>
                                </p>
                                <p>
                                {t('industries.retail.applications')}
                                </p>
                                <p>
                                    <b>{t('industries.retail.costumers')}</b>
                                </p>
                                <p>
                                {t('industries.retail.enabled')}
                                </p>
                                <h4>
                                {t('industries.retail.Industry')}
                                </h4>
                                <p>
                                    <b>{t('industries.retail.mobile_kiosks')}</b>
                                </p>
                                <p>
                                {t('industries.retail.development')}
                                </p>
                                <p>
                                    <b>{t('industries.retail.promotions')}</b>
                                </p>
                                <p>
                                {t('industries.retail.conceptual')}
                                </p>
                                <p>
                                    <b>{t('industries.retail.mcommerce')}</b>
                                </p>
                                <p>
                                {t('industries.retail.devices')}
                                </p>
                                <p>
                                    <b>{t('industries.retail.mobile_wallets')}</b>
                                </p>
                                <p>
                                {t('industries.retail.virtual_wallet')}
                                </p>
                                <p>
                                    <b>{t('industries.retail.solutions')}</b>
                                </p>
                                <p>
                                {t('industries.retail.multiple')}
                                </p>
                                <p>
                                    <b>{t('industries.retail.inventory_app')}</b>
                                </p>
                                <p>
                                {t('industries.retail.maintain')}
                                </p>
                                <p>
                                    <b>{t('industries.retail.sale_solutions')}</b>
                                </p>
                                <p>
                                {t('industries.retail.scale')}
                                </p>
                                <p>
                                    <b>{t('industries.retail.loyalty_coupons')}</b>
                                </p>
                                <p>
                                {t('industries.retail.customer_experience')}
                                </p>
                            </div>
                            <div className="row gutter-y-30 service-details__box-wrapper">
                                <div className="col-md-6 col-sm-12">
                                    <div className="service-details__box">
                                        <i className="service-details__box__icon icon-consulting"></i>
                                        <div className="service-details__box__content">
                                            <h3 className="service-details__box__title">
                                                <Link to="#">{t('industries.common.it_consultant')}</Link>
                                            </h3>
                                            <p className="service-details__box__text">
                                            {t('industries.common.questions')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="service-details__box">
                                        <i className="service-details__box__icon icon-chip"></i>
                                        <div className="service-details__box__content">
                                            <h3 className="service-details__box__title">
                                                <Link to="#">{t('industries.common.it_specialist')}</Link>
                                            </h3>
                                            <p className="service-details__box__text">
                                                {t('industries.common.reach')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="row gutter-y-30">
                <div className="col-md-6 col-sm-12">
                  <img
                    src="assets/images/services/service-d-2.jpg"
                    className="service-details__sub-image"
                    alt=""
                  />
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="service-details__caption">
                    <h3 className="service-details__caption__title">
                      Our Benefits
                    </h3>
                    <p className="service-details__caption__text">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum.
                    </p>
                    <ul className="service-details__caption__list">
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Praesent efficitur quam sit amet
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Nunc cursus dolor id purus euismod
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Quisque tincidunt eros ac place viverra
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}

                            {/* <div className="row">
                <div className="col-md-12">
                  <div
                    className="accrodion-grp service-details__accrodion"
                    data-grp-name="service-details__accrodion-1"
                  >
                    {faqs.map((item, index) => (
                      <div
                        className={`accrodion wow fadeInUp ${
                          index === clicked && "active"
                        }`}
                        key={index}
                        data-wow-delay="0ms"
                      >
                        <div className="accrodion-title">
                          <h4 onClick={() => setClicked(index)}>
                            {item.question}
                            <span className="accrodion-icon"></span>
                          </h4>
                        </div>
                        {index === clicked && (
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>{item.answer}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
                        </div>
                        <div className="col-lg-4 sidebar-column">
                            {/* <ServiceSidebar /> */}
                            <IndustriesSideBar/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Retail