/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('form');
    let messageDiv = document.querySelector('.message'); 
	let emailInput = document.getElementById('email');

	
    form.addEventListener('submit', function(event) {
		event.preventDefault();

        let email = emailInput.value.trim();
		let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		
        if (email === '' || !emailPattern.test(email)) {
            messageDiv.textContent = 'Please enter a valid email address.';
        }
		else {
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
            emailInput.value = '';
        }
    });
});