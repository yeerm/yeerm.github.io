$(document).ready(function(){

  $("#puzzle_select").change(function(){
    var selected = $("#puzzle_select option:selected").text();
    $("#puzzle_list").html(selected)
  });
  
});