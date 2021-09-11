// function setup() {
// 	const imageDivs = document.querySelectorAll('.image');
// 	imageDivs.forEach(imageDiv => {
// 		imageDiv.addEventListener('click', e => {
// 			if (e.target.tagName === 'BUTTON') {
// 				imageDiv.remove();
// 			}
// 		});
// 	});
// }

function setup() {
	const removeButtons = document.querySelectorAll('.remove');
	removeButtons.forEach(button => {
		button.addEventListener('click', e => {
			e.target.parentElement.remove();
		});
	});
}

setup();
