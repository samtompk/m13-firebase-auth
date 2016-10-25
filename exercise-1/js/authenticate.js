// JavaScript authentication file
$(function() {

    // Initialize Firebase
  	var config = {
	    apiKey: "AIzaSyBi7m0iML3yCWIlo-8LLCGULOdMpaENzFI",
	    authDomain: "authentication-info343.firebaseapp.com",
	    databaseURL: "https://authentication-info343.firebaseio.com",
	    storageBucket: "authentication-info343.appspot.com",
	    messagingSenderId: "589416615221"
  	};
  	firebase.initializeApp(config);
    // Sign Up: Function to create account on firebase, then redirect to index.html
    var signUp = function() {
        // Get email, password, and display name
        var email = $('#email').val();
        var password = $('#password').val();
        var display_name = $('#display_name').val();
        // Create user, then set the user's display name
    	var auth = firebase.auth();
    	firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
            // Set display name
            user.updateProfile({
            	displayName: display_name
            }).then(function() {
            	window.location = 'index.html';
            });	
    	}).catch(function(error) {
    		alert(error.message);
    	});
    };

    // SignIn: Function to authenticate on Firebase, then redirect to index.html
    var signIn = function() {
        // Get email and password
        var email = $('#email').val();
        var password = $('#password').val();
        // Authenticate using email and password, then redirect
        var auth = firebase.auth();
        firebase.auth().signInWithEmailAndPassword(email, password)
        	.then(function() {
        		window.location = 'index.html';
        	})
        	.catch(function(error) {
        		alert(error.message);
        	});
    };

    // Sign out: Function to log a user out of firebase
    var signOut = function() {
        // Sign out, then redirect



    };

    // Assign event lister to form submission
    $('#submit').on('click', function() {
    	signUp();
    });

    $('#sign-in').on('click', function() {
    	signIn();
    });

    // Assign click event to logout button



    // Authentication Change: see if a user is already signed in, and redirect

            // Rediriect to index.html if there is a user and the pathname isn't '/'

            // Redirect to sign-in if there is NOT a user and the pathname IS '/'

});
