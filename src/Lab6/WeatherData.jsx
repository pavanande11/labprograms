import axios from "axios";
import React, { useEffect, useState } from "react";

const WeatherData = () => {
  const [city, setCity] = useState("vijayawada");
  const [displayCity, setDisplayCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    fetchWeather();
  }, [city]);
  const fetchWeather = async () => {
    if (!city.trim()) return;
    setError("");
    console.log(weatherData);
    // update the rapidapi-key with your generated key
    const settings = {
      headers: {
        "x-rapidapi-key": "",
        "x-rapidapi-host": "open-weather13.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.get(
        `https://open-weather13.p.rapidapi.com/city/${city}/EN`,
        settings
      );
      console.log(response.data)
      if (response.data && response.data.coord) {
        
        setWeatherData(response.data);
        setDisplayCity(city);
      } else {
        setError("City could not found");
      }
    } catch (error) {
      setError("Error fetching Details, Please Try Again!");
    }
  };
  const handleChange = (e) =>{
    setCity(e.target.value);
  }
  return (
    <div>
      <div className="InputContainer">
        <input type="text" placeholder="Enter City Name" value={city} 
        onChange={handleChange} style={styles.input}/>
        <button onClick={fetchWeather} style={styles.button}>Get Weather</button>
      </div>
      {
        error && <div style={{color:'red'}}> {error} </div>
      }
      {weatherData && (
        <div className="weather-card" style={styles.card}>
            <h3>Weather Information for {displayCity}</h3>
            <div style={styles.info}>
                <p><strong>Longitude:</strong>{weatherData.coord.lon}</p>
                <p><strong>Latitude:</strong>{weatherData.coord.lat}</p>
                <p><strong>Temparature:</strong>{weatherData.main.temp}</p>
                <p><strong>Speed:</strong>{weatherData.wind.speed}</p>
                <p><strong>Humidity:</strong>{weatherData.main.humidity}</p>
            </div>
        </div>
      )}
    </div>
  );
};
const styles = {
    card: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      width: '300px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      margin: '20px auto',
      textAlign: 'center',
    },
    info: {
      marginTop: '10px',
    },
    inputContainer: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    input: {
      padding: '10px',
      width: '200px',
      marginRight: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    button: {
      padding: '10px 15px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };


export default WeatherData;
