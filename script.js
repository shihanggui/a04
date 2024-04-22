const weatherApiKey = 'e2dba1ce746e6b1edb1062456735871f';
const newsApiKey = '44b88fe7f75b43e5a4b13fb409bc0213';

function fetchWeather() {
    const city = document.getElementById('cityInput').value;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const result = `
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].main}</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById('weatherResult').innerHTML = result;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weatherResult').innerHTML = '<p>Error fetching weather data.</p>';
        });
}

function fetchNews() {
    const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApiKey}`;

    fetch(newsUrl)
        .then(response => response.json())
        .then(data => {
            const articles = data.articles.map(article => `<li>${article.title}</li>`).join('');
            document.getElementById('newsResults').innerHTML = articles;
        })
        .catch(error => {
            console.error('Error fetching news:', error);
            document.getElementById('newsResults').innerHTML = '<p>Error fetching news.</p>';
        });
}

// Initial news fetch
fetchNews();