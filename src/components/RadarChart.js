import { Radar } from 'react-chartjs-2';

//data gathered from https://www.fda.gov/media/77402/download
const data = {
//   labels: ['English', 'Math', 'History', 'Art', 'Geography', 'Science', 'P.E.'],
    labels: ['Total Fat', 'Total Carbohydrate', 'Dietary Fiber', 'Sugar', 'Protein'],
    datasets: [
        // { //cal, fat, carb, fiber, protein, sugar
        //     label: 'Apple',
        //     data: [0, 34, 5, 25, 1],
        //     backgroundColor: 'rgba(255, 0, 0, 0.3)',
        //     fill: true
        // },
        {
            label: 'Avocado',
            data: [4.5, 3, 1, 0, 1],
            backgroundColor: 'rgba(0, 153, 51, 0.3)',
            fill: true
        },
        {
            label: 'Orange',
            data: [0, 19, 3, 14, 1],
            backgroundColor: 'rgba(255, 153, 51, 0.3)',
            fill: true
        }
    ]
//   datasets: [
//     {
//       label: 'Sara',
//       fill: false,
//       data: [65, 59, 80, 81, 56, 55, 40],
//       backgroundColor: 'rgba(153, 51, 255, 0.3)',
//       fill: true
//     },
//     {
//       label: 'Paul',
//       fill: false,
//       data: [90, 83, 27, 7, 75, 60, 15],
//       backgroundColor: 'rgba(255, 51, 51, 0.3)',
//       fill: true
//     }
//   ]
};
const options = {
  scale: {
    ticks: {
        suggestedMin: 0,
        suggestedMax: 20
    }
  }
}

function RadarChart(){
    return(
        <div>
            <Radar data={data} options={options}/>
        </div>
    )
}

export default RadarChart;