export const sortList = (
	a: { date: Date; time: Date },
	b: { date: Date; time: Date }
) => {
	const dataA = a.date;
	const dataB = b.date;

	const timeA = a.time;
	const timeB = b.time;

	if (dataA < dataB) {
		return 1;
	} else if (dataA > dataB) {
		return -1;
	} else {
		if (timeA > timeB) {
			return 1;
		} else if (timeA < timeB) {
			return -1;
		} else {
			return 0;
		}
	}
};
