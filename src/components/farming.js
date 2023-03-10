import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Chart from "chart.js/auto";
import Box from "@mui/material/Box";

const Farming = () => {
  const chartRef = useRef();
  const { producer } = useSelector((state) => state);
  const removeDuplicates = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  };
  const getOccurrence = (array, value) => {
    let count = 0;
    array.forEach((v) => v === value && count++);
    return count;
  };
  const generateRandomColor = () => {
    let maxVal = 0xffffff;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`;
  };
  let farmingTypes = [];

  for (let x = 0; x < producer.length; x++) {
    farmingTypes = [
      ...farmingTypes,
      ...producer[x].crops?.split(",").map((item) => item.trim()),
    ];
  }
  const noDuplicatesFarmingTypes = removeDuplicates(farmingTypes);
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: noDuplicatesFarmingTypes,
        datasets: [
          {
            label: "Tipo de Cultura",
            data: noDuplicatesFarmingTypes.map((item) =>
              getOccurrence(
                farmingTypes.map((farming) => farming),
                item
              )
            ),
            backgroundColor: noDuplicatesFarmingTypes.map(() =>
              generateRandomColor()
            ),
            borderColor: "black",
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Tipo de Cultura",
          },
        },
      },
    });
  });

  return (
    <Box maxWidth="md" display="flex">
      <canvas ref={chartRef} />
    </Box>
  );
};

export default Farming;
