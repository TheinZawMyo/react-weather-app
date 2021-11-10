import React from 'react'
import '../App.css'

function Weather(props) {
    const {city, country, condition, description} = {...props}
    let weatherData;
    if(city){
        weatherData =   <div>
                            <div className="card">
                                City : {city}
                            </div>
                            <div className="card">
                                Country-Code : {country}
                            </div>
                            <div className="card">
                                Condition : {condition}
                            </div>
                            <div className="card">
                                Description : {description}
                            </div>
                        </div>;
    }else {
        weatherData = <div> Typing </div>
    }
    return (
        <div>
            {weatherData}
        </div>
    )
}

export default Weather
