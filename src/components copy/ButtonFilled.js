import { useMemo } from "react";
import "./ButtonFilled.css";

const ButtonFilled = ({
  carDimensions,
  buttonFilledWidth,
  buttonFilledHeight,
  buttonFilledPosition,
  buttonFilledTop,
  buttonFilledRight,
  buttonFilledBottom,
  buttonFilledLeft,
  exploreFontSize,
}) => {
  const buttonFilledStyle = useMemo(() => {
    return {
      width: buttonFilledWidth,
      height: buttonFilledHeight,
      position: buttonFilledPosition,
      top: buttonFilledTop,
      right: buttonFilledRight,
      bottom: buttonFilledBottom,
      left: buttonFilledLeft,
    };
  }, [
    buttonFilledWidth,
    buttonFilledHeight,
    buttonFilledPosition,
    buttonFilledTop,
    buttonFilledRight,
    buttonFilledBottom,
    buttonFilledLeft,
  ]);

  const exploreStyle = useMemo(() => {
    return {
      fontSize: exploreFontSize,
    };
  }, [exploreFontSize]);

  return (
    <div className="buttonfilled" style={buttonFilledStyle}>
      <img className="layer-2-icon" alt="" src={carDimensions} />
      <b className="explore" style={exploreStyle}>
        Explore
      </b>
    </div>
  );
};

export default ButtonFilled;
