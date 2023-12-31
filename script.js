var calc_done = false;
var ans = null;
var show_ans = false;
var ON = false;

function swtch() {
	if (ON) {
		ON = false;
		clr();
	}

	else
		ON = true;
}

function display(val, show_ans=false) {
	if (ON === false) 
		return;

	const input_line = document.getElementsByClassName('input-line')[0]; 
	const output_line = document.getElementsByClassName('output-line')[0];

	if (calc_done) {
		input_line.innerText = "";
		calc_done = false;
	}

	if (show_ans && ans !== null) {
		input_line.innerText += ans;
		show_ans = false;
		return;
	}

	input_line.innerHTML += val;
}

function clr() {
	const input_line = document.getElementsByClassName('input-line')[0]; 
	const output_line = document.getElementsByClassName('output-line')[0];
	input_line.innerText = "";
	output_line.innerText = "";
}

function answer() {
	if (ON === false) 
		return;

	const input_line = document.getElementsByClassName('input-line')[0]; 
	const output_line = document.getElementsByClassName('output-line')[0];
	if (calc_done) {
		input_line.innerText = "";
		output_line.innerText = "";
		calc_done = false;
		return;
	}

	var output = input_line.innerText;
	ans = eval(output);
	output_line.innerText = ans;	
	calc_done = true;
}

function del() {
	var input_line = document.getElementsByClassName('input-line')[0];
	var x = input_line.innerText;
	var newLen = x.length - 1;
	var out = x.substring(0, newLen);
	input_line.innerText = out;
}
