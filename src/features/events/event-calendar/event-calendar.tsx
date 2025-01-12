"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
// import { Calendar } from "@fullcalendar/core/index.js";
import timeGridPlugin from "@fullcalendar/timegrid";
import { customPlugin } from "./custom-views/custom-views";

export const EventCalendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, customPlugin]}
      initialView="custom"
      events={[
        {
          title: "Event 1",
          date: "2025-01-06",
          backgroundColor: "#231242",
          url: "http://www.facebook.com",
        },
        { title: "Event 2", date: "2025-01-07" },
        { title: "Event 3", date: "2025-01-08" },
      ]}
      views={{
        timeGridFourDay: {
          type: "timeGrid",
          duration: { days: 3 },
          titleFormat: { year: "numeric", month: "2-digit", day: "2-digit" },
        },
      }}
      headerToolbar={{
        left: "prev,next title",
        right:
          "today custom,dayGridMonth,timeGridWeek,timeGridDay,timeGridFourDay",
      }}
      eventClick={(a: any) => console.log(a)}
      slotDuration={"00:05:00"}
      titleFormat={{ year: "numeric", month: "long", week: "numeric" }}
      buttonIcons={{
        day: "chevrons-left",
        today: "chevron-right",
      }}
      // weekends={false}
      weekNumbers={true}
      buttonText={{
        today: "",
        month: "",
        week: "",
        day: "",
        list: "",
      }}
    />
  );
};

export default EventCalendar;
