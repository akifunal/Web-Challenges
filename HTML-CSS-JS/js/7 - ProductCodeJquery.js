$(document).ready(function () {
	createProductCodeForm($('.container'));
	$('.labelHide').hide();
});

function createProductCodeForm(parent) {
	var form = $('<form />');

	form.append($('<label>').text('Product Code:'));

	form
		.append($('<input>').attr('name', 'productCode').attr('type', 'text'))
		.on('focus', 'input', function () {
			$('.labelHide').show();
		})
		.on('blur', 'input', function () {
			$('.labelHide').hide();
		});

	form.append(
		$('<label>')
			.attr('name', 'hint')
			.text('The product code can be found on the label.')
			.addClass('labelHide')
	);

	$('.labelHide').hide();
	form.append('<br>');
	form.append($('<input>').attr('type', 'submit'));
	parent.append(form);
}
