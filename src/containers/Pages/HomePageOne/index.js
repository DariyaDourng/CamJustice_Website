import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import HeroSlider from "../../../components/HeroSlider";
import Service from "../../../components/Service";
import About from "../../../components/About";
import ServiceArea from "../../../components/ServiceArea";
import ContactArea from "../../../components/ContactArea";
import TeamMember from "../../../components/TeamMember";
import NewsLetter from "../../../components/Newsletter";
import FooterArea from "../../../components/FooterArea";
import about from "../../../images/about/logo-banner.png";
import signature from "../../../images/about/1.png";
import { SERVICES_DATA_LIST } from "../../../constands/services.data";

const aboutText = [
  {
    text: "CamJustice is a business law firm registered with the Bar Association of the Kingdom of Cambodia. Renowned for its professionalism, expertise, and quality, CamJustice provides transparent, efficient, and high-standard legal services tailored to clients needs.",
  },
  {
    text: "Serving national, regional, and international clients, CamJustice is staffed with experienced lawyers well-versed in Cambodian law and international legal frameworks. With practical insights into local and global business trends, the team ensures comprehensive legal solutions across various disciplines.",
  },
];

const heroSliders = [
  {
    images: "portfolio_1",
    title: "Working with You,",
    subTitle: "Like a Friend, for Legal Excellence.",
    text: "The Most Talented Law Firm",
    button: "Contact us now",
  },
  {
    images: "portfolio_2",
    title: "We Fight For Your Justice",
    subTitle: "As Like A Friend.",
    text: "The Most Talented Law Firm",
    button: "Contact us now",
  },
  {
    images: "portfolio_4",
    title: "Working with You,",
    subTitle: "Like a Friend, for Legal Excellence.",
    text: "The Most Talented Law Firm",
    button: "Contact us now",
  },
];

const HomePageOne = () => {
  return (
    <Fragment>
      <header className="headerArea">
        <HeaderTop className="headerTop" />
        <HeaderBotton className="headerBottomArea" />
      </header>
      <HeroSlider sliders={heroSliders} className="heroSliderArea" />
      <Service className="serviceArea" />
      <About
        className="aboutArea"
        title="About Us"
        images={about}
        signature={signature}
        pragraphs={aboutText}
      />
      <ServiceArea
        className="ourServiceArea"
        title="How Can We Help You"
        subTitle="Area Of Practice"
        services={SERVICES_DATA_LIST}
      />
      <ContactArea className="contactArea" />
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
export default HomePageOne;
