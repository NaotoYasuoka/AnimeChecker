// This is a JavaScript file
document.addEventListener('change', function (event) {
  if (event.target.matches('#notice_1')) {
    var switchs = document.getElementById('notice_1').checked;
    if(switchs){
      ons.notification.toast('PrimeVideoの通知をONにしました.', { timeout: 2000, animation: 'fall' });
    }else{
      ons.notification.toast('PrimeVideoの通知をOFFにしました.', { timeout: 2000, animation: 'fall' });
    }
  }
  if (event.target.matches('#notice_2')) {
    var switchs = document.getElementById('notice_2').checked;
    if(switchs){
      ons.notification.toast('AbemaTVの通知をONにしました.', { timeout: 2000, animation: 'fall' });
    }else{
      ons.notification.toast('AbemaTVの通知をOFFにしました.', { timeout: 2000, animation: 'fall' });
    }
  }
  // https://press.monaca.io/mbaas-devrel/440
});