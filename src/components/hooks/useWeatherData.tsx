
import { useState, useEffect } from 'react';

// useWeatherData is a custom hook
const useWeatherData = (coordinates:any) => {

  // declaring useState for data, loading and error scenario
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [apiError, setapiError] = useState(null);

  // useEffect hook that runs the api fetch call whenever latitude or longitude is changed 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const openApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;
        const response = await fetch(openApiUrl);

        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const result = await response.json();
        // console.log('API Response:', result); 
        setData(result);
        setapiError(null)
      } catch (error:any) {
        // console.error('Error during API call:', error); 
        setapiError(error.message);
        setData(null)
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [coordinates]);

  return { data, loading, apiError };
};

export default useWeatherData;
