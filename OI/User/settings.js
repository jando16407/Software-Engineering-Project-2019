const firebaseConfig = {
  apiKey: "AIzaSyAlLw14J9Wf8Tr3y26a3cQWOzTmiPN4-2w",
  authDomain: "officeinventory2.firebaseapp.com",
  databaseURL: "https://officeinventory2.firebaseio.com",
  projectId: "officeinventory2",
  storageBucket: "",
  messagingSenderId: "530222064086",
  appId: "1:530222064086:web:aaaf8b2c2a00f136"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
//reset login on window load
window.onload = function(){
  /*firebase.auth().signOut().then(function(){
    //successful
//      alert('logged out')
  },function(error){
    alert('still logged in')
  })*/
}
//setup();
var submitButton1 = document.getElementById("submitButton1");
var submitButton2 = document.getElementById("submitButton2");
var submitButton3 = document.getElementById("submitButton3");

/********************** update Password ********************************/
submitButton1.onclick = async function(){
  var itemUsername = document.getElementById("username");
  var itemOldPass = document.getElementById("oldpass");
  var itemNewPass = document.getElementById("newpass");
   
firebase.auth().signInWithEmailAndPassword(itemUsername.value, itemOldPass.value).catch(function(error) {
   // Handle Errors here.
   var errorCode = error.code;
   var errorMessage = error.message;
   alert("error")
   // ...º
});

var user22 = firebase.auth().currentUser;
firebase.auth().onAuthStateChanged;
user22.updatePassword(itemNewPass.value).then(function() {
alert('Password Updated successfully');
}).catch(function(error) {
console.log('An error happened.')
});
const report = document.getElementById('Message');
report.innerHTML = 'password of user ' + '(' +itemUsername.value  + ')' + ' is changed by employee.'
}
/************************* Delete Username ********************************/
submitButton2.onclick = function(){ 
  var itemDelete = document.getElementById("username2");
  var itemPass = document.getElementById("password2");
  
  firebase.auth().signInWithEmailAndPassword(itemDelete.value, itemPass.value).catch(function(error) {
   // Handle Errors here.
   var errorCode = error.code;
   var errorMessage = error.message;
   alert("error");
   // ...º
 });
 
 var user = firebase.auth().currentUser;
 
 user.delete().then(function() {
   alert('User Deleted successfully');
 }).catch(function(error) {
   // An error happened.
 });
 const report = document.getElementById('Message');
 report.innerHTML = 'Account of user ' + '(' +itemDelete.value  + ')' + ' is deleted by employee.'
 }

/*******************************Change Section ***************************/
submitButton3.onclick = function(){ 
    //var userId1 = document.getElementById("username5");
    var nameInput = document.getElementById("name");
    var secNum1 = document.getElementById("section");
    var typeInput = document.getElementById("type");
    //var telInput = document.getElementById("phone");
    if( nameInput != '' && nameInput != undefined ){
      database.collection('Office').doc('Users').collection('Users').doc('aa').update({
        name: nameInput.value
      });
    }
    if( secNum1 != '' && secNum1 != undefined ){
      database.collection('Office').doc('Users').collection('Users').doc('aa').update({
        sectionNum: secNum1.value
      });
    }
    if( typeInput != '' && typeInput != undefined ){
      database.collection('Office').doc('Users').collection('Users').doc('aa').update({
        userType: typeInput.value
      });
    }/*
    if( telInput != '' && nameInput != undefined ){
      database.collection('Office').doc('Users').collection('Users').doc('aa').update({
        name: nameInput.value
      });
    }*/
    //var userId = userId1.value;
    //database.collection('Office').doc('Users').collection('Users').doc('users/' + userId).add({
      /*
      database.collection('Office').doc('Users').collection('Users').doc('aa').update({
      name: nameInput.value,
      sectionNum: secNum1.value,
      userType: typeInput.value,
      userPhone: telInput.value,
    });*/
/*
   firebase.database().ref('users/' + userId).set({
    name: nameInput.value,
    sectionNum: secNum1.value,
    userType: typeInput.value,
    userPhone: telInput.value,
  });*/
  const report = document.getElementById('Message');
  //const report1 = document.getElementById('Message1');
  const report2 = document.getElementById('Message2');
  const report3 = document.getElementById('Message3');
  //const report4 = document.getElementById('Message4');
  //const report5 = document.getElementById('Message5');
  report.innerHTML = 'Profile of user is changed by employee:'
  //report1.innerHTML = 'Username is: ' + userId1.value;
  report2.innerHTML = 'Name is: '+ nameInput.value;
  report3.innerHTML = 'Section is: '+ secNum1.value;
  //report4.innerHTML = 'Type of user is: '+ typeInput.value;
  //report5.innerHTML = 'Telphone number is: ' + telInput.value;
  }