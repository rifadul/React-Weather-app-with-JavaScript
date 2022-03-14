import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
export const Home = () => {
    const [countryName, setCountryName] = useState('');
    const [info, setInfo] = useState([]);
    const [wrongInfo, setWrongInfo] = useState(false);

    const navigate = useNavigate();

    const getData = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(
                `https://restcountries.com/v3.1/name/${countryName}`
            );
            setWrongInfo(false);

            setInfo(response.data);
            setCountryName('');
            if (response.data) {
                navigate('/details',{state:response.data});
            }
            
        } catch (error) {
            console.error(error);
            setWrongInfo(true);
            setCountryName('');
        }
        
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter Country"
                onChange={(e) => setCountryName(e.target.value)}
            />
            <button
                type="submit"
                disabled={countryName === ''}
                onClick={getData}>
                Submit
            </button>
            {wrongInfo ? <h3>something wrong</h3> : ''}
        </div>
    );
};
