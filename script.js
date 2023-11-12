const input_line = document.getElementsByClassName('input-line')[0]; 
const output_line = document.getElementsByClassName('output-line')[0];

function display(val) {
	const input_line = document.getElementsByClassName('input-line')[0]; 
	input_line.innerHTML += val;
}

function clear() {
	const input_line = document.getElementsByClassName('input-line')[0]; 
	const output_line = document.getElementsByClassName('output-line')[0];
	input_line.value = "";
	output_line.value = "";
}

function answer() {
	const input_line = document.getElementsByClassName('input-line')[0]; 
	const output_line = document.getElementsByClassName('output-line')[0];
	var output = input_line.innerText
	output_line.innerText = eval(output);	
}
