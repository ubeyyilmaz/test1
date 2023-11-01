// import React from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import moment from "moment";
// import "moment/locale/tr"; // Türkçe için


// const localizer = momentLocalizer(moment);

// const events = [
//   {
//     id: 1,
//     title: "İş başvuru son gün",
//     start: new Date(2023, 10, 15, 10, 0), // Yıl, Ay (0-11), Gün, Saat, Dakika
//     end: new Date(2023, 10, 15, 12, 0),
//   },
//   {
//     id: 2,
//     title: "Örnek Etkinlik 2",
//     start: new Date(2023, 9, 17, 14, 0),
//     end: new Date(2023, 9, 17, 16, 0),
//   },
// ];

// const CalendarComponent = () => {
//   return (
//     <div >
//       <Calendar className="w-[500px] h-[500px] "
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
   
//       />
//     </div>
//   );
// };

// export default CalendarComponent;

import React, {useState} from "react";
import Datepicker from "react-tailwindcss-datepicker";

const Calendar = () => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });
    
    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }
    
    return (
        <div>
            <Datepicker classNames="flex flex-col md:w-12 bg-red-500"
                value={value}
                onChange={handleValueChange}
            />
            <div>
            
            </div>
        </div>
        
    );
};

export default Calendar;

