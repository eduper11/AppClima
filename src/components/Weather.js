import React from 'react';

function Weather({ weatherObj }) {
    console.log(weatherObj);

    const { name, main } = weatherObj;

    if (!name) {
        return null;
    }

    return (
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>Aquí tienes el clima de {name}: </h2>
                <p className='temperatura'>
                    {parseInt(main.temp - 273.15, 10)}
                    <span>&#8451;</span>
                </p>
                <p>Temperatura actual:</p>
                <p>
                    Temperatura máxima: {parseInt(main.temp_max - 273.15, 10)}
                    &#8451;
                </p>

                <p>
                    Temperatura mínima: {parseInt(main.temp_min - 273.15, 10)}
                    &#8451;
                </p>
            </div>
        </div>
    );
}

export default Weather;
