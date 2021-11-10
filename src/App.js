import React, { useState } from "react";
import "./App.css";
import Service from "./services/Service";
import Weather from "./components/Weather";

function App() {
	const [city, setCity] = useState("");
	const [weather, setWeather] = useState(
		{	
			country: '',
			current_city: '',
			condition: '',
			description: ''
		}
	);
	let appId = "18c4a60065cd9c6f3966e56b38a4ea96";

	const handleChange = (e) => {
		let city_name = e.target.value;
		setCity(city_name);
		setWeather({
			country: '',
			current_city: '',
			condition: '',
			description: ''
		})
	}

	const handleClick = (e) => {
		e.preventDefault()
		Service.getData(city, appId)
			.then((res) => {
				let condition = res.data.weather[0].main
				let description = res.data.weather[0].description
				let c_city = res.data.name
				let country = res.data.sys.country
				setWeather({
					country: country,
					current_city: c_city,
					condition: condition,
					description: description
				})
				
			})
			.catch((err) => console.log(err));
	}


	let weatherData
	if(city){
		weatherData = <Weather city={weather.current_city} country={weather.country} condition={weather.condition} description={weather.description}/>
	} else {
		weatherData = <div>No Input Data!</div>
	}
	return (
		<div className="App">
			<h1>React Weather App</h1>
			<div className="form_field">
				<input
					type="text"
					className="input form_control"
					onChange={handleChange}
				/>
				<button className="input btn" onClick={handleClick}>
					Search
				</button>
			</div>
			<div>
				{ weatherData }
			</div>
		</div>
	);
}

export default App;
