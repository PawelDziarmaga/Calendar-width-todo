import { useState } from "react";
import { Provider } from "react-redux";
import store from "./Redux/Store/store";

import Form from "./Leyouts/Form/Form";
import List from "./Leyouts/List/List";
import Calendar from "./Leyouts/Calendar/Calendar";

function App() {
	//Change the date format
	let now = new Date();

	let nowDay = now.getDate();

	if (nowDay < 10) {
		nowDay = "0" + nowDay;
	}
	const nowYear = now.getFullYear();
	let nowMonth = now.getMonth() + 1;
	if (nowMonth < 10) {
		nowMonth = "0" + nowMonth;
	}

	now = nowDay + "-" + nowMonth + "-" + nowYear;

	//Transfer the selected day from the calendar(onClick) to the list(filter)
	const [dateFilter, setDateFilter] = useState(now);

	return (
		<div className='app'>
			<Provider store={store}>
				<div class='col_1'>
					<Form />
					<Calendar setDateFilter={setDateFilter} />
				</div>
				<div class='col_2'>
					<List dateFilter={dateFilter} />
				</div>
			</Provider>
		</div>
	);
}

export default App;
