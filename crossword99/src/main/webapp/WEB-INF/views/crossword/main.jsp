<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
  <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- font -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
      rel="stylesheet"
    />
    <!-- css -->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/reset.css" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/style.css" />
    <!-- js -->
    <script
      src="https://code.jquery.com/jquery-3.6.0.js"
      integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
      crossorigin="anonymous"
    ></script>
    <script src="${pageContext.request.contextPath}/resources/js/index.js"></script>
    <title>crossword99</title>
  </head>
  <body>
    <div id="wrap">
      <header>
        <h1 class="mont">Crossword99</h1>
        <p>2022.01 김예림, 옥진경</p>
      </header>
      <main>
        <div id="hint_wrap">
          <div id="puzzle_list_wrap">
            <label id="puzzle_list" class="mont" for="puzzle_select"
              >Thema</label
            >
            <select id="puzzle_select">
              <option selected>Thema를 선택하세요.</option>
              <c:forEach var="list" items="${title}">
              	<option value="${list.tno}" class="puzzle_item">
              	<p></p>
              	<p class="puzzle_title">${list.tname}</p>
              	<p></p>              	
              	</option>
              </c:forEach>
              <!-- <option class="puzzle_item">
                <p></p>
                <p class="puzzle_title">animals</p>
                <p></p>
              </option> -->
            </select>
          </div>

          <div id="hint">
            <div id="across">
              <h3 class="hint_tit mont">Across</h3>
              <ol id="across_hint">
                <li class="across hint_item">
                  <span class="hint_num">1</span>4륜 우마차를 이르는 말
                </li>
                <li class="across hint_item">
                  <span class="hint_num">1</span>4륜 우마차를 이르는 말
                </li>
                <li class="across hint_item">
                  <span class="hint_num">1</span>4륜 우마차를 이르는 말
                </li>
                <li class="across hint_item">
                  <span class="hint_num">1</span>4륜 우마차를 이르는 말
                </li>
                <li class="across hint_item">
                  <span class="hint_num">1</span>4륜 우마차를 이르는 말
                </li>
              </ol>
            </div>
            <div id="down">
              <h3 class="hint_tit mont">Down</h3>
              <ol id="down_hint">
                <li class="down hint_item">
                  <span class="hint_num">1</span>4륜 우마차를 이르는 말
                </li>
                <li class="down hint_item">
                  <span class="hint_num">1</span>4륜 우마차를 이르는 말
                </li>
                <li class="down hint_item">
                  <span class="hint_num">1</span>4륜 우마차를 이르는 말
                </li>
                <li class="down hint_item">
                  <span class="hint_num">1</span>4륜 우마차를 이르는 말
                </li>
                <li class="down hint_item">
                  <span class="hint_num">1</span>4륜 우마차를 이르는 말
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div id="puzzle_wrap">
          <div class="row">
            <div class="col">
              <div class="anwser"></div>
              <input class="text" type="text" maxlength="1" />
            </div>
            <div class="col">
              <div class="anwser"></div>
              <input class="text" type="text" maxlength="1" />
            </div>
            <div class="col">
              <div class="anwser"></div>
              <input class="text" type="text" maxlength="1" />
            </div>
            <div class="col">
              <div class="anwser"></div>
              <input class="text" type="text" maxlength="1" />
            </div>
            <div class="col">
              <div class="anwser"></div>
              <input class="text" type="text" maxlength="1" />
            </div>
            <div class="col">
              <div class="anwser"></div>
              <input class="text" type="text" maxlength="1" />
            </div>
            <div class="col">
              <div class="anwser"></div>
              <input class="text" type="text" maxlength="1" />
            </div>
            <div class="col">
              <div class="anwser"></div>
              <input class="text" type="text" maxlength="1" />
            </div>
            <div class="col">
              <div class="anwser"></div>
              <input class="text" type="text" maxlength="1" />
            </div>
          </div>
        </div>
      </main>
      <div class="btn_wrap">
        <div
          id="btn_new"
          class="btn mont"
          onclick="location.href='${pageContext.request.contextPath}/do/make'"
       	>
          Register new puzzle
        </div>
      </div>
    </div>
    <script>
		/* $(function(){
			$("#selectbox").on("change",function(){
				
				$.ajax({
					url:"${pageContext.request.contextPath}/",
					data:{tno:$(this).val()},
					method:"POST",
					dataType:"json",
					success:function(data){
						console.log(data);
					},
					error:function(){
						alert("error");
					}
				});
			});
		}); */
		
		$(function(){
		 	$.ajax({
		 		url:"${pageContext.request.contextPath}/do/selectword",
		 		method:"GET",
				dataType:"json",
				success:function(data){
					console.log(data);
				},
				error:function(){
					alert("error");
				}
		 	});
		});
	</script>
  </body>
  
</html>

