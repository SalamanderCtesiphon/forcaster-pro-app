import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forcast from './components/Forcast';
import getFormattedWeatherData from './services/weatherService';


function App() {
  const fetchWeather = async() => {
    const data = await getFormattedWeatherData('weather', {q: 'london'})
    console.log(data)
  }

  fetchWeather()

  return (
    <div className="mx-auto max-w-screen-md py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forcast title={'hourly forcast'}/>
      <Forcast title={'daily forcast'}/>
    </div>
  );
}

export default App;
