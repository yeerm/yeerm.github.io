var startx = 0
var starty = 3
var word_arr = ["c","a","t"]

function coordinate() {
  for (var i =0; i<word_arr.length; i++){
    // 각 알파벳 좌표값

    var direction ="row"
    if(direction == "row"){
      var x = startx +1
      var y = starty +1 +i
      $(".row:nth-child("+x+") >.col:nth-child("+y+") > .answer").html(word_arr[i]);
      $(".row:nth-child("+x+") >.col:nth-child("+y+") > .answer").next().removeAttr("disabled")
      $(".first").addClass("across");

    }else if(direction == "col"){
      var x = startx +1 +i
      var y = starty +1
      $(".row:nth-child("+x+") >.col:nth-child("+y+") > .answer").html(word_arr[i]);
      $(".row:nth-child("+x+") >.col:nth-child("+y+") > .answer").next().removeAttr("disabled")
      $(".first").addClass("down")
    }
    
  }

}

// word의 첫번째 알파벳 좌표와 위치 표시
function first () {

  var firstX = startx+1
  var firstY = starty+1
  // 방향 박스 초기화
  $(".row >.col").removeClass("first");
  // word의 첫번째 알파벳에 방향 박스 클라스 적용
  $(".row:nth-child("+firstX+") >.col:nth-child("+firstY+")").addClass("first");
  $(".row:nth-child("+firstX+") >.col:nth-child("+firstY+") > input.text").css({
    opacity: 0
  });

  //방향 row 임시 설정
  var direction = "col"

  // 방향 박스 초기화
  $(".first").removeClass("across");
  $(".first").removeClass("down");

  // row col 일때 퍼즐의 첫글자에 표시 적용
  if(direction == "row"){
    $(".first").addClass("across")
  }else if(direction == "col"){
    $(".first").addClass("down")
  }
}

function choise(a,b){
  $("li.hint_item").click(function(){
    var firstX = a+1;
    var firstY = b+1;
    var rowFocus = firstY +1;
    var colFocus = firstX +1;
  
    // list 선택시 초기화
    $(".row >.col > input").removeClass("focus");


    if(direction == "row"){
      $(".row:nth-child("+firstX+") >.col:nth-child("+rowFocus+") > input").focus().addClass("focus");
    }else if(direction == "col"){
      $(".row:nth-child("+colFocus+") >.col:nth-child("+firstY+") > input").focus().addClass("focus");
    }

  });
}

$(document).ready(function(){

  var gridsize = 9
  //
  for(var i = 1; i<=gridsize; i++){
    $("#puzzle_wrap").append(
      '<div class="row"></div>'
    );
  }

  for(var j =1; j<=gridsize; j++){
    $(".row").append(
      '<div class="col"><div class="answer"></div><input class="text" type="text" maxlength="1" /></div>'
    );
  }

  $("#puzzle_select").change(function(){
    var selected = $("#puzzle_select option:selected").text();
    $("#puzzle_list").html(selected)
  });

  // row number 적용
  $("#puzzle_wrap > .row").each(function(index){
    $(this).attr("row-number",index);
  });

  // input에 text 입력 후 정답과 비교
  $(".text").bind().change(function(){
    var anwser = $(this).prev().text();
    console.log(anwser);
    
    var text = $(this).val();
    console.log(text);

     if(text == anwser){
      $(this).removeClass("wrong");
      $(this).addClass("correct")
     }else if(text != anwser){
      $(this).removeClass("correct")
      $(this).addClass("wrong");      
     }
  });

  $(".answer").next().attr("disabled", true);
  coordinate();
  first ();
  
});

