import React from 'react'
import { Radar } from 'react-chartjs-2';

//data gathered from https://www.fda.gov/media/77402/download
const data = {
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
};
const options = {
  scale: {
    ticks: {
        suggestedMin: 0,
        suggestedMax: 20
    }
  }
}

class RadarChart extends React.Component{
    state = {
        tableView: false
    }
    toggleView = () =>{
        this.setState({ tableView: !this.state.tableView })
    }
    render(){
        const table = () => {
            let headers = data.labels.map( (label, i) => <th key={i}>{label}</th>)
            let rows = data.datasets.map((fruit, i) => {
                let nums = fruit.data.map(num => <td>{num}</td> )
                return(
                <tr>
                    <td>{fruit.label}</td>
                    {nums}
                </tr>)
            })
            return (
                <table className="radar-table">
                    <tbody>
                        <tr>
                            <th>Fruit</th>
                            {headers}
                        </tr>
                        {rows}
                    </tbody>
                </table> 
            )
        }
        return(
            <div className="radar chart">
                <h2>Breakdown of Avocado vs Orange</h2>
                {this.state.tableView ? 
                    table():
                    <Radar data={data} options={options}/>}
                <p onClick={this.toggleView}>Switch to {this.state.tableView ? "Graph": "Table"}</p>
            </div>
        )
    }
}

export default RadarChart;