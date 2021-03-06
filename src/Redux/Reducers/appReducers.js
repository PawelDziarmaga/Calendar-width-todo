import {
	ADD_QUEST,
	DELETE_QUEST,
	EDIT_QUEST,
	DONE_QUEST,
} from "../Actions/appActions";

export const appReducer = (
	state = [
		{
			id: 1,
			quest: "Do shopping",
			date: "2021-12-05",
			time: "18:30",
			done: false,
		},
		{
			id: 2,
			quest: "Walk the dog",
			date: "2022-02-10",
			time: "16:30",
			done: true,
		},
		{
			id: 3,
			quest: "Wash the dishes",
			date: "2022-01-15",
			time: "12:00",
			done: false,
		},
		{
			id: 4,
			quest: "Play chess",
			date: "2022-01-03",
			time: "10:00",
			done: false,
		},
		{
			id: 5,
			quest: "Take out the trash",
			date: "2022-04-05",
			time: "18:30",
			done: false,
		},
		{
			id: 6,
			quest: "Clean the house",
			date: "2022-03-04",
			time: "18:30",
			done: false,
		},
		{
			id: 7,
			quest: "Cook lunch",
			date: "2022-01-05",
			time: "18:30",
			done: false,
		},
		{
			id: 8,
			quest: "Meet up with friends",
			date: "2022-02-05",
			time: "18:30",
			done: false,
		},
	],
	action
) => {
	switch (action.type) {
		case ADD_QUEST:
			return [...state, action.payload];
		case DELETE_QUEST:
			return state.filter((rate) => rate.id !== action.payload.id);
		case EDIT_QUEST:
			return state.map((element) => {
				if (element.id == action.payload.id) {
					const { id, quest, date, time } = element;
					return {
						id,
						quest,
						date,
						time,
						done: true,
					};
				} else {
					return element;
				}
			});
		case DONE_QUEST:
			return state.map((rate) => {
				if (rate.id !== action.payload.id) {
					return state;
				}

				const { id, done } = action.payload;

				return {
					id,
					done,
				};
			});

		default:
			console.log("Nie ma takiego typu akcji");
			return state;
	}
};
