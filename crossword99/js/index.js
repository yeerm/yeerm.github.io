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
  $(".answer").next().attr("disabled", true);
  coordinate();
  first ();

  
  
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

  //클릭한 li의 고유 이름 추출
  $("#across_hint > .hint_item").click(function(){
    var i = $(this).attr("data-name");
    console.log(i);
  });
});

// // DB에서 coordinate 값을 "/" 기준으로 잘라서 배열에 담기
// var coordinate_arr = arr.coordinate.split("/");
// // 단어 알파벳 배열
// var word_arr = []

// // 알파벳, word_arr 배열에 담기
// for(var i =0; i<word.length; i++){
//   var alpha = arr.word.chart(i)
//   word_arr.push(alpha)
// }

// function coordinate() {
//   for (var i =0; i<word_arr.length; i++){
//     // 각 알파벳 좌표값
//     var x = coordinate_arr[i].chart(0);
//     var y = coordinate_arr[i].chart(1);

//     // 좌표에 해당하는 text 넣기
//     $(".row:nth-child("+x+") >.col:nth-child("+y+")>.answer").html(word_arr[i]);
//   }
// }

// // word의 첫번째 알파벳 좌표와 위치 표시
// function first () {
//   // coordinate 첫번째 배열값중 첫글자 = x, 두번째 글자는 = y
//   var firstX = coordinate_arr[0].charAt(0);
//   var firstY = coordinate_arr[0].charAt(1);

//   $(".row:nth-child("+firstX+") >.col:nth-child("+firstY+")").parents(".col").addClass("first");

//   //방향 row 임시 설정
//   var direction = "row"
//   // row col 일때 퍼즐의 첫글자에 표시 적용
//   if(direction == "row"){
//     $(".first").addClass("across")
//   }else if(direction == "col"){
//     $(".first").addClass("down")
//   }
  
// }

