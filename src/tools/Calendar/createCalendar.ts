export const createCalendar = (
	year: number,
	month: number,
	day: number,
	now: Date,
	days: string[]
) => {
	//find container, create table and put in to container
	const container = document.getElementById("CalendarTable");

	if (container === null) {
		return;
	}
	container.innerHTML = "";

	const tab = document.createElement("table");
	container.appendChild(tab);

	//find how many days in month and which is the first day
	const daysInMonth = new Date(year, month + 1, 0).getDate();
	let firtDayOfMonth = new Date(year, month, 1).getDay();

	//Correction of the order of days
	if (firtDayOfMonth === 0) {
		firtDayOfMonth = 7;
	}

	//Create headers
	let tr = document.createElement("tr");
	days.forEach((day) => {
		const th = document.createElement("th");
		th.innerHTML = day;
		tr.appendChild(th);
	});

	tab.appendChild(tr);

	//Create all days in table
	if (firtDayOfMonth - 1 !== 0) {
		tr = document.createElement("tr");
		tab.appendChild(tr);
	}

	//Create  empty cells on the table
	for (let i = 0; i < firtDayOfMonth - 1; i++) {
		const td = document.createElement("td");
		td.innerHTML = "";
		tr.appendChild(td);
	}
	//Create  days on the table
	let j = daysInMonth + firtDayOfMonth - 1;

	for (let i = firtDayOfMonth - 1; i < j; i++) {
		if (i % 7 === 0) {
			tr = document.createElement("tr");
			tab.appendChild(tr);
		}
		const td = document.createElement("td");
		td.innerText = `${i - firtDayOfMonth + 2}`;
		td.classList.add("day");

		if (
			year === now.getFullYear() &&
			month === now.getMonth() &&
			day === i - firtDayOfMonth + 2
		) {
			td.classList.add("today");
		}

		tr.appendChild(td);
	}
};
