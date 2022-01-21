export const markQuest = (
	quest: {
		id: number;
		date: string;
		time: Date;
		quest: string;
		done: boolean;
	}[]
) => {
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
	let days = document.querySelectorAll("#CalendarTable .day");

	//Separation of the year and month name from the calendar header
	let monthAndYear = document
		.querySelector(".CalendarHeader h3")
		?.innerHTML.split(" ");

	if (monthAndYear === undefined) {
		return;
	}

	const actualMonth = months.indexOf(monthAndYear[0]) + 1;
	const actualYear = monthAndYear[1];

	for (let j = 0; j < quest.length; j++) {
		if (quest[j].done === false) {
			const date = quest[j].date.split("-");
			let day = date[2];
			if (day[0] === "0") {
				let newDay = day.split("");
				day = newDay[1];
			}
			const month = Number(date[1]);
			const year = date[0];

			for (let i = 0; i < days.length; i++) {
				if (days[i].classList[1] === day) {
					if (month === actualMonth) {
						if (year === actualYear) {
							days[i].classList.add("todos");
						}
					}
				}
			}
		}
	}
};
