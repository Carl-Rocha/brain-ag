import React, { useEffect, useRef } from 'react';
import { useSelector} from "react-redux"
import Chart from 'chart.js/auto';
import Box from '@mui/material/Box';



const States = () => {
    const chartRef = useRef();
    const { producer } = useSelector(state => state)

    const removeDuplicates = (arr) => {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }
    const getOccurrence = (array, value) => {
        let count = 0;
        array.forEach((v) => (v === value && count++));
        return count;
    }
    const generateRandomColor = () => {
        let maxVal = 0xFFFFFF; // 16777215
        let randomNumber = Math.random() * maxVal; 
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0);   
        return `#${randColor.toUpperCase()}`
    }
    const states = removeDuplicates(producer.map(item => item.state));
  
    useEffect(() => {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: states,
          datasets: [
            {
              label: 'Estados',
              data: states.map(item => getOccurrence(producer.map(item => item.state), item)),
              backgroundColor: states.map(()  => generateRandomColor()),
              borderColor: "black",
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Estados',
            },
          },
        },
      });
    }, );
  
    return(
        <Box maxWidth="md" display="flex" >
<canvas ref={chartRef} />
        </Box>

    ) 
  };

    export default States