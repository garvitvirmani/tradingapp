import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { createChart } from "lightweight-charts";
import { ChartComponent } from "./ChartComp";
const baseURL =
  "https://api.binance.com/api/v3/klines?symbol=BNBUSDT&interval=1d";

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      console.log(res.data);
      res.data.map((each) => {
        var curEntry = {
          time: "2018-12-22",
          open: 109.87,
          high: 14.9,
          low: 85.66,
          close: 111.26,
        };
        let options = {
          hour: "numeric",
          minute: "numeric",
          dayPeriod: "short",
        };
        //    console.log(each[0]);
        var date = new Date(each[0]);
        //  console.log(date);
        var month = (date.getMonth() + 1).toString().padStart(2, "0");
        var day = date.getDate().toString().padStart(2, "0");
        var year = date.getFullYear();

        var nowTime = year + "-" + month + "-" + day;
        // console.log(nowTime);
        curEntry.time = nowTime;
        curEntry.open = each[1];
        curEntry.high = each[2];
        curEntry.low = each[3];
        curEntry.close = each[4];

        setPost((post) => [...post, curEntry]);
      });
    });
  }, [post]);

  return (
    <div className="App">
      <div>Trading App</div>
      {/* <div>{console.log(initialData)}</div> */}
      <ChartComponent data={post}></ChartComponent>
    </div>
  );
}

export default App;
