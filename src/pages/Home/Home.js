import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {

  return (
    <div className="w-3/4 flex flex-col items-center justify-center">
      <h2>Welcome to Aby Zebra</h2>
      <div className="w-full flex flex-col items-center gap-12">
        <Link to="/science" className="no-underline">
          <div className="btn-3d-1">Science</div>
        </Link>
        <div className="btn-3d-1">Technology</div>
        <div className="btn-3d-1">Engineering</div>
        <Link to="/arts" className="no-underline">
          <div className="btn-3d-1">Arts</div>
        </Link>
        <Link to="/math" className="no-underline">
          <div className="btn-3d-1">Math</div>
        </Link>
      </div>
    </div>
  );
}
