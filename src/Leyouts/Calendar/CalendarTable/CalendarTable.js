import { useEffect } from "react";
import { useSelector } from "react-redux";

import { createCalendar } from "../../../tools/Calendar/createCalendar";
import { markQuest } from "../../../tools/Calendar/markQuest";

function Calendar({ year, month, day, now, markActiveDayDate }) {
	const quest = useSelector((store) => store.rates);
	let days = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];
	// mark active day
	const markActiveDay = (dataFilter) => {
		if (dataFilter !== "") {
			const listHeaderMonth = document
				.querySelector(".CalendarHeader h3")
				.textContent.split(" ")[0];
			const listHeaderYear = document
				.querySelector(".CalendarHeader h3")
				.textContent.split(" ")[1];

			let clickDay = dataFilter.split("-")[2];
			const clickMonth = dataFilter.split("-")[1];
			const clickYear = dataFilter.split("-")[0];

			if (clickDay[0] === "0") {
				clickDay = clickDay[1];
			}
			const months = [
				"styczeń",
				"luty",
				"marzec",
				"kwiecień",
				"maj",
				"czerwiec",
				"lipiec",
				"sierpień",
				"wrzesień",
				"październik",
				"listopad",
				"grudzień",
			];

			if (listHeaderYear === clickYear) {
				if (listHeaderMonth === months[clickMonth - 1]) {
					const markDay = document.getElementsByClassName(
						`${clickDay}`
					);
					markDay[0].classList.add("markDay");
				}
			}
		}
	};
	useEffect(() => {
		createCalendar(year, month, day, now, days);
		markQuest(quest);
		markActiveDay(markActiveDayDate);
	});

	return <div id='CalendarTable'></div>;
}

export default Calendar;
