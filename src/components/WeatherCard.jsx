import getWeatherIcon from "../utils/weatherIcon";
import formatTime from "../utils/formatTime";
import "../css/WeatherCard.css";

function WeatherCard({
    weather,
    index
}){
    const title = [
        "今天白天",
        "今天晚上",
        "明天白天"
    ];
    const start =
    formatTime(weather.startTime);
    const end =
    formatTime(weather.endTime);

    return (
        <div className="weather-card">
            <h2>
                {title[index]}
            </h2>

            <div className="time">
                <p>
                    {start.date}
                </p>
                <p>
                    {start.time} ~ {end.time}
                </p>
            </div>

            <div className="icon">
                {
                    getWeatherIcon(
                        weather.weather
                    )
                }
            </div>
            <h3>
                {weather.weather}
            </h3>
            <div className="info">
                <div>
                    🌡 {weather.minTemp}
                    ~  {weather.maxTemp}
                    °C
                </div>
                <div>
                    ☔ {weather.rain} %
                </div>
                <div>
                    😊 {weather.comfort}
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;