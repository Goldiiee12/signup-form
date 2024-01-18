document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Simple validation example
    if (name && email && password) {
        console.log('Name: ' + name + ', Email: ' + email + ', Password: ' + password);
        alert('Sign Up Successful!');
    } else {
        alert('Please fill in all fields.');
    }
});