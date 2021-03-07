import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          variant="outlined"
          className="banner__searchButton"
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? "Hide" : "Search dates" }
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          {" "}
          Plan a different kind of geteway to uncover the hidden gems near you{" "}
        </h5>

        <Button variant="outlined">Explore nearBy</Button>
      </div>
    </div>
  );
}

export default Banner;
