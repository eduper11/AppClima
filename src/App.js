import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Error from './components/Error';
import Weather from './components/Weather';

function App() {
    //state principal
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [error, setError] = useState('');
    const [weatherObj, setWeather] = useState({});

    useEffect(() => {
        //prevenir ejecución
        if (city === '') return;

        const consultAPI = async () => {
            const url =
                `https://api.openweathermap.org/data/2.5/weather` +
                `?q=${city},${country}` +
                `&appid=${process.env.REACT_APP_OPENWEATHER_APP_ID}`;

            //consulta la url

            const response = await fetch(url);
            const weatherObj = await response.json();

            console.log(weatherObj);

            setWeather(weatherObj);
        };

        consultAPI();
    }, [city, country]);

    const inputWeather = data => {
        //validar que ambos campos estén
        if (data.city === '' || data.country === '') {
            //error

            setError(true);
            return;
        }

        //city y country existen, y se agregan al state

        setCity(data.city);
        setCountry(data.country);
        setError(false);
    };

    //consulta a la API

    //Cargar un componente condicionalmente
    let component;
    if (error) {
        //hay un error, entonces lo muestro
        component = <Error message='Ambos campos son obligatorios' />;
    } else if (weatherObj.message === 'city not found') {
        component = (
            <Error message='La ciudad que intentas buscar no existe en ese pais' />
        );
    } else {
        //muestra el weather
        component = <Weather weatherObj={weatherObj} />;
    }

    return (
        <div className='App'>
            <Header titulo='Reac-clima' />
            <div className='contenedor-form'>
                <div className='container'>
                    <div className='row'>
                        <div className='col s12 m6'>
                            <Form inputWeather={inputWeather} />
                        </div>

                        <div className='col s12 m6'>{component}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
