import React, { useEffect, useState } from 'react';
import Country from '../Country/Country'

const Countries = () => {
    const [countries,setCountries] = useState([]);
   
    useEffect(()=>{
       
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))

    },[])
    return (
        <div>
           <h1>Hello from Countries</h1> 
           <p>{countries.length}</p>
           {
            countries.map( country => <Country name={country.name.common} population={country.population} img={country.flags.png}></Country>)
           }
        </div>
    );
};

export default Countries;