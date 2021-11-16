import logo from './logo.svg';
import './App.css';
import ReactWeather, { useOpenWeather } from 'react-open-weather';


function App() {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'bf05e68f330331c266e8ed5f007eb6f5',
    lat: '51.51',
    lon: '-0.13',
    lang: 'en',
    unit: 'metric',
  });
  
  return (
    <div className="App">
     <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="London"
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
        showForecast
      />
    </div>
  );
}

export default App;
