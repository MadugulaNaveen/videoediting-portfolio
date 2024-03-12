var submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener('click', function(event) {
  var password = document.querySelector('input[name="password"]').value;
  var confirmPassword = document.querySelector('input[name="confirm-password"]').value;
  var username =document.querySelector('input[name="username"]').value
  var number = document.querySelector('input[name="mobile"]').value
  if(username.length < 6){
    event.preventDefault();
    alert('Username must be at least 6 characters');
  }

  if(password != confirmPassword){
    event.preventDefault();
    alert('Passwords do not match');
  }

  if(number.length!=10){
    event.preventDefault();
    alert('Mobile number must be 10 digits');
  }
  if(number.length == 10){
    var first = number.charAt(0);
    if(first != 9 && first != 8 && first != 7 && first != 6){
      event.preventDefault();
      alert('Mobile number must start with 9, 8 6 or 7');
    }
  }
});
