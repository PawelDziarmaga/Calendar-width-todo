import { useState } from "react";
import { useDispatch } from "react-redux";

import { allertForm } from "../../tools/Form/allertForm";
import { addQuest } from "../../Redux/Actions/appActions";

import { useSelector } from "react-redux";
import "./Form.css";
let id = Math.floor(Math.random() * 1000);

function Form() {
	const [quest, setQuest] = useState("");
	const [time, setTime] = useState("");
	const [date, setDate] = useState("");

	const rates = useSelector((store) => store.rates);
	const dispatch = useDispatch();

	const onChangeHandler = (e) => {
		switch (e.target.id) {
			case "quest":
				return setQuest(e.target.value);
			case "time":
				return setTime(e.target.value);
			case "date":
				return setDate(e.target.value);
			default:
				return;
		}
	};

	const buttonHandler = (e) => {
		e.preventDefault();

		if (!quest.length) {
			allertForm("quest");
			return;
		}
		if (!time) {
			allertForm("time");
			return;
		}
		if (!date.length) {
			allertForm("date");
			return;
		}

		const objectQuest = {
			id,
			quest,
			date,
			time,
			done: false,
		};

		dispatch(addQuest(objectQuest));

		id = Math.floor(Math.random() * 1000);
		for (let i = 0; i < rates.length; i++) {
			if (rates[i].id === id) {
				id = Math.floor(Math.random() * 1000);
				i = 0;
			}
		}

		setQuest("");
		setTime("");
		setDate("");
		allertForm("");
	};
	return (
		<div className='form'>
			<h2>Dodaj/edytuj zadanie</h2>
			<form>
				<div id='quest_add'>
					<label>
						Nazwa zadania:
						<input
							id='quest'
							onChange={onChangeHandler}
							type='text'
							value={quest}
						/>
					</label>
				</div>
				<div id='quest_time'>
					<label>
						Godzina
						<input
							id='time'
							onChange={onChangeHandler}
							type='time'
							value={time}
						/>
					</label>
					<label>
						Data:
						<input
							id='date'
							onChange={onChangeHandler}
							type='date'
							value={date}
						/>
					</label>
				</div>
				<button onClick={buttonHandler}>Dodaj zadanie</button>
			</form>
		</div>
	);
}

export default Form;
