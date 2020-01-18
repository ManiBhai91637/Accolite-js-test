
let startDate, endDate;
function calComponent(id, value, minDate, maxDate) {
	let calLabel  = document.createElement("div");
	let calender = document.getElementById('calender')
	let input = document.createElement("INPUT");
		input.setAttribute("type", "date");
		input.setAttribute("id", id);
		input.setAttribute("value", value);
		input.setAttribute("min", minDate);
		input.setAttribute("max", maxDate);
		input.setAttribute("class", "calender");
		input.setAttribute("onchange", "handleChange(event)");
		calender.appendChild(input)
}

function handleChange(event) {
	if (event.target.id === 'StartDate') {
		startDate = new Date(event.target.value)
	}
	else if (event.target.id === 'EndDate') {
		endDate = new Date(event.target.value)
	}
	displayChange()
}

function displayChange() {
	document.getElementById("startDate").innerHTML= startDate ? startDate.toLocaleDateString("en-US", config.options) : config.default.toLocaleDateString("en-US", config.options);
	document.getElementById("endDate").innerHTML=endDate ? endDate.toLocaleDateString("en-US", config.options) : config.maxDate.toLocaleDateString("en-US", config.options);
}

calComponent('StartDate', config.default, config.minDate, config.maxDate)
calComponent('EndDate', config.default, config.minDate, config.maxDate)
displayChange()