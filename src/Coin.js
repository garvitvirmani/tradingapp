import React from "react";
import "./Navbar.css";
function Coin() {
  return (
    <div>
      <div className="coin">
        <div>
          <img
            style={{ marginLeft: "50%" }}
            src={require("./assets/Eth.png")}
          />
        </div>
        <div className="coinHeading">
          <h3 style={{ marginBottom: "0", color: "white" }}>ETHUSDT</h3>
          <h5 style={{ marginTop: "0" }}>Preptual</h5>
        </div>
        <img
          style={{ marginLeft: "0.8%" }}
          src={require("./assets/ddwn.png")}
          width="2%"
        />
        <div className="props">
          <p
            style={{
              color: "#00BD84",
              marginLeft: "25px",
              fontSize: "30px",
              marginTop: "3%",
            }}
          >
            $40,988
          </p>
          <div>
            <h4>Mark</h4>
            <p style={{ color: "white" }}>40,564.60</p>
          </div>
          <div>
            <h4>Index</h4>
            <p style={{ color: "white" }}>40,564.60</p>
          </div>
          <div>
            <h4>24h High</h4>
            <p style={{ color: "white" }}>40,564.60</p>
          </div>
          <div>
            <h4>24h Low</h4>
            <p style={{ color: "white" }}>40,564.60</p>
          </div>
          <div>
            <h4>24h Margin</h4>
            <p style={{ color: "#00BD84" }}>+564.60(4.014%)</p>
          </div>
          <div>
            <h4>24h Volume(Usdt)</h4>
            <p style={{ color: "white" }}>40,564.60</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coin;
