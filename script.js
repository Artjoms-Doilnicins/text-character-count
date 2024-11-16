const textareaEl = document.querySelector('.textarea');
const remainingCounterEl = document.querySelector('.remaining-counter');
const totalCounterEl = document.querySelector('.total-counter');

const calculateCharacters = () => {
	totalCounterEl.textContent = textareaEl.value.length;
	remainingCounterEl.textContent = 100 - textareaEl.value.length;
};
textareaEl.addEventListener('keyup', calculateCharacters);
