import React from "react";
import mwallet from "./wagnet.svg";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";




function Home() {

  const navigate = useNavigate();

  return (
    <>
      <div className="content">
        <img src={mwallet} alt="logo" className="frontPageLogo" />
        <h2> Hey There</h2>
        <h4 className="h4"> Welcome to your Web3 PWallet</h4>
        <Button
          onClick={() => navigate("/yourwallet")}
          className="frontPageButton"
          type="primary"
        >
          Create A Wallet
        </Button>
        <Button
          onClick={() => navigate("/recover")}
          className="frontPageButton"
          type="default"
        >
          Sign In With Seed Phrase
        </Button>
        <p className="frontPageBottom">
          Find Alt Coin Gems:{" "}
          <a href="https://github.com/princekumarpaswan" target="_blank" rel="noreferrer">
            Prince.github
          </a>
        </p>
      </div>
    </>
  );
}

export default Home;
