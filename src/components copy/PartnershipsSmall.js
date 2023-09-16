import MetamaskCard from "./MetamaskCard";
import "./PartnershipsSmall.css";

const PartnershipsSmall = () => {
  return (
    <div className="partnershipssmall">
      <MetamaskCard
        dimensionCode="/vector-6.svg"
        dimensionCodeText="/vector-102.svg"
        imageDimensionCode="/image-114@2x.png"
        platformLogo="METAMASK"
      />
      <div className="vector-container">
        <img className="frame-child22" alt="" src="/vector-61.svg" />
        <div className="frame-parent7">
          <div className="rectangle-container">
            <div className="frame-child23" />
            <div className="frame7">
              <img className="frame-child24" alt="" src="/vector-103.svg" />
              <div className="frame-child25" />
            </div>
          </div>
          <div className="frame-child26" />
        </div>
        <img className="image-114-icon1" alt="" src="/image-1141@2x.png" />
        <div className="binance-bsc">Binance BSC</div>
      </div>
      <MetamaskCard
        dimensionCode="/vector-62.svg"
        dimensionCodeText="/vector-104.svg"
        imageDimensionCode="/image-1142@2x.png"
        platformLogo="Coingecko"
        propLeft="41.04rem"
        propHeight="52.38%"
        propTop="63.01%"
        propLeft1="30.54%"
      />
      <MetamaskCard
        dimensionCode="/vector-63.svg"
        dimensionCodeText="/vector-105.svg"
        imageDimensionCode="/image-1143@2x.png"
        platformLogo="Pancakeswap"
        propLeft="61.57rem"
        propHeight="52.38%"
        propTop="62.85%"
        propLeft1="24.81%"
      />
    </div>
  );
};

export default PartnershipsSmall;
