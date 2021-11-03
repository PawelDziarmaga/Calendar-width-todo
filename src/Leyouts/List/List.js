import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { editQuest } from "../../Redux/Actions/appActions";
import { sortList } from "../../tools/List/sortList";

import { endQuest } from "../../tools/List/endQuest";

function List({ dateFilter }) {
	// change stor element aftr deleting
	const dispatch = useDispatch();

	const quest = useSelector((store) => store.rates);
	const [category, setCategory] = useState("todo"); // category for filter
	const [list, setList] = useState(""); // list of quest
	let questSort = "";

	quest.sort(sortList); // sort list by date and time

	// Filtr list element by choosen category
	const filterCategory = (e = false, category, quest) => {
		const topButtonsElement = document.getElementsByClassName("top-button");

		for (let i = 0; i < topButtonsElement.length; i++) {
			topButtonsElement[i].classList.remove("active");
		}
		let filterCcategory;

		if (e) {
			filterCcategory = e.target.classList[1];
		} else {
			filterCcategory = category;
		}

		let filterquest = [...quest];

		if (filterCcategory === "done") {
			questSort = filterquest.filter((rate) => rate.done === true);
		} else if (filterCcategory === "btn") {
			questSort = filterquest.filter((rate) => rate.date === dateFilter);
		} else {
			questSort = filterquest.filter((rate) => rate.done === false);
		}
		let choosenElement = document.getElementsByClassName(
			`top-button ${filterCcategory}`
		);

		if (choosenElement[0].classList !== undefined) {
			choosenElement[0].classList.add("active");
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
						<button
							className={rate.id}
							onClick={(e) =>
								dispatch(
									editQuest(endQuest(e.target.classList[0]))
								)
							}>
							zakończ
						</button>
					)}
				</p>
			</div>
		));
		setList(list);
	};

	// Show list the first time, refreshing after deleting items
	useEffect(() => {
		filterCategory(false, category, quest);
	}, [quest]);
	useEffect(() => {
		filterCategory(false, "btn", quest);
	}, [dateFilter]);

	const topButtons = [
		["todo", "Do zrobienia"],
		["done", "Zakończone"],
		["btn", `Z dnia ${dateFilter}`],
	];
	const topButtonsElements = topButtons.map((element) => (
		<button
			key={element[0]}
			onClick={(e) => filterCategory(e, category, quest)}
			className={`top-button ${element[0]}`}>
			{element[1]}
		</button>
	));

	return (
		<div className='List'>
			<h2>Lista zadań</h2>
			<div>{topButtonsElements}</div>
			{list.length === 0 ? "brak zadań" : list}
		</div>
	);
}

export default List;
