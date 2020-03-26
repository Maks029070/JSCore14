function taskA() {
	let elements = document.querySelectorAll('li');
	for (let i = 0; i < elements.length; i++) {
		elements[i].innerHTML = 'random text' + (i + 1);
	}
}

function taskB() {
	let qtyOfLi = document.getElementsByTagName('li');
	alert("Qty of li: " + qtyOfLi.length);
}