import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { createChart } from "lightweight-charts";
import { ChartComponent } from "./ChartComp";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./Navbar";
import Coin from "./Coin";
import CopyRight from "./copyright";
const URL = "https://api.binance.com/api/v3/klines?symbol=BNBUSDT&interval=1d";

const dark = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      contrastText: "#FFFFFF",
    },
  },
  // typography: {
  //   fontFamily: "Poppins",
  //   h1: {
  //     fontSize: "40px",
  //     fontWeight: 600,
  //   },
  //   h2: {
  //     fontSize: "18px",
  //     fontWeight: 400,
  //   },
  //   h3: {
  //     fontWeight: 400,
  //     fontSize: "16px",
  //   },
  // },
});

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(URL).then((res) => {
      console.log(res.data);
      res.data.map((each) => {
        // dummy entry for blueprint
        var curEntry = {
          time: "2018-12-22",
          open: 109.87,
          high: 14.9,
          low: 85.66,
          close: 111.26,
        };

        //converting time-stamp form  API to suitable format for Chart
        var date = new Date(each[0]);
        var month = (date.getMonth() + 1).toString().padStart(2, "0");
        var day = date.getDate().toString().padStart(2, "0");
        var year = date.getFullYear();

        var nowTime = year + "-" + month + "-" + day;

        // storing new Entry
        curEntry.time = nowTime;
        curEntry.open = each[1];
        curEntry.high = each[2];
        curEntry.low = each[3];
        curEntry.close = each[4];

        // updating the chart (LIVE-UPDATE)
        // could be optimize further
        setPost((post) => [...post, curEntry]);
      });
    });
  }, [post]);

  return (
    <ThemeProvider theme={dark}>
      <div className="App">
        <Navbar></Navbar>
        <Coin></Coin>
        <ChartComponent data={post}></ChartComponent>
        <CopyRight></CopyRight>
      </div>
    </ThemeProvider>
  );
}

export default App;
