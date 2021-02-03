import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['Under 20', '20-24', '25-29', '30-34', '35 and Over'],
  datasets: [
    {
      label: 'Age of First Time Mothers',
      fill: false,
      data: [13.4, 28.7, 27.7, 21.1, 9.1],
      backgroundColor: [
        'rgba(153, 51, 255, 0.3)',
        'cyan',
        'red',
        'pink',
        'green'
      ]
    }
  ]
};

function PieChart(){
    return(
        <div>
            <Pie data={data} />
        </div>
    )
}

export default PieChart;