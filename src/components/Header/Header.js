import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const Header = ({ handleModal }) => {
  return (
    <div className="bg-[#ff6347]">
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-row items-center justify-between gap-4">
          <div>
            <Link to="/" className="text-decoration-line: none">
              <h1
                style={{
                  fontSize: "2.5rem",
                  color: "#3c3f4a",
                  transform: "skew(-5deg, -5deg) rotate(5deg)",
                  webkitTransform: "skew(-5deg, -5deg) rotate(5deg)",
                  webkitTransformOrigin: "center center",
                  transformOrigin: "center center",
                  textShadow:
                    "-1px 1px #E1DFDB, -2px 2px #E1DFDB, -3px 3px #120600, -4px 4px #120600, -5px 5px #E1DFDB, -6px 6px #E1DFDB, -7px 7px #120600, -8px 8px #120600, -9px 9px #E1DFDB, -10px 10px #E1DFDB, -11px 11px 15px rgba(0, 0, 0, 0.5)",
                }}
              >
                Aby Zebra
              </h1>
            </Link>
          </div>
          {/* MENU ICON - NEEDS WORK!!! */}
          <div className="flex w-8 h-8 items-center justify-around">
            <FontAwesomeIcon
              icon={faPaw}
              className="h-6 leading-6 cursor-pointer hover:text-[#343434]"
              onClick={() => handleModal()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
