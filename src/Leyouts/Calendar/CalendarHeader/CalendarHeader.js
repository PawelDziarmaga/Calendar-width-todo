function CalendarHeader({ click, month, year }) {
	const months = [
		"stczeń",
		"luty",
		"marzec",
		"kwiecień",
		"maj",
		"czerwiec",
		"lipiec",
		"siepień",
		"wrzesień",
		"pażdziernik",
		"listopad",
		"grudzień",
	];

	return (
		<div className='CalendarHeader'>
			<button onClick={click} className='prevMonth'>
				prev
			</button>
			<h3>
				{months[month]} {year}
			</h3>
			<button onClick={click} className='nextMonth'>
				next
			</button>
		</div>
	);
}

export default CalendarHeader;
