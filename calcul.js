

function calc() {
	var x = document.getElementById('x').value;
	var y = document.getElementById('y').value;
	var z = document.getElementById('op').value;
    var a;
    var b = "Rezultatul calculului este ";

	if (z == "+") {
	a =	parseInt(x) + parseInt(y);
	}
	else if (z == "-") {
	a =	x - y;
	}
	else if (z == "*") {
	a =	x * y;
	}
	else if (op == "/") {
	a =	x / y;
	}
	else if (z == "%") {
	a =	x % y;
	}
	else {
	    alert ("Wrong arithmetic symbol use + - * / %");
    }

	document.getElementById('rezultat').innerHTML = b + a;
}
