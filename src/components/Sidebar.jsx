import AreaMenu from "./AreaMenu";
import areaData from "../utils/area";
import "../css/Sidebar.css";

function Sidebar({
    weatherData,
    selectedCity,
    setSelectedCity
}){

    return(
        <div className="sidebar">
            <h2>
                天氣區域
            </h2>
            {
            Object.keys(areaData)
            .map(area=>(
                <AreaMenu
                    key={area}
                    area={area}
                    cities={
                        areaData[area]
                    }
                    weatherData={
                        weatherData
                    }
                    selectedCity={
                        selectedCity
                    }
                    setSelectedCity={
                        setSelectedCity
                    }
                />
            ))
            }
        </div>
    );
}


export default Sidebar;