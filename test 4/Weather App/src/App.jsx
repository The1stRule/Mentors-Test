import { useState } from 'react';

const fetchData = async (city) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b267c0add690d4d5d51b2e499de2039c`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const App = () => {
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const renderInfo = await fetchData(e.target.city.value);
    console.log(renderInfo);
    setData(renderInfo);
    e.target.reset();
  }

  return (
    <main>
      <h1>Search City Weather</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="city" placeholder="Enter the city name" required />
        <button>Search</button>
      </form>
      {
        data.cod === 200 ? (
          <div>
            <h2>{data.name}</h2>
            <p>Temperature: {Math.round(data.main.temp - 273.15)}°C</p>
            <p>Condition : {data.weather[0].description}</p>
          </div>
        ): (Object.keys(data).length > 0? <p id="error-message">City not found</p> : "")
      }
    </main>
  );
}

export default App;