
import { useState } from 'react';
import WeatherDisplay from './weatherDisplay';
import useWeatherData from './hooks/useWeatherData';

const WeatherApp = () => {
  
    // default latitude,longitude value (Kathmandu, Nepal)
    const [coordinates, setCoordinates] = useState({
        latitude: 27.7017,
        longitude: 85.3206
    })

    // gets the return from custom hook
    const { data, loading, apiError } = useWeatherData(coordinates);

    // changes sets new latitude value based on input
    const handleLatitudeChange = (newLatitude: number) => {
        setCoordinates(prevCoordinates => ({
            ...prevCoordinates,
            latitude: newLatitude
          }));
    };

    // changes sets new longitude value based on input
    const handleLongitudeChange = (newLongitude: number) => {
        setCoordinates(prevCoordinates => ({
            ...prevCoordinates,
            longitude: newLongitude
          }));
    };

    return (
        <div className="weatherReport">
            <div className='weatherReportTop'>
                <h1>Weather App</h1>
                <div className='weatherPosition'>
                    <div>
                        <label>Latitude: </label>
                        <input
                            type="number"
                            value={coordinates.latitude}
                            onChange={(e) => handleLatitudeChange(parseFloat(e.target.value))}
                        />
                    </div>
                    <div>
                        <label>Longitude: </label>
                        <input
                            type="number"
                            value={coordinates.longitude}
                            onChange={(e) => handleLongitudeChange(parseFloat(e.target.value))}
                        />
                    </div>
                </div>
            </div>
            <div className='weatherReportBottom'>
                {loading && <p>Loading...</p>}
                {apiError && <p>Error: {apiError}</p>}
                {data && <WeatherDisplay data={data} />}
            </div>
        </div>
    );
};

export default WeatherApp;
