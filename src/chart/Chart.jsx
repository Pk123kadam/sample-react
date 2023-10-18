import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import axios from "axios";

const LineChart = () => {
    const [coin, setCoin] = useState([])
    const data = {
        labels: coin?.data?.coins.map((e) => e.name),
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: coin?.data?.coins.map((e) => e.price),
            },
        ],
    };
    useEffect(() => {
        let call = async () => {
            let data = await axios.get("https://api.coinranking.com/v2/coins")
            setCoin(data.data)
        }
        call()
    }, [])
    return (
        <div style={{ padding: "100px" }}>
            <Line data={data} />
            <Bar data={data} />
            <Pie data={data} />
        </div>
    );
};

export default LineChart;