import React from 'react'
import { Line } from 'react-chartjs-2'

class LineChart extends React.Component{
    state={
        states: ['California', 'Texas', 'Arkansas', 'Florida', 'New York', 'Delaware', 'Puerto Rico'],
        data: {}
    }
    componentDidMount(){
        fetch('https://datausa.io/api/data?drilldowns=State&measures=Average Age')
        .then(response => response.json())
        .then(data => this.extractData(data.data))
    }
    extractData = (data) =>{
        console.log(data)
        const states = this.state.states
        const datasets = states.map( state => {
            return {label: state, data: [], borderColor: "#742774"}
        })
        data.map(obj => {
            //Texas, California, Arkansas, Florida, New York
            if(states.includes(obj.State)){
                datasets.find(set => set.label === obj.State).data.unshift(obj['Average Age'])
            }
        })
        const newData = {
            labels: [2014, 2015, 2016, 2017, 2018],
            datasets
        }
        this.setState({data: newData})
    }
    render(){
        console.log(this.state.data)
        return(
            <div>
                <Line data={this.state.data} />
            </div>
        )
    }
}

export default LineChart;