import Calendar from "react-calendar";
import '../Calendar.css'
import { useState } from "react";

const CalendarPage = () => {
    const [ currentDate, setCurrentDate ] = useState(new Date());

    return(
        <div className="text-black flex justify-center h-[100vh] items-center">
            <Calendar onChange={setCurrentDate} value={currentDate} view="month"/>
        </div>
    );
}

export default CalendarPage;