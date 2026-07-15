import { useState } from "react";
import "../css/AreaMenu.css";

function AreaMenu({
    area,
    cities,
    weatherData,
    selectedCity,
    setSelectedCity
}){
    const [open,setOpen] = useState(false);

    return(
        <div className="area">
            <button
                className="area-button"
                onClick={()=>setOpen(!open)}
            >
                {open ? "▼" : "▶"}
                {area}
            </button>

            {
            open &&
            <div className="city-list">
            {
            cities.map(city=>{
                const exist =
                weatherData.some(
                    item=>
                    item.locationName===city
                );
                if(!exist){
                    return null;
                }

                return(
                    <div
                    key={city}
                    className={
                    selectedCity===city
                    ? "city active"
                    : "city"
                    }
                    onClick={()=>{
                        setSelectedCity(city)
                    }}
                    >{city}</div>
                )
            })
            }
            </div>
            }
        </div>
    );
}


export default AreaMenu;