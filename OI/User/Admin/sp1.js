
function setup(){
    var firebaseConfig = {
        apiKey: "AIzaSyB0ZY93KxJK4UIRVnyXWqNm2V1l1M-4j_4",
        authDomain: "office-inventory-12f99.firebaseapp.com",
        databaseURL: "https://office-inventory-12f99.firebaseio.com",
        projectId: "office-inventory-12f99",
        storageBucket: "office-inventory-12f99.appspot.com",
        messagingSenderId: "147848186588",
        appId: "1:147848186588:web:33dbc8d727af1de4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    database = firebase.database();
    console.log(firebase);
}
   var emailInput='astest@MediaList.com'
   currentUser = 'astest@MediaList.com'
  var passwordInput='123456'
  //did user hit login?
  var login = document.getElementById("loginButton")
  login.onclick = function(){
        //get email & password from fields
         emailInput = document.getElementById("emailInput")
         passwordInput = document.getElementById("passwordInput")

        var email = emailInput.value
        var password = passwordInput.value
       
        // get email input & password input
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("error")
            // ...
        });
    }
  
function identifyUser(email){
  var userId = email.match(/^(.+)@/)[1]
  //save userId to send to next page
  localStorage.setItem('user', userId)

  //check db for admin or employee
  var userType = firebase.database().ref('users/' + userId + '/userType').once('value').then(function(snapshot){
    var type = snapshot.val() 
    //send user to their page based on userType
    if(type == 'Admin')
      window.location.href = "User/Admin/main.html"
    else
      window.location.href = "User/main.html"
  })
  
}
var user = firebase.auth().currentUser;

user.delete().then(function() {
    // User deleted.
  }).catch(function(error) {
    // An error happened.
  });