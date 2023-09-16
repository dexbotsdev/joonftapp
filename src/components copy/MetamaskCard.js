import { useMemo } from "react";
import "./MetamaskCard.css";

const MetamaskCard = ({
  dimensionCode,
  dimensionCodeText,
  imageDimensionCode,
  platformLogo,
  propLeft,
  propHeight,
  propTop,
  propLeft1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const rectangleDivStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const mETAMASKStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft1,
    };
  }, [propTop, propLeft1]);

  return (
    <div className="vector-group" style={frameDivStyle}>
      <img className="frame-child17" alt="" src={dimensionCode} />
      <div className="frame-parent6">
        <div className="rectangle-group">
          <div className="frame-child18" />
          <div className="frame6">
            <img className="frame-child19" alt="" src={dimensionCodeText} />
            <div className="frame-child20" />
          </div>
        </div>
        <div className="frame-child21" style={rectangleDivStyle} />
      </div>
      <img className="image-114-icon" alt="" src={imageDimensionCode} />
      <div className="metamask" style={mETAMASKStyle}>
        {platformLogo}
      </div>
    </div>
  );
};

export default MetamaskCard;
