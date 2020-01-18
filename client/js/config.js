const config = {
	default: new Date(),
	minDate: new Date(),
	maxDate:  new Date(new Date().setDate(new Date().getDate()+30)),
	options: {weekday: "long", year: "numeric", month: "short",  
    day: "numeric"}
}