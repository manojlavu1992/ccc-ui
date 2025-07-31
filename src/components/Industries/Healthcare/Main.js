import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
// import ServiceSidebar from '../ServiceSidebar/Main'
import itc from "../../../assets/images/industries/healthcare.jpg";
import IndustriesSideBar from '../IndustriesSideBar/Main';
import { useTranslation } from 'react-i18next';


const Healthcare = () => {
    const { t} = useTranslation();
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
            <Breadcumb Title="Healthcare Industry" Breadcumb="INDUSTRIES" />
            <section className="section-padding--bottom section-padding--top service-details--page">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-8">
                            <div className="service-details__image">
                                <img src={itc} alt="" />
                            </div>
                            <h3 className="service-details__title">{t("industries.healthcare.health")}</h3>
                            <div className="service-details__content">
                                <p>
                                    <b>{t("industries.healthcare.inside")}</b>
                                </p>
                                <p>
                                    {t("industries.healthcare.help")}
                                </p>
                                <p>
                                    {t("industries.healthcare.our_it")}
                                </p>
                                <p>
                                    {t("industries.healthcare.our_tech")}
                                </p>
                                <h4>
                                    {t("industries.healthcare.custom")}
                                </h4>
                                <p>
                                    <b>{t("industries.healthcare.portal")}</b>
                                </p>
                                <p>

                                    {t("industries.healthcare.software")}
                                </p>
                                <p>
                                    <b>{t("industries.healthcare.scheduling")}</b>
                                </p>
                                <p>
                                    {t("industries.healthcare.manage")}
                                </p>
                                <p>
                                    <b>{t("industries.healthcare.medical")}</b>
                                </p>
                                <p>
                                    {t("industries.healthcare.tedious")}
                                </p>
                                <p>
                                    <b> {t("industries.healthcare.pres")}</b>
                                </p>
                                <p>
                                    {t("industries.healthcare.online")}
                                </p>
                                <h4>
                                    {t("industries.healthcare.personal")}
                                </h4>
                                <p>
                                    {t("industries.healthcare.third")}
                                </p>
                                <h4>
                                    {t("industries.healthcare.video")}
                                </h4>
                                <p>
                                    {t("industries.healthcare.remote")}
                                </p>
                                <h4>
                                    {t("industries.healthcare.hospital")}
                                </h4>
                                <p>
                                    <b>{t("industries.healthcare.management")}</b>
                                </p>
                                <p>
                                    {t("industries.healthcare.monitor")}
                                </p>
                                <p>
                                    <b>
                                        {t("industries.healthcare.electronic")}</b>
                                </p>
                                <p>
                                    {t("industries.healthcare.records")}
                                </p>
                                <h4>
                                    {t("industries.healthcare.providers")}
                                </h4>
                                <p>
                                    <b>
                                        {t("industries.healthcare.emrm")}</b>
                                </p>
                                <p>
                                    {t("industries.healthcare.track")}
                                </p>
                                <p>
                                    <b>
                                        {t("industries.healthcare.erm")}
                                    </b>
                                </p>
                                <p>
                                    {t("industries.healthcare.information")}
                                </p>
                                <h4>
                                    {t("industries.healthcare.ets")}
                                </h4>
                                <p>
                                    <b>
                                        {t("industries.healthcare.chatbot")}</b>
                                </p>
                                <p>
                                    {t("industries.healthcare.integrated")}
                                </p>
                                <p>
                                    <b>{t("industries.healthcare.arvr")}</b>
                                </p>
                                <p>
                                    {t("industries.healthcare.feature")}
                                </p>
                                <p>
                                    <b>{t("industries.healthcare.big_data")}</b>
                                </p>
                                <p>
                                    {t("industries.healthcare.high")}
                                </p>
                                <p>
                                    <b>{t("industries.healthcare.analysis")}</b>
                                </p>
                                <p>
                                    {t("industries.healthcare.jumpstart")}
                                </p>

                            </div>
                            <div className="row gutter-y-30 service-details__box-wrapper">
                                <div className="col-md-6 col-sm-12">
                                    <div className="service-details__box">
                                        <i className="service-details__box__icon icon-consulting"></i>
                                        <div className="service-details__box__content">
                                            <h3 className="service-details__box__title">
                                                <Link to="#">{t("industries.healthcare.it_consultant")}</Link>
                                            </h3>
                                            <p className="service-details__box__text">
                                                {t("industries.healthcare.questions")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="service-details__box">
                                        <i className="service-details__box__icon icon-chip"></i>
                                        <div className="service-details__box__content">
                                            <h3 className="service-details__box__title">
                                                <Link to="#">{t("industries.healthcare.it_specialist")}</Link>
                                            </h3>
                                            <p className="service-details__box__text">
                                                {t("industries.healthcare.reach")}
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

export default Healthcare