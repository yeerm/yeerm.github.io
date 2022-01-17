function alarm(message){
  $("#message").innerHTML = message;
  $("#alarm_wrap").append(
    '<div id="alarm"><h1>Infomation</h1><p id="message">'+message+'</p><button id="btn_ok" type="button">OK</button></div>'
  )
  
};