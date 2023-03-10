import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Chart from "chart.js/auto";

const SoilUse = () => {
  const chartRef = useRef();
  const { producer } = useSelector((state) => state);

  const arableLandTotal = producer.reduce(
    (total, land) => total + Number(land.arableLand),
    0
  );
  const vegetationAreaTotal = producer.reduce(
    (total, land) => total + Number(land.vegetationArea),
    0
  );

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Área agricultável", "Área de vegetação"],
        datasets: [
          {
            label: "Use soil",
            data: [arableLandTotal, vegetationAreaTotal],
            backgroundColor: ["#3f51b5", "#4caf50"],
            borderColor: "black",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Uso de solo",
          },
        },
      },
    });
  });

  return <canvas ref={chartRef} />;
};

export default SoilUse;
