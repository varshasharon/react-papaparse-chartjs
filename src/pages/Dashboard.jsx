import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Papa from "papaparse";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom"; 
import smile from "../assets/smily.png";
import neutral from "../assets/shock.png";
import "../App.css";
import sad from "../assets/sad.png";
import profile from "../assets/human.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [chartData, setChartData] = useState({ datasets: [] });
  const [chartOptions, setChartOptions] = useState({});
  const [lineData, setLineData] = useState({ datasets: [] });
  const [doughnutData, setDoughnutData] = useState({ datasets: [] });

  useEffect(() => {
    fetch("/assets/patient_dataset.csv")
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: true,
          complete: (result) => {
            console.log("Parsed CSV Data:", result.data); // Debugging

            const bpData = result.data
              .map((item) => parseFloat(item["BP"]))
              .filter((value) => !isNaN(value));

            setChartData({
              labels: bpData.map((_, index) => `Patient ${index + 1}`),
              datasets: [
                {
                  label: "Blood Pressure",
                  data: bpData,
                  borderColor: "black",
                  backgroundColor: "#f9d95e",
                  borderRadius: 15,
                },
              ],
            });

            const ageData = result.data
              .map((item) => parseFloat(item["Age"]))
              .filter((value) => !isNaN(value));
              

            setLineData({
              labels: ageData.map((_, index) => `Patient ${index + 1}`),
              datasets: [
                {
                  label: "Age",
                  data: ageData,
                  borderColor: "black",
                  backgroundColor: "#505254",
                  pointBackgroundColor: "#f9d95e",
                  pointRadius: 5,
                },
              ],
            });

            const cholesterolCounts = { Low: 0, Medium: 0, High: 0 };

            result.data.forEach((row) => {
              const level = row["Cholesterol"];
              if (level in cholesterolCounts) {
                cholesterolCounts[level]++;
              }
            });

            console.log("Cholesterol Count:", cholesterolCounts); // Debugging

            setDoughnutData({
              labels: ["Low", "Medium", "High"],
              datasets: [
                {
                  label: "Cholesterol Levels",
                  data: Object.values(cholesterolCounts),
                  backgroundColor: [ "#FFB22C", "#A6A9B6", "#000000"],
                  hoverOffset: 4,
                },
              ],
            });

            setChartOptions({
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
                title: {
                  display: true,
                },
              },
            });
          },
        });
      })
      .catch((error) => console.error("Error fetching CSV: ", error));
  }, []);

  return (
    <>
      <div className="cont">
        <div className="nav">

        </div>
        <div className="side">
          
        </div>

        <div className="cardone">
          <div className="scard one">
            <p>Total patients</p>
            <p>
              <span>21</span>
            </p>
          </div>
          <div className="scard two">
            <p>Average BMI</p>
            <p>
              <span>25.73</span>
            </p>
          </div>
        </div>

        <div className="cardtwo">
          <div className="scard three">
            <p>Degrees of Cholesterol</p>
            <p>
              <div className="level-img">
              <img src={smile} alt="" className="smile" />
              <img src={neutral} alt="" className="shock" />
              <img src={sad} alt=""  className="sad"/>

              </div>
            </p>
          </div>
          <div className="scard four">
            <p>Average BP</p>
            <p>
              <span>131.9</span>
            </p>
          </div>
        </div>

        <div className="line">
          {lineData.datasets.length > 0 ? (
            <Line options={chartOptions} data={lineData} />
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div className="bar">
          {chartData.datasets.length > 0 ? (
            <Bar options={chartOptions} data={chartData} />
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div className="dough">
          {doughnutData.datasets.length > 0 ? (
            <Doughnut options={chartOptions} data={doughnutData} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
