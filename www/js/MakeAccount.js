var userInfo = {};

document.addEventListener('show', function (event) {
  if (event.target.matches('#MakeAccount')) {
  }
});

function registration(){
  userInfo = {}
  // userInfo.name = document.getElementById("makeUserName").value;
  userInfo.pass = document.getElementById("makePassword").value;
  userInfo.mail = document.getElementById('makeMail').value;
  const state = document.getElementById('login_check-2').checked;
  document.getElementById('makePassword').value = '';

  if (userInfo.pass && userInfo.mail) {
    makeAccount(userInfo);
  }else{
    document.getElementById('dialog-1').show();
  }
}