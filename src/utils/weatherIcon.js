function getWeatherIcon(weather){

    if(weather.includes("雷")){
        return "⛈";
    }

    if(weather.includes("雨")){
        return "🌧";
    }

    if(weather.includes("晴")){
        return "☀";
    }

    if(weather.includes("多雲")){
        return "🌤";
    }

    if(weather.includes("陰")){
        return "☁";
    }
    return "🌈";

}



export default getWeatherIcon;