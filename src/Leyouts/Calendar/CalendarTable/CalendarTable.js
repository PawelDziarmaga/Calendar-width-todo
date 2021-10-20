import { useEffect } from "react";
import { createCalendar } from "../../../tools/Calendar/createCalendar";

function Calendar({ year, month, day, now }) {
	let days = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];

	useEffect(() => {
		createCalendar(year, month, day, now, days);
	});

	return <div id='CalendarTable'></div>;
}

export default Calendar;
