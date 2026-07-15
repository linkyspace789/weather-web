import "../css/Loading.css";

function Loading(){
    return(
        <div className="loading">
            <div className="spinner">
            </div>
            <p>
                天氣資料載入中...
            </p>
        </div>
    );
}

export default Loading;