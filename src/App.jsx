import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import "./css/App.css";

function App(){
    const [weatherData,setWeatherData] = useState([]);
    const [selectedCity,setSelectedCity] = useState("");
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");

    useEffect(()=>{
        async function getWeather(){
            try{
                const apiKey =
                import.meta.env.VITE_CWA_APIKEY;
                const url =
                `https://opendata.cwa.gov.tw/fileapi/v1/opendataapi/F-C0032-001?Authorization=${apiKey}&format=JSON`;

                const response = await fetch(url);
                if(!response.ok){
                    throw new Error(
                        "API取得失敗"
                    );
                }

                const data = await response.json();
                const locations = data
                .cwaopendata
                .dataset
                .location;

                setWeatherData(
                    locations
                );

                setSelectedCity(
                    locations[0].locationName
                );

            }
            catch(err){
                setError(
                    err.message
                );
            }
            finally{
                setLoading(false);
            }
        }
        getWeather();
    },[]);

    return(
        <div className="container">
            <Sidebar
                weatherData={weatherData}
                selectedCity={selectedCity}
                setSelectedCity={
                    setSelectedCity
                }
            />
            <Content
                weatherData={weatherData}
                selectedCity={selectedCity}
                loading={loading}
                error={error}
            />
        </div>
    );
}


export default App;