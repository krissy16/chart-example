import React from 'react'
import { Line } from 'react-chartjs-2'

class LineChart extends React.Component{
    state={
        states: ['California', 'Texas', 'Arkansas', 'Florida', 'New York', 'Utah'],
        data: {},
        value: ''
    }
    componentDidMount(){
        this.fetchData()
    }
    fetchData(){
        fetch('https://datausa.io/api/data?drilldowns=State&measures=Average Age')
        .then(response => response.json())
        .then(data => this.extractData(data.data))
    }
    extractData = (data) =>{
        const states = this.state.states
        const datasets = states.map( state => {
            return {
                label: state, 
                data: [], 
                borderColor: "rgba(75,192,192,1)",
                fill: false
            }
        })
        data.map(obj => {
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
    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    addState = (e) =>{
        e.preventDefault()
        if(!this.state.states.includes(this.state.value)){
            this.setState({ states: [this.state.value, ...this.state.states] }, this.fetchData)
        }
    }
    removeState = (e) =>{
        e.preventDefault()
        if(this.state.states.includes(this.state.value)){
            this.setState({ states: this.state.states.filter(state => state !== this.state.value) }, this.fetchData)
        }
    }
    render(){
        return(
            <div className="line chart">
                <h2>Average Age of States Over Time</h2>
                <Line 
                    data={this.state.data} 
                    options={{ 
                        maintainAspectRatio: false,
                        height: 400,
                        width: 80,
                        legend: {
                            display: true,
                            labels: {
                                boxWidth: 10,
                                fontSize: 10
                            }
                        }
                        }}/>
                <form>
                    <fieldset>
                        <label htmlFor="state">State</label>
                        <select className="select-style" id="state" name="state" value={this.state.value} onChange={this.handleChange}>
                            <option value="Alabama">Alabama</option>
                            <option value="Alaska">Alaska</option>
                            <option value="Arizona">Arizona</option>
                            <option value="Arkansas">Arkansas</option>
                            <option value="California">California</option>
                            <option value="Colorado">Colorado</option>
                            <option value="Connecticut">Connecticut</option>
                            <option value="Delaware">Delaware</option>
                            <option value="District of Columbia">District of Columbia</option>
                            <option value="Florida">Florida</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Hawaii">Hawaii</option>
                            <option value="Idaho">Idaho</option>
                            <option value="Illinois">Illinois</option>
                            <option value="Indiana">Indiana</option>
                            <option value="Iowa">Iowa</option>
                            <option value="Kansas">Kansas</option>
                            <option value="Kentucky">Kentucky</option>
                            <option value="Louisiana">Louisiana</option>
                            <option value="Maine">Maine</option>
                            <option value="Maryland">Maryland</option>
                            <option value="Massachusetts">Massachusetts</option>
                            <option value="Michigan">Michigan</option>
                            <option value="Minnesota">Minnesota</option>
                            <option value="Mississippi">Mississippi</option>
                            <option value="Missouri">Missouri</option>
                            <option value="Montana">Montana</option>
                            <option value="Nebraska">Nebraska</option>
                            <option value="Nevada">Nevada</option>
                            <option value="New Hampshire">New Hampshire</option>
                            <option value="New Jersey">New Jersey</option>
                            <option value="New Mexico">New Mexico</option>
                            <option value="New York">New York</option>
                            <option value="North Carolina">North Carolina</option>
                            <option value="North Dakota">North Dakota</option>
                            <option value="Ohio">Ohio</option>
                            <option value="Oklahoma">Oklahoma</option>
                            <option value="Oregon">Oregon</option>
                            <option value="Pennsylvania">Pennsylvania</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Rhode Island">Rhode Island</option>
                            <option value="South Carolina">South Carolina</option>
                            <option value="South Dakota">South Dakota</option>
                            <option value="Tennessee">Tennessee</option>
                            <option value="Texas">Texas</option>
                            <option value="Utah">Utah</option>
                            <option value="Vermont">Vermont</option>
                            <option value="Virginia">Virginia</option>
                            <option value="Washington">Washington</option>
                            <option value="West Virginia">West Virginia</option>
                            <option value="Wisconsin">Wisconsin</option>
                            <option value="Wyoming">Wyoming</option></select>
                    </fieldset>
                    <button onClick={(e) => this.addState(e)}>Add</button>
                    <button onClick={(e) => this.removeState(e)}>Remove</button>
                </form>
            </div>
        )
    }
}

export default LineChart;