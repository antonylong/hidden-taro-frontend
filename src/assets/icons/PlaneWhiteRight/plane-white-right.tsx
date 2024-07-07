import React from "react";
import planeImage from "./Plane-White-Right.png";

interface PaperPlaneIconProps {
  height: number;
  width: number;
}

export const PaperPlaneIcon: React.FC<PaperPlaneIconProps> = ({
  height = 24,
  width = 24,
}) => (
  <>
    <img
      src={planeImage.src}
      alt="Paper Plane"
      style={{ width: width, height: height }}
    />
  </>
);
