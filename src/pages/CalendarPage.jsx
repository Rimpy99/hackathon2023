import Calendar from "react-calendar";
import { useState } from "react";

const CalendarPage = () => {
    const [ currentDate, setCurrentDate ] = useState(new Date());

    return(
        <div>
            <Calendar value={currentDate}/>
        </div>
    );
}

export default CalendarPage;