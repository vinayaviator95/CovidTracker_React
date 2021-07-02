import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../Api/index";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Charts.module.css";

const Charts = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchDailyData();
      return setDailyData(data);
    };
    console.log(dailyData)
    fetchAPI();
  },[dailyData]);

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        lables: "",
        datasets: [{}, {}],
      }}
    />
  ) : null;

  return <div></div>;
};

export default Charts;
