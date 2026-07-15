function formatTime(time){
    const date = new Date(time);
    return {
        date:
        `${date.getMonth()+1}/${date.getDate()}`,
        time:
        `${date.getHours()}:00`

    };
}



export default formatTime;