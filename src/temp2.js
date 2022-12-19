import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { createChart } from "lightweight-charts";
import { ChartComponent } from "./ChartComp";
const baseURL =
  "https://api.binance.com/api/v3/klines?symbol=BNBUSDT&interval=1d";

const initialData = [
  { time: "2018-12-22", open: 109.87, high: 14.9, low: 85.66, close: 111.26 },
  { time: "2018-12-23", open: 1.87, high: 1.69, low: 8.66, close: 111.26 },
  { time: "2018-12-24", open: 189.87, high: 114.69, low: 85.66, close: 111.26 },
  { time: "2018-12-25", open: 48.87, high: 1.69, low: 5.66, close: 111.26 },
  { time: "2018-12-26", open: 19.87, high: 114.69, low: 5.66, close: 111.26 },
  // { time: "2018-12-27", open: 10.87, high: 114.69, low: 85.66, close: 111.26 },
  // { time: "2018-12-28", open: 190.87, high: 114.69, low: 8.66, close: 111.26 },
  // { time: "2018-12-29", open: 480.87, high: 1.69, low: 5.66, close: 111.26 },
];

function App() {
  const [post, setPost] = useState(
    { time: "2018-12-22", open: 109.87, high: 14.9, low: 85.66, close: 111.26 },
    { time: "2018-12-23", open: 1.87, high: 1.69, low: 8.66, close: 111.26 },
    {
      time: "2018-12-24",
      open: 189.87,
      high: 114.69,
      low: 85.66,
      close: 111.26,
    },
    { time: "2018-12-25", open: 48.87, high: 1.69, low: 5.66, close: 111.26 },
    { time: "2018-12-26", open: 19.87, high: 114.69, low: 5.66, close: 111.26 }
  );

  useEffect(() => {
    getData().then((res) => {
      setPost(res);
      if (initialData.length > 6) {
        initialData.push({
          time: post[5][0],
          open: post[5][1],
          high: post[5][2],
          low: post[5][3],
          close: post[5][4],
        });
      } else {
        initialData.push({
          time: "2018-12-27",
          open: 10.87,
          high: 114.69,
          low: 85.66,
          close: 111.26,
        });
      }
    });
  }, []);

  async function getData() {
    try {
      let res = await axios({
        url: baseURL,
        method: "get",
        timeout: 8000,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status == 200) {
        // test for status you want, etc
        console.log(res.status);
      }
      // Don't forget to return something
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="App">
      <div>Trading App</div>
      {/* <div>{console.log(initialData)}</div> */}
      {initialData && <ChartComponent data={initialData}></ChartComponent>}
    </div>
  );
}

export default App;
