import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editQuest } from "../../Redux/Actions/appActions";

import { sortList } from "../../tools/List/sortList";

function List({ dateFilter = "2021-10-15" }) {
	/*********** Sort Table ************/
	let quest = useSelector((store) => store.rates);
	quest.sort(sortList);
	const [questSort, setQuestSort] = useState(
		quest.filter((rate) => rate.done === false)
	);

	const sortCategory = (e) => {
		console.log(questSort);
		const category = e.target.classList[0];
		switch (category) {
			case "todo":
				setQuestSort(quest.filter((rate) => rate.done === false));
				return;
			case "done":
				setQuestSort(quest.filter((rate) => rate.done === true));
				return;
			case "day":
				setQuestSort(quest.filter((rate) => rate.date === dateFilter));
				return;
			default:
				return;
		}
	};

	const dispatch = useDispatch();
	const endQuest = (e) => {
		const id = e.target.classList[0];
		const objectQuest = {
			id,
			done: true,
		};

		dispatch(editQuest(objectQuest));
		console.log(questSort);
	};

	const ratesElements = questSort.map((rate) => (
		<div className='List__element'>
			<p>
				<span className='List__element__data'>{rate.date}</span>{" "}
				<span className='List__element__quest'>{rate.quest}</span>{" "}
				<span className='List__element__time'>{rate.time}</span>
				{rate.done ? null : (
					<button className={rate.id} onClick={endQuest}>
						zakończ
					</button>
				)}
			</p>
		</div>
	));

	return (
		<div className='List'>
			<h2>Lista zadań</h2>
			<div>
				<button onClick={sortCategory} className='todo top-button'>
					Do zrobienia
				</button>
				<button onClick={sortCategory} className='done top-button'>
					zrobione
				</button>
				<button onClick={sortCategory} className='day top-button'>
					Z dnia {dateFilter}
				</button>
			</div>
			{ratesElements}
		</div>
	);
}

export default List;
