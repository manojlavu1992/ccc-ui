import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
// import ServiceSidebar from '../ServiceSidebar/Main'
import itc from "../../../assets/images/industries/logistics.png";
import IndustriesSideBar from '../IndustriesSideBar/Main';
import { useTranslation } from 'react-i18next';


const Logistics = () => {
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
            <Breadcumb Title={t('breadcrumb.logistics_it')}  Breadcumb={t('industries.common.industries')}  />
            <section className="section-padding--bottom section-padding--top service-details--page">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-8">
                            <div className="service-details__image">
                                <img src={itc} alt="" />
                            </div>
                            <h3 className="service-details__title">{t('industries.logistic.logistics_it_ervices')}</h3>
                            <div className="service-details__content">
                                <p>
                                    <b>{'logistic_para_1'}</b>
                                </p>
                                <h4>
                                {t('industries.logistic.logistics_management_system')}
                                </h4>
                                <p>
                                {t('industries.logistic.sreeson')}
                                </p>
                                <p>
                                    {t('industries.logistic.user_friendly')}
                                </p>
                                <p>
                                {t('industries.logistic.solutions')}
                                    
                                </p>
                                <h4>
                                {t('industries.logistic.our_services')}
                                    
                                </h4>
                                <p>
                                    <b>{t('industries.logistic.fleet_and_driver_management')}</b>
                                </p>
                                <p>
                                {t('industries.logistic.fleet_management')}
                                </p>
                                <p>
                                    <b>{t('industries.logistic.transportation_management')}</b>
                                </p>
                                <p>
                                       {t('industries.logistic.transportation_management')}
                                </p>
                                <p>
                                    <b>{t('industries.logistic.warehousing_distribution')}</b>
                                </p>
                                <p>
                                        {t('industries.logistic.warehousing_management')}
                                </p>
                                <p>
                                    <b>{t('industries.logistic.cargo_management_systems')}</b>
                                </p>
                                <p>
                                         {t('industries.logistic.cargo_management')}
                                </p>
                                <p>
                                    <b>{t('industries.logistic.tracking')}</b>
                                </p>
                                <p>
                                     {t('industries.logistic.tracking_apps')}
                                </p>
                                <p>
                                    <b>{t('industries.logistic.real_time')}</b>
                                </p>
                                <p>
                                      {t('industries.logistic.vehicle_tracking_system')}
                                </p>
                                <p>
                                    <b>{t('industries.logistic.consignment_tracking_modules')}</b>
                                </p>
                                <p>
                                       {t('industries.logistic.consignment_tracking')}
                                </p>
                                <h4>
                                       {t('industries.logistic.our_solution')}
                                </h4>
                                <p>
                                    <b>{t('industries.logistic.mobility_solutions')}</b>
                                </p>
                                <p>
                                       {t('industries.logistic.functionalities')}
                                </p>
                                <p>
                                    <b>{t('industries.logistic.big_data')}</b>
                                </p>
                                <p>
                                     {t('industries.logistic.tools_and_operations')}.
                                </p>
                                <p>
                                    <b>{t('industries.logistic.cloud')}</b>
                                </p>
                                <p>
                                    {t('industries.logistic.technology')}
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

export default Logistics