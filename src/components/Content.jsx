import WeatherCard from "./WeatherCard";
import Loading from "./Loading";
import "../css/Content.css";

function Content({
    weatherData,
    selectedCity,
    loading,
    error
}){
    if(loading){
        return <Loading/>
    }
    if(error){
        return(
            <div className="content">
                {error}
            </div>
        )
    }

    const city =
    weatherData.find(
        item=>
        item.locationName===selectedCity
    );
    if(!city){
        return(
            <div className="content">
                查無資料
            </div>
        )
    }
    const element =
    city.weatherElement;

    const wx =
    element.find(
        item=>item.elementName==="Wx"
    );

    const maxT =
    element.find(
        item=>item.elementName==="MaxT"
    );

    const minT =
    element.find(
        item=>item.elementName==="MinT"
    );

    const pop =
    element.find(
        item=>item.elementName==="PoP"
    );

    const ci =
    element.find(
        item=>item.elementName==="CI"
    );

    const weatherList =
    wx.time.map((item,index)=>({
        startTime:item.startTime,
        endTime:item.endTime,
        weather:
        item.parameter.parameterName,
        maxTemp:
        maxT.time[index]
        .parameter.parameterName,
        minTemp:
        minT.time[index]
        .parameter.parameterName,
        rain:
        pop.time[index]
        .parameter.parameterName,
        comfort:
        ci.time[index]
        .parameter.parameterName
    }));

    return(
        <div className="content">
            <div className="weather-header">
                <h1>
                    📍 {city.locationName}
                </h1>
                <p>
                    中央氣象署36小時預報
                </p>
            </div>
            <div className="weather-cards">
            {
            weatherList.map((item,index)=>(
                <WeatherCard
                    key={index}
                    weather={item}
                    index={index}
                />
            ))
            }
            </div>
        </div>
    );
}

export default Content;