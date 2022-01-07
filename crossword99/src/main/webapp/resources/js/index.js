$(document).ready(function(){

  $("#puzzle_select").change(function(){
    var selected = $("#puzzle_select option:selected").text();
    $("#puzzle_list").html(selected)
  });

  $("#puzzle_wrap > .row").each(function(index){
    $(this).attr("row-number",index);
  });

  $(".text").bind().change(function(){
    var anwser = $(this).prev().text();
    console.log(anwser);

    var text = $(this).val();
    console.log(text);

     if(text == anwser){
       $(this).css({
         backgroundColor : "cornflowerblue"
       })
     }else if(text != anwser){
      $(this).css({
        backgroundColor : "red"
      });
      $(this).animate({
        rotate:"15deg"
      });
     }
  });

//   $(".text").keyup(function(e) {
//     if(e.keyCode == 9){
//       input_value = $(".text").val()
//       if(input_value  = ''){
//         $(".text").focus();
//       }
      
//     }   
// });
  
});