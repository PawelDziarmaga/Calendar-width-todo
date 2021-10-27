import { useEffect } from "react";
import { useSelector } from "react-redux";

import { createCalendar } from "../../../tools/Calendar/createCalendar";
import { markQuest } from "../../../tools/Calendar/markQuest";

function Calendar({ year, month, day, now }) {
	const quest = useSelector((store) => store.rates);
	let days = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];

	useEffect(() => {
		createCalendar(year, month, day, now, days);
		markQuest(quest);
	});

	return <div id='CalendarTable'></div>;
}

export default Calendar;
