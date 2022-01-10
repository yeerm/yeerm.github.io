var startx = 0
var starty = 3
var word_arr = ["c","a","t"]

function coordinate() {
  for (var i =0; i<word_arr.length; i++){
    // 각 알파벳 좌표값

    console.log(x);
    console.log(y);
    console.log(word_arr[i])

    
    
    var direction ="row"
    if(direction == "row"){
      var x = startx +1
      var y = starty +1 +i
      $(".row:nth-child("+x+") >.col:nth-child("+y+") > .answer").html(word_arr[i]);
      $(".row:nth-child("+x+") >.col:nth-child("+y+") > .answer").next().removeAttr("disabled")
      $(".first").addClass("across")

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
      '<div class="col"><div class="answer"></div></div>'
    );
  }

  coordinate()
  first ();

})