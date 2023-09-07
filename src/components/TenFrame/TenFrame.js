import React, { useEffect, useState } from "react";

export default function TenFrame({ dotAmount }) {
  const [dots, setDots] = useState({
    f1: false,
    f2: false,
    f3: false,
    f4: false,
    f5: false,
    f6: false,
    f7: false,
    f8: false,
    f9: false,
    f10: false,
  });

  // provides the right amount of dots for each ten frame
  while (dotAmount >= 0) {
    dots[`f${dotAmount}`] = true;
    dotAmount--;
  }

  return (
    <div className="flex flex-col w-10/12 lg:w-full">
      <div className="flex w-full flex-row justify-center items-center">
        <div className="flex justify-center items-center aspect-square w-1/5 border-4 border-solid border-black border-b-0 border-r-0">
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
        <div className="flex justify-center items-center aspect-square w-1/5 border-4 border-solid border-black border-b-0 border-r-0">
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
        <div className="flex justify-center items-center aspect-square w-1/5 border-4 border-solid border-black border-b-0 border-r-0">
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
        <div className="flex justify-center items-center aspect-square w-1/5 border-4 border-solid border-black border-b-0 border-r-0">
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
        <div className="flex justify-center items-center aspect-square w-1/5 border-4 border-solid border-black border-b-0">
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
      </div>
      <div className="flex w-full flex-row justify-center items-center">
        <div className="flex justify-center items-center aspect-square w-1/5 border-4 border-solid border-black border border-r-0">
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
        <div className="flex justify-center items-center aspect-square w-1/5 border-4 border-solid border-black border border-r-0">
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
        <div className="flex justify-center items-center aspect-square w-1/5 border-4 border-solid border-black border-r-0">
          <div
            className="bg-red-500"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "100%",
              display: `${dots.f8 ? "block" : "none"}`,
            }}
          ></div>
        </div>
        <div className="flex justify-center items-center aspect-square w-1/5 border-4 border-solid border-black border-r-0">
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
        <div className="flex justify-center items-center aspect-square w-1/5 border-4 border-solid border-black">
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
      </div>
    </div>
  );
}