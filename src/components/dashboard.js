import React from "react"
import { useSelector} from "react-redux"
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);



const Dashboard = () => {
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
    const data = {
        labels: states,
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
              label: 'Estados',
              data: states.map(item => getOccurrence(producer.map(item => item.state), item)),
              // you can set indiviual colors for each bar
              backgroundColor: states.map(()  => generateRandomColor()),
              borderWidth: 1,
            }
        ]
}
      
    return(
        <Pie
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            }
          }
        }}
      />


    ) 
    
        
    }

    export default Dashboard
