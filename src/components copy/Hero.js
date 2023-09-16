import ButtonFilled from "./ButtonFilled";
import ButtonOutline from "./ButtonOutline";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="buttonfilled-parent">
        <ButtonFilled
          carDimensions="/layer-21.svg"
          buttonFilledWidth="46.39%"
          buttonFilledHeight="100%"
          buttonFilledPosition="absolute"
          buttonFilledTop="0%"
          buttonFilledRight="53.61%"
          buttonFilledBottom="0%"
          buttonFilledLeft="0%"
          exploreFontSize="1.38rem"
        />
        <ButtonOutline
          carDimensions="/layer-31.svg"
          buttonOutlineWidth="51.42%"
          buttonOutlineHeight="100%"
          buttonOutlinePosition="absolute"
          buttonOutlineTop="0%"
          buttonOutlineRight="0%"
          buttonOutlineBottom="0%"
          buttonOutlineLeft="48.58%"
          goToMarketFontSize="1.38rem"
        />
      </div>
      <div className="creating-and-selling">{`Creating and selling NFTs in the marketplace has become a popular way to monetize digital creations. To get started, you first need to create your own NFT (Non-Fungible Token), `}</div>
      <div className="frame26">
        <b className="nft-sell-it-container">
          <span className="nft3">NFT</span>
          <span className="span">{` `}</span>
          <span>Sell it in the marketplace and make money</span>
        </b>
        <div className="rectangle-parent2">
          <div className="frame-child52" />
          <div className="frame27">
            <div className="frame-child53" />
            <div className="frame28">
              <img className="frame-child54" alt="" src="/vector-1010.svg" />
              <div className="frame-child55" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
