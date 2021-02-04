import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import RadarChart from './components/RadarChart'
import './App.css'

function App() {
  return (
    <div className="App">  
      <h1>Chart Examples</h1>
      <LineChart />
      <PieChart />
      <RadarChart />
    </div>
  );
}

export default App;
