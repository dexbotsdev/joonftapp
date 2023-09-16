import { useMemo } from "react";
import "./ButtonOutline.css";

const ButtonOutline = ({
  carDimensions,
  buttonOutlineWidth,
  buttonOutlineHeight,
  buttonOutlinePosition,
  buttonOutlineTop,
  buttonOutlineRight,
  buttonOutlineBottom,
  buttonOutlineLeft,
  goToMarketFontSize,
}) => {
  const buttonOutlineStyle = useMemo(() => {
    return {
      width: buttonOutlineWidth,
      height: buttonOutlineHeight,
      position: buttonOutlinePosition,
      top: buttonOutlineTop,
      right: buttonOutlineRight,
      bottom: buttonOutlineBottom,
      left: buttonOutlineLeft,
    };
  }, [
    buttonOutlineWidth,
    buttonOutlineHeight,
    buttonOutlinePosition,
    buttonOutlineTop,
    buttonOutlineRight,
    buttonOutlineBottom,
    buttonOutlineLeft,
  ]);

  const goToMarketStyle = useMemo(() => {
    return {
      fontSize: goToMarketFontSize,
    };
  }, [goToMarketFontSize]);

  return (
    <div className="buttonoutline" style={buttonOutlineStyle}>
      <div className="layer-3-parent">
        <img className="layer-3-icon" alt="" src={carDimensions} />
        <b className="go-to-market" style={goToMarketStyle}>
          Go to market
        </b>
      </div>
    </div>
  );
};

export default ButtonOutline;
