import React from "react";
import { FrameHolder, FrameRow } from "./TenFrame.styles";

export default function TenFrame() {
  return (
    <FrameHolder>
      <FrameRow>
        <div className="top-row top-cells"></div>
        <div className="top-row top-cells"></div>
        <div className="top-row top-cells"></div>
        <div className="top-row top-cells"></div>
        <div className="top-row"></div>
      </FrameRow>
      <FrameRow>
        <div className="lower-row bottom-cells"></div>
        <div className="lower-row bottom-cells"></div>
        <div className="lower-row bottom-cells"></div>
        <div className="lower-row bottom-cells"></div>
        <div className="lower-row"></div>
      </FrameRow>
    </FrameHolder>
  );
}
