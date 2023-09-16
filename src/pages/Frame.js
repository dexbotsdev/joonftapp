import Button from "../components/Button";
import Partners from "../components/Partners";
import ShortInfoWithIcon from "../components/ShortInfoWithIcon";
import SmallCardIcon from "../components/SmallCardIcon";
import FAQ from "../components/FAQ";
import InfoCardWithImageRight from "../components/InfoCardWithImageRight";
import Logo from "../components/Logo";
import PartnershipsSmall from "../components/PartnershipsSmall";
import SmallHeaderWithBackground from "../components/SmallHeaderWithBackground";
import Footer from "../components/Footer";
import InfoCardWithImage from "../components/InfoCardWithImage";
import BorderedHeader from "../components/BorderedHeader";
import BigCard from "../components/BigCard";
import Hero from "../components/Hero";
import "./Frame.css";

const Frame = () => {
  return (
    <div className="ellipse-parent">
      <div className="frame-child" />
      <img className="frame-item" alt="" src="/group-5369.svg" />
      <div className="frame-inner" />
      <div className="ellipse-div" />
      <img
        className="logo-laqira-layer-01png-icon"
        alt=""
        src="/logo-laqira-layer-01png@2x.png"
      />
      <div className="div" />
      <div className="rectangle-div" />
      <Button />
      <div className="minting-parent">
        <div className="minting">Minting</div>
        <div className="minting">About</div>
        <div className="minting">Collection</div>
        <div className="minting">Roadmap</div>
        <div className="minting">Tem</div>
      </div>
      <img
        className="character-laqirapng-icon"
        alt=""
        src="/character-laqirapng@2x.png"
      />
      <div className="line-div" />
      <img
        className="logo-laqira-layer-01png-icon1"
        alt=""
        src="/logo-laqira-layer-01png1@2x.png"
      />
      <img
        className="logo-laqira-layer-01png-icon2"
        alt=""
        src="/logo-laqira-layer-01png2@2x.png"
      />
      <img
        className="logo-laqira-layer-01png-icon3"
        alt=""
        src="/logo-laqira-layer-01png3@2x.png"
      />
      <img
        className="logo-laqira-layer-01png-icon4"
        alt=""
        src="/logo-laqira-layer-01png4@2x.png"
      />
      <Partners />
      <ShortInfoWithIcon />
      <SmallCardIcon dimensionText="/smallcard.svg" />
      <SmallCardIcon
        dimensionText="/smallcard1.svg"
        propTop="94.16rem"
        propLeft="42.84rem"
        propZIndex="18"
      />
      <div className="frame-child1" />
      <FAQ />
      <InfoCardWithImageRight />
      <img
        className="logo-laqira-layer-01png-icon5"
        alt=""
        src="/logo-laqira-layer-01png5@2x.png"
      />
      <img className="image-107-icon" alt="" src="/image-107@2x.png" />
      <Logo />
      <PartnershipsSmall />
      <SmallHeaderWithBackground />
      <Footer />
      <InfoCardWithImage />
      <BorderedHeader />
      <BigCard />
      <Hero />
    </div>
  );
};

export default Frame;
