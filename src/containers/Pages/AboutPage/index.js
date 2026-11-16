import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import Breadcumb from "../../../components/Breadcumb";
import Service from "../../../components/Service";
import About from "../../../components/About";
import ServiceArea from "../../../components/ServiceArea";
import TeamMember from "../../../components/TeamMember";
import NewsLetter from "../../../components/Newsletter";
import FooterArea from "../../../components/FooterArea";
import about from "../../../images/breadcumb/image.png";
import BG_IMG from "../../../images/breadcumb/contact-img-bg.png";
import { SERVICES_DATA_LIST } from "../../../constands/services.data";
import "./style.scss";

const aboutText = [
  {
    text: "At CamJustice, our expertise lies in delivering high-quality, professional legal solutions tailored to your unique needs. With years of experience and in-depth knowledge of Cambodian and international legal systems, our team is equipped to handle complex legal matters across various industries.",
  },
  {
    text: "You need a legal partner who understands the law and your business. At CamJustice, our experienced lawyers bring expertise in Cambodian and international legal systems, offering tailored, efficient solutions. We are dedicated to protecting your interests and helping you achieve success.",
  },
];

const MENUS = [{ name: "Home", route: "/" }, { name: "About us" }];

const AboutPage = () => {
  return (
    <Fragment>
      <header className="headerArea">
        <HeaderTop className="headerTop" />
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <Breadcumb
        className="breadcumbArea"
        title="About Us"
        breadcumbMenu={MENUS}
        background={BG_IMG}
      />
      <Service className="serviceArea mt-0" />
      <About
        className="aboutArea aboutAreaStyleTwo"
        title="Why You Need Us"
        subTitle="We Are Expert"
        images={about}
        orderLast="order-last"
        videoId="l-aV3qt6dKw"
        pragraphs={aboutText}
      />
      <ServiceArea
        className="ourServiceArea ourServiceAreaStyleTwo"
        title="How Can We Help You"
        subTitle="Area Of Practice"
        services={SERVICES_DATA_LIST}
      />
      <TeamMember
        title="Qualified Attorneys "
        subTitle="Meet Our Experts"
        className="teamArea"
        slider={true}
      />
      <NewsLetter className="newsLetterArea" />
      <FooterArea />
    </Fragment>
  );
};
export default AboutPage;
