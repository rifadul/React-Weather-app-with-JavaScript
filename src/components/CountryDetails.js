import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export const CountryDetails = () => {
    let { state } = useLocation();
    console.log('stare', state);

    const [weather, setWeather] = useState(null);

    const getWeatherDetails = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(
                `http://api.weatherstack.com/current?access_key=60774ad1b455f3cff7d3f8a273f488f5&query=${state[0].capital[0]}`
            );

            console.log(response.data);
            setWeather(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <p>Capital {state[0].capital[0] || ''}</p>
            <p>population {state[0].population || ''}</p>
            <p>laIng {state[0].latlng.toString() || ''}</p>
            <img
                src={`${state[0].flags.png || state[0].flags.svg}`}
                alt=""
                weight="300"
                height="300"
            />

            <br />
            <button onClick={getWeatherDetails}>Capital Weather</button>
            <br />
            <br />

            {/* <h1>Weather Info</h1>

            <div>
                <p> {weather ? weather.current.temperature : ''}</p>
                <p>{weather ? weather.current.wind_speed : ''}</p>
                <p> {weather ? weather.current.precip : ''}</p>
                <img
                    src={`${weather ? weather.current.weather_icons[0] : ''}`}
                    alt=""
                    weight="50"
                    height="50"
                />
            </div> */}

            {weather ? (
                <div>
                    <h1>Weather Info</h1>

                    <p>{weather.current.wind_speed}</p>
                    <p> {weather.current.precip}</p>
                    {weather.current.weather_icons.map((item,i) => {
                        return (
                            <img
                                src={item}
                                alt=""
                                weight="50"
                                height="50"
                                key={i}
                            />
                        );
                    })}

                    <p>
                        Temperature: {weather.current.temperature}{' '}
                        <small>fff</small> {weather.current.wind_speed}{' '}
                        {weather.current.precip}
                    </p>
                </div>
            ) : (
                ''
            )}
        </div>
    );
};
