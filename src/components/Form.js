import React, { useState } from 'react';

function Form({ inputWeather }) {
    //state del component
    //search = state, saveSearch = this.setState({})
    const [search, saveSearch] = useState({
        city: '',
        country: ''
    });

    const handleChange = event => {
        //Cambia el state

        saveSearch({
            ...search,
            [event.target.name]: event.target.value
        });

        console.log(search);
    };

    const consultWeather = event => {
        event.preventDefault();

        //pasamos al app la busqueda del usuario
        inputWeather(search);
    };

    return (
        <form onSubmit={consultWeather}>
            <div className='input-field col s12'>
                <input
                    type='text'
                    name='city'
                    id='city'
                    onChange={handleChange}
                />
                <label htmlFor='city'>Ciudad: </label>
            </div>
            <div className='input-field col s12'>
                <select onChange={handleChange} name='country'>
                    <option value=''>Selecciona tu país</option>
                    <option value='US'>Estados Unidos</option>
                    <option value='ES'>España</option>
                    <option value='MX'>Mexico</option>
                    <option value='AR'>Argentina</option>
                    <option value='CO'>Colombia</option>
                    <option value='CR'>España</option>
                    <option value='PE'>Perú</option>
                </select>
            </div>

            <div className='input-field col s12'>
                <input
                    type='submit'
                    className='waves-effect waves-light btn-large btn-block yellow accent-4'
                    value='Buscar'
                />
            </div>
        </form>
    );
}

export default Form;
