import { useState } from "react";
import './Style.css';

function WeatherApp(){
    const[lat,setLat] = useState("");
    const[lon,setLon] = useState("");
    const[weatherData, setWeatherData] = useState(null);

    const getWeather = async() => {
        if(!lat || !lon) {
            alert("Please Enter valid Latitude and Longitude.");
            return;
        }
        const apiKey = "3a245a419b7f01433f0dfb885d1c8e9e";
        try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        const data = await res.json();
        if(data.cod !== 200){
            alert("Invalid Coordinates.");
            return;
        }
        setWeatherData(data);
        }
        catch(error){
            alert("Failed to load weather Data.");
            console.error("API error:", error);
        }
    };

    const cities = [
        { name: "Pollachi", lat: 10.6588, lon: 77.0087 },
        { name: "Coimbatore", lat: 11.0168, lon: 76.9558 },
        { name: "Dharapuram", lat: 10.7383, lon: 77.5320 },
        { name: "Tiruppur", lat: 11.1085, lon: 77.3411 },
        { name: "Chennai", lat: 13.0827, lon: 80.2707 },
        { name: "Bangalore", lat: 12.9716, lon: 77.5946 },
        { name: "Mumbai", lat: 19.0760, lon: 72.8777 },
        { name: "Delhi", lat: 28.6139, lon: 77.2090 },
        { name: "New York", lat: 40.7128, lon: -74.0060 },
        { name: "Tokyo", lat: 35.6762, lon: 139.6503 },
        { name: "London", lat: 51.5074, lon: -0.1278 },
        { name: "Dubai", lat: 25.2048, lon: 55.2708 },
      ];
      return(
        <div className="weather-wrapper">
            <div className="container">
            <h1>🌎 Weather in Your Location</h1>

            <input value={lat} onChange={(e) => setLat(e.target.value)} placeholder="Latitude" className="styled-input" />
            <input value={lon} onChange={(e) => setLon(e.target.value)} placeholder="Longitude" className="styled-input" />
            <button onClick={getWeather} className="styled-btn">Get Weather</button>

            {weatherData && (
          <div className="weather-box">
            <p>City: {weatherData.name}</p>
            <p>Temperature: {weatherData.main.temp} °C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Weather: {weatherData.weather[0].description}</p>
          </div>
        )}

        <div className="container1">
        <h3>📍 Choose a City</h3>
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Latitude</th>
              <th>Longitude</th>
            </tr>
          </thead>
          <tbody>
            {cities.map((city, i) => (
              <tr key={i} onClick={() => {
                setLat(city.lat);
                setLon(city.lon);
              }} style={{ cursor: "pointer" }}>
                
                <td>{city.name}</td>
                <td>{city.lat}</td>
                <td>{city.lon}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
      );
}
export default WeatherApp;