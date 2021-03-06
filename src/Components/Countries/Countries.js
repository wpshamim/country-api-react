import React, { useEffect, useState } from "react";
import Country from "../Country/Country.js";
import { v4 as uuidv4 } from "uuid";

const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "20px",
};

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => setCountries(data));
    }, []);
    return (
        <div className="all-countries">
            <p>All Available Countries: {countries.length}</p>
            <div style={gridStyle} className="country-container">
                {countries.map((country) => (
                    <Country key={uuidv4()} country={country}></Country>
                ))}
            </div>
        </div>
    );
};

export default Countries;
