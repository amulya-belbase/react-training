

const WeatherDisplay = (props: any) => {

    const handleTemperature = (time: any) => {
        const date = new Date(time);

        // from ISO format to readable format
        const formattedDate = date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short',
        });
        return formattedDate;
    }
    return (
        <div>
            <div className="weatherInfoBasic">
                <div className="weatherInfoBasicTitle">
                    Basic Info
                    <p>Latitude: {props.data.latitude}</p>
                    <p>Longitude: {props.data.longitude}</p>
                    <p>Elevation: {props.data.elevation}m</p>

                </div>
                <div className="weatherInfoBasicTitle">
                    Current Weather Info
                    <p>Temperature: {props.data.current.temperature_2m}°C</p>
                    <p>Wind Speed: {props.data.current.wind_speed_10m} km/h</p>
                    <p>Time: {handleTemperature(props.data.current.time)}</p>
                </div>

            </div>


            <p className="weatherInfoTitle">Hourly Weather Info</p>
            {/* IIFE to create an iterable loop and execute it right away */}
            {(() => {
                // stores 5 div element
                const elements = [];
                for (let i = 0; i < 5; i++) {
                    elements.push(
                        <div key={i} className="tempTime">
                            <p>Temperature: {props.data.hourly.temperature_2m[i]}°C</p>
                            <p>Wind Speed: {props.data.hourly.wind_speed_10m[i]} km/h</p>
                            <p>Time: {handleTemperature(props.data.hourly.time[i])}</p>
                        </div>
                    );
                }
                return elements;
            })()}
        </div>
    );

};

export default WeatherDisplay;
