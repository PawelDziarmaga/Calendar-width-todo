import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import CalendarHeder from "./CalendarHeader/CalendarHeader";
import CalendarTable from "./CalendarTable/CalendarTable";
import { markQuest } from "../../tools/Calendar/markQuest";

function Calendar({ setDateFilter }) {
	const quest = useSelector((store) => store.rates);
	const now = new Date();
	const [month, setMonth] = useState(now.getMonth());
	const [year, setYear] = useState(now.getFullYear());
	if (month === 12) {
		setMonth(0);
	}
	if (month === -1) {
		setMonth(11);
	}
	const day = now.getDate();

	const handleClick = ({ target }) => {
		if (target.className === "nextMonth") {
			if (month === 11) {
				setYear((prev) => ++prev);
			}
			setMonth((prev) => ++prev);
		} else if (target.className === "prevMonth") {
			if (month === 0) {
				setYear((prev) => --prev);
			}
			setMonth((prev) => --prev);
		}
		markQuest(quest);
	};
	const clickData = ({ target }) => {
		let clickDay = target.classList[1];
		console.log();
		if (clickDay.length === 1) {
			clickDay = "0" + clickDay;
		}
		const clickMonth = month + 1;
		const clickYear = year;

		const dataFilter = clickYear + "-" + clickMonth + "-" + clickDay;
		setDateFilter("");
		setDateFilter(dataFilter);
	};
	let days = useRef();
	useEffect(() => {
		days.current = document.getElementsByClassName("day");

		for (let i = 0; i < days.current.length; i++) {
			days.current[i].addEventListener("click", clickData);
		}
	});

	return (
		<div className='Calendar'>
			<CalendarHeder click={handleClick} month={month} year={year} />
			<CalendarTable month={month} year={year} day={day} now={now} />
		</div>
	);
}

export default Calendar;
