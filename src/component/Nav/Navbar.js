import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
import { Home } from "@mui/icons-material";
import { Leaderboard } from "@mui/icons-material";
import { Info } from "@mui/icons-material";
export default function Navbar() {
  return (
    <>
      <div className="container-fluid bg-light" id="navbar">
        <div className="row border border-3 rounded shadow">
          <div className="col d-flex justify-content-around border py-2">
            <Link to='/' >
            <Home/>
            </Link>
          </div>
          <div className="col d-flex justify-content-around border py-2">
            <Link to='/popular'>
            <Leaderboard  />
              
            </Link>
          </div>
          <div className="col d-flex justify-content-around border py-2">
            <Link to='/about'>
            <Info />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
