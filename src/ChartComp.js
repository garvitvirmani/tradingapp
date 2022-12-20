import { createChart, ColorType } from "lightweight-charts";
import React, { useEffect, useRef } from "react";

export const ChartComponent = ({ data }) => {
  const chartContainerRef = useRef();

  useEffect(() => {
    console.log(data);
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "#171a24" },
        textColor: "white",
      },
      width: chartContainerRef.current.clientWidth,
      height: 350,
    });
    chart.timeScale().fitContent();

    const newSeries = chart.addCandlestickSeries({
      lineColor: "#2962FF",
      topColor: "#2962FF",
      bottomColor: "rgba(41, 98, 255, 0.28)",
    });

    newSeries.setData(data);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [data]);

  return <div ref={chartContainerRef}></div>;
};
