import React, { useCallback, useMemo, useState } from "react";
import {
  Calendar as BigCalendar,
  Views,
  momentLocalizer,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

function Calendar() {
  const localizer = momentLocalizer(moment);

  // Below is a sample of an event object
  // Event {
  //   title: string,
  //   start: Date,
  //   end: Date,
  //   allDay?: boolean
  //   resource?: any,
  // }

  const events = [
    {
      id: 1,
      title: "Test",
      start: new Date(2024, 10, 26),
      end: new Date(2024, 10, 27),
    },
  ];

  const [myEvents, setEvents] = useState(events);

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const title = window.prompt("New Event name");
      if (title) {
        setEvents((prev) => [...prev, { start, end, title }]);
      }
    },
    [setEvents]
  );

  const handleSelectEvent = useCallback(
    (event) => window.alert(event.title),
    []
  );

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(2024, 10, 26),
      scrollToTime: new Date(1970, 1, 1, 6),
    }),
    []
  );

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-center">
          Welcome to the Calendar Module!
        </h1>
        <p className="text-center italic text-red-500">
          Click to add events. Click and drag to define an event time.
        </p>
      </div>
      <div className="bg-white text-black h-[80vh] w-[80vw] p-4 rounded-xl text-lg">
        <BigCalendar
          defaultDate={defaultDate}
          defaultView={Views.MONTH}
          events={myEvents}
          localizer={localizer}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          selectable
          scrollToTime={scrollToTime}
          className="h-full"
        />
      </div>
    </>
  );
}

export default Calendar;
