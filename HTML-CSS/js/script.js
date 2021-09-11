$(function () {
	$('#submit').click(function () {
		var name = $('#name').val();
		var email = $('#email').val();
		var message = $('#message').val();
		var dataString = 'name=' + name + '&email=' + email + '&message=' + message;
		if (name == '' || email == '' || message == '') {
			alert('Please Fill All Fields');
		} else {
			$.ajax({
				type: 'POST',
				url: 'php/contact.php',
				data: dataString,
				success: function () {
					$('#contact_form').html("<div id='message'></div>");
					$('#message')
						.html('<h2>Contact Form Submitted!</h2>')
						.append('<p>We will be in touch soon.</p>')
						.hide()
						.fadeIn(1500, function () {
							$('#message').append(
								"<img id='checkmark' src='images/check.png' />"
							);
						});
				},
			});
		}
		return false;
	});
});
