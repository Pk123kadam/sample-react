import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";

const LineChart = () => {
    const [coin, setCoin] = useState([])
    const options = {
        scales: {
            x: {
                grid: {
                    display: true, // Hide the x-axis grid lines
                },
            },
            y: {
                grid: {
                    display: false, // Hide the y-axis grid lines
                },
            },
        },
    };

    const data = {
        labels: coin?.data?.coins.map((e) => e.name),
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "blue",
                borderColor: "blue",
                data: coin?.data?.coins.map((e) => e.price),
            },
            {
                label: "My second dataset",
                backgroundColor: "orange",
                borderColor: "orange",
                data: coin?.data?.coins.map((e) => e.listedAt.toString().slice(0, 5)),
            }

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
            <Line data={data} options={options} />
            {/* <Bar data={data} />
            <Pie data={data} /> */}
        </div>
    );
};

export default LineChart;