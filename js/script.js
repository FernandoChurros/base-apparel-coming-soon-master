const btn = document.querySelector('#btn_active-states');
const input = document.querySelector('#input');
const icon = document.querySelector('.icon_error');
const msg = document.querySelector('.msg_error');

function showWarning() {

	const isValid = input.value == '';
	console.log(isValid)

	if(isValid) {
		icon.style.display = 'inline';
		msg.style.display = 'inline';
	}
}

btn.addEventListener('click', showWarning);