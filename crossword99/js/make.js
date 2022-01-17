// 유효성 Test
var is_title = 0;
var is_wordinput = 0;
var is_descinput = 0;


function checkinput(){
  var title = $("#make_title").val();
  var wordinput = $(".word").val();
  var descinput = $(".desc").val();
  var cont = 0;

  if(title == "" || title == null){
    is_title = 0;
    var message = "제목을 입력해주세요"
    alarm(message);
    console.log("title")
  } else {
    is_title = 1;
  }
  
  
  for(var i = 1; i<=10; i++){
    var word_list = $(".puzzle_item:nth-child("+i+") > .word").val();
    if(word_list){
      cont++;
      console.log(cont);
    }
  }

  if(cont < 5){
    is_wordinput = 0;
    var message = "단어를 5개 이상 입력해주세요."
    alarm(message);
  } else{
    // 수정 필요
    if(isWord(wordinput)){
      is_wordinput = 0;
      var message = "단어에 영어만 입력해주세요."
      alarm(message);
    } else{
      is_wordinput = 1;
    }
  }

  if(wordinput){
    if(descinput== "" || descinput== null){
      is_descinput = 0;
    } else {
      is_descinput = 1;
      var message = "입력한 단어의 힌트를 입력해주세요"
      alarm(message);
    }
  }

  if (is_title == 1 && is_wordinput == 1 && is_descinput == 1) {
    $("#btn_make").submit();

    //페이지 이동 넣기
  }
}

function isWord(wordvalue) {
  var regen = /^[A-Za-z]$/;
  return regen.test(wordvalue);
}

$(document).ready(function () {
  // li 생성
  for (var i = 0; i <= 10; i++) {
    $("#new_puzzle").append(
      '<li class="puzzle_item"> <input class="word" minlength="3" maxlength="7" placeholder="영문 3~7글자 이내" pattern="[A-Za-z]+"/><input class="desc" maxlength="24" placeholder="24자 내 입력" /></li>'
    );
  }

  $("#btn_make").click(function () {
    $("#alarm_wrap").remove("#alarm")
    checkinput();
  });

  $()
  

});


