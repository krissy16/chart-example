import React from 'react'
import { Pie } from 'react-chartjs-2';

//data from https://www.cdc.gov/nchs/products/databriefs/db232.htm
const originalData = {
    labels: ['Under 20', '20-24', '25-29', '30-34', '35 and Over'],
    datasets: [
      {
        label: 'Age of First Time Mothers',
        fill: false,
        data: [13.4, 28.7, 27.7, 21.1, 9.1],
        backgroundColor: [
          '#F17CB0',
          '#5DA5DA',
          '#60BD68',
          '#ac6cac',
          '#DECF3F'
        ]
      }
    ]
  };

//sample data for drilldown
const drilldownData = [
    // 'Under 20' 
    [['Under 16', '16', '17', '18', '19'], [6, 10, 23, 25, 36]], 
    // '20-24'
    [['20', '21', '22', '23', '24'], [27, 19, 20, 23, 11]],
    // '25-29' 
    [['25', '26', '27', '28', '29'], [15, 18, 24, 32, 11]], 
    // '30-34' 
    [['30', '31', '32', '33', '34'], [40, 30, 20, 8, 2]], 
    // '35 and Over'
    [['35', '36', '37', '38', '39 and Over'], [50, 30, 15, 10, 5]]
]


class PieChart extends React.Component{
    state={
        data: JSON.parse(JSON.stringify(originalData)),
        back: false
    }
    drillDown = (event, item) =>{
        if(!item.length || this.state.back) return
        
        let newData = this.state.data
        newData.labels = drilldownData[item[0]['_index']][0]
        newData.datasets[0].data = drilldownData[item[0]['_index']][1]
        this.setState({ data: newData, back: true})
    }
    goBack = () => {
        this.setState({ data: JSON.parse(JSON.stringify(originalData)), back: false})
    }
    render(){
        const options = {
            'onClick' : this.drillDown
        }
        return(
            <div className="pie chart">
                <h2>Age of First Time Mothers</h2>
                <Pie data={this.state.data} options={options}/>
                {this.state.back ? <p className="back" onClick={this.goBack}>Back</p> : ''}
            </div>
        )
    }
}

export default PieChart;