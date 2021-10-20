import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/Store/store";

import Form from "./Leyouts/Form/Form";
import List from "./Leyouts/List/List";
import Calendar from "./Leyouts/Calendar/Calendar";

function App() {
	return (
		<div className='app'>
			<Provider store={store}>
				<div class='col_1'>
					<Form />
					<Calendar />
				</div>
				<div class='col_2'>
					<List />
				</div>
			</Provider>
		</div>
	);
}

export default App;
