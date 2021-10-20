export const ADD_QUEST = "ADD_QUEST";
export const DELETE_QUEST = "DELETE_QUEST";
export const EDIT_QUEST = "EDIT_QUEST";
export const DONE_QUEST = "DONE_QUEST";

export const addQuest = ({ id, quest, date, time }) => ({
	type: ADD_QUEST,
	payload: {
		id,
		quest,
		date,
		time,
	},
});

export const deleteQuest = ({ id }) => ({
	type: DELETE_QUEST,
	payload: {
		id,
	},
});
export const editQuest = ({ id, quest, date, time }) => ({
	type: EDIT_QUEST,
	payload: {
		id,
		quest,
		date,
		time,
	},
});
export const doneQuest = ({ id, done }) => ({
	type: DONE_QUEST,
	payload: {
		id,
		done,
	},
});
