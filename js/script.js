const btn = document.querySelector('#btn_active-states');
const input = document.querySelector('#input');
const icon = document.querySelector('.icon_error');
const msg = document.querySelector('.msg_error');

function showWarning() {

	const isValid = input.value === '';

	if(isValid) {
		icon.classList.add('input_not-valid');
		msg.classList.add('input_not-valid');
		input.classList.add('border-error')
	}
}

btn.addEventListener('click', showWarning);