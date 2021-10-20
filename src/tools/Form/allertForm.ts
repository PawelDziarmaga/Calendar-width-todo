export const allertForm = (input: string) => {
	let inputs = document.querySelectorAll("input");
	console.log(inputs);
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].classList.remove("empty-field");
	}

	let x = document.getElementById(input);
	if (x === null) {
		return;
	} else {
		console.log(x);
		x.classList.add("empty-field");
	}
};
