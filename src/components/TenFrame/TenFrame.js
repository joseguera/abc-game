import React, { useEffect, useState } from "react";
import { FrameHolder, FrameRow } from "./TenFrame.styles";

export default function TenFrame({ unitNumber }) {
  const [dots, setDots] = useState({
    f1: true,
    f2: false,
    f3: false,
    f4: false,
    f5: false,
    f6: false,
    f7: false,
    f8: false,
    f9: false,
    f10: false,
  })




  return (
    <FrameHolder>
      {console.log(dots)}
      <FrameRow>
        <div
          className="frame top-row top-cells"
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "100%",
              background: "red",
              display: `${dots.f1 ? "block" : "none"}`,
            }}
          ></div>
        </div>
        <div className="frame top-row top-cells">
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "100%",
              background: "red",
              display: `${dots.f2 ? "block" : "none"}`,
            }}
          ></div>
        </div>
        <div className="frame top-row top-cells">
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "100%",
              background: "red",
              display: `${dots.f3 ? "block" : "none"}`,
            }}
          ></div>
        </div>
        <div className="frame top-row top-cells">
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "100%",
              background: "red",
              display: `${dots.f4 ? "block" : "none"}`,
            }}
          ></div>
        </div>
        <div className="frame top-row">
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "100%",
              background: "red",
              display: `${dots.f5 ? "block" : "none"}`,
            }}
          ></div>
        </div>
      </FrameRow>
      <FrameRow>
        <div className="frame lower-row bottom-cells">
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "100%",
              background: "red",
              display: `${dots.f6 ? "block" : "none"}`,
            }}
          ></div>
        </div>
        <div className="frame lower-row bottom-cells">
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "100%",
              background: "red",
              display: `${dots.f7 ? "block" : "none"}`,
            }}
          ></div>
        </div>
        <div className="frame lower-row bottom-cells">
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "100%",
              background: "red",
              display: `${dots.f8 ? "block" : "none"}`,
            }}
          ></div>
        </div>
        <div className="frame lower-row bottom-cells">
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "100%",
              background: "red",
              display: `${dots.f9 ? "block" : "none"}`,
            }}
          ></div>
        </div>
        <div className="frame lower-row">
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "100%",
              background: "red",
              display: `${dots.f10 ? "block" : "none"}`,
            }}
          ></div>
        </div>
      </FrameRow>
    </FrameHolder>
  );
}
