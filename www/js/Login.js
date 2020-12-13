var userInfo = {};

document.addEventListener('show', function (event) {
  if (event.target.matches('#Login')) {
  
  }
});

function Signin(){
  userInfo = {}
  userInfo.mail = document.getElementById("SignIn_Username").value;
  userInfo.pass = document.getElementById("SignIn_Password").value;
  var state = document.getElementById("signIn_check-1").checked;
  document.getElementById("SignIn_Password").value = '';
  
  login(userInfo).then(function (r) {
    console.log(r);
  }).catch(function (e) {
    alert(e);
  });
}