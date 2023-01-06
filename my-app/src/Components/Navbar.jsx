import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        margin: "1%",
        borderRadius: "5px 20px 5px",

        // background:
        //   "linear-gradient(120deg, rgba(210,10,0,0.7), rgba(180,0,55,0) 99.71%)",
        background:
          "linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <h1
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          Home
        </h1>
      </Link>
      <Link
        to="/all"
        style={{
          textDecoration: "none",
        }}
      >
        <h1
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          All
        </h1>
      </Link>
      <Link
        to="/html"
        style={{
          textDecoration: "none",
        }}
      >
        <h1
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          HTML
        </h1>
      </Link>
      <Link
        to="/css"
        style={{
          textDecoration: "none",
        }}
      >
        <h1
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          CSS
        </h1>
      </Link>
      <Link
        to="/javascript"
        style={{
          textDecoration: "none",
        }}
      >
        <h1
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          JavaScript
        </h1>
      </Link>
    </div>
  );
};

export default Navbar;
