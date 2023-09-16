import { useMemo } from "react";
import "./SmallCardIcon.css";

const SmallCardIcon = ({ dimensionText, propTop, propLeft, propZIndex }) => {
  const smallCardIconStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      zIndex: propZIndex,
    };
  }, [propTop, propLeft, propZIndex]);

  return (
    <img
      className="smallcard-icon"
      alt=""
      src={dimensionText}
      style={smallCardIconStyle}
    />
  );
};

export default SmallCardIcon;
