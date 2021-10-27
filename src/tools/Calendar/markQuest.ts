export const markQuest = (
	quest: {
		id: number;
		date: string;
		time: Date;
		quest: string;
		done: boolean;
	}[]
) => {
	let days = document.querySelectorAll("#CalendarTable .day");
	for (let j = 0; j < quest.length; j++) {
		if (quest[j].done === false) {
			const date = quest[j].date.split("-");
			let day = date[2];
			if (day[0] === "0") {
				let newDay = day.split("");
				day = newDay[1];
			}
			const month = date[1];
			const year = date[0];

			for (let i = 0; i < days.length; i++) {
				if (days[i].innerHTML === day) {
					days[i].classList.add("todos");
				}
			}
		}
	}
};
