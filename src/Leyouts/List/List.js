import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { editQuest } from "../../Redux/Actions/appActions";
import { sortList } from "../../tools/List/sortList";

function List({ dateFilter = "2021-10-15" }) {
	const quest = useSelector((store) => store.rates);
	const [category, setCategory] = useState("todo"); // category for filter
	const [list, setList] = useState(""); // list of quest
	let questSort = "";

	quest.sort(sortList); // sort list by date and time

	// Filtr list element by choosen category
	const filterCategory = (e = false, category, quest) => {
		let filterCcategory;

		if (e) {
			filterCcategory = e.target.classList[0];
		} else {
			filterCcategory = category;
		}

		let filterquest = [...quest];

		if (filterCcategory === "done") {
			questSort = filterquest.filter((rate) => rate.done === true);
		} else if (filterCcategory === "day") {
			questSort = filterquest.filter((rate) => rate.date === dateFilter);
		} else {
			questSort = filterquest.filter((rate) => rate.done === false);
		}
		setCategory(filterCcategory);
		createSortList(questSort);
	};
	// Create list elements
	const createSortList = (questSort) => {
		const list = questSort.map((rate) => (
			<div key={rate.id} className='List__element'>
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
		setList(list);
	};

	// change stor element
	const dispatch = useDispatch();
	const endQuest = (e) => {
		const id = e.target.classList[0];
		const objectQuest = {
			id,
			done: true,
		};

		dispatch(editQuest(objectQuest));
	};

	// Show list the first time, refreshing after deleting items
	useEffect(() => {
		filterCategory(false, category, quest);
	}, [category, quest]);

	return (
		<div className='List'>
			<h2>Lista zadań</h2>
			<div>
				<button
					onClick={(e) => filterCategory(e, category, quest)}
					className='todo top-button'>
					Do zrobienia
				</button>
				<button
					onClick={(e) => filterCategory(e, category, quest)}
					className='done top-button'>
					zrobione
				</button>
				<button
					onClick={(e) => filterCategory(e, category, quest)}
					className='day top-button'>
					Z dnia {dateFilter}
				</button>
			</div>
			{list}
		</div>
	);
}

export default List;
