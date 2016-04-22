Template.login.events({
  "submit #form-login": function(event){
    event.preventDefault();
    var user = event.target.useraccount.value;
    var password = event.target.password.value;
    console.log(user + " is equals to " + password);

    Meteor.loginWithPassword(user, password, function(err){
      if(err){
        event.target.user.value = "";
        event.target.password.value = "";
        toastr.error(err.reason);
      } else{
        toastr.success('You are now logged in');
        Router.go('home');
      }
    });
  }
});

Template.register.events({
  "submit #form-register": function(event){
    event.preventDefault();
    console.log("working!");

    var first_name = event.target.first_name.value;
    var last_name = event.target.last_name.value;
    var username = event.target.username.value;
    var email = event.target.email.value;
    var password = event.target.password.value;
    var password2 = event.target.password2.value;
    var avatar = '/img/profile.png';

  if(areValidPasswords(password, password2)){

    Accounts.createUser({
      username: username,
      email: email,
      password: password,
      profile: {
        first_name: first_name,
        last_name: last_name,
        avatar: avatar
      }
    }, function(err){
      if(err){
        console.log(err);
        toastr.sendError("There was an error with registration");
      } else{
        toastr.success("Account Created! You are now logged in!");
        Router.go('home');
      }
    });
    }
  }
});

// validation rules

// Check Password Field
isValidPassword = function(password){
	if(password.length < 6){
		FlashMessages.sendError("Password must be at least 6 characters");
		return false;
	}
	return true;
};

// Match Password
areValidPasswords = function(password,confirm){
	if(!isValidPassword(password)){
		return false;
	}
	if(password !== confirm){
		toastr.error("Passwords do not match");
		return false;
	}
	return true;
};
