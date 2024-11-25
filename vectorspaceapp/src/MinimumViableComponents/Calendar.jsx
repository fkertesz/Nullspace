import React from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

function Calendar() {
  const localizer = momentLocalizer(moment);

  return (
    <div className="bg-white text-black h-[80vh] w-[80vw] p-4 rounded-xl">
      <BigCalendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        className="w-full h-40 text-sm"
      />
    </div>
  );
}

export default Calendar;
