<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
    <title>crossword99</title>
  </head>
  <body>
    <div id="wrap">
      <header>
        <h1 class="mont">Crossword99</h1>
        <p>2022.01 김예림, 옥진경</p>
      </header>
      <main id="make_main">
        <div>
          <label>Title:</label>
          <input />
        </div>
        <div>
          <div></div>
          <div><input class="word" /><input class="desc" /></div>
          <div><input class="word" /><input class="desc" /></div>
          <div><input class="word" /><input class="desc" /></div>
          <div><input class="word" /><input class="desc" /></div>
          <div><input class="word" /><input class="desc" /></div>
          <div><input class="word" /><input class="desc" /></div>
          <div><input class="word" /><input class="desc" /></div>
          <div><input class="word" /><input class="desc" /></div>
          <div><input class="word" /><input class="desc" /></div>
          <div><input class="word" /><input class="desc" /></div>
        </div>
      </main>
      <div id="make" class="btn_wrap">
        <div
          id="btn_main"
          class="btn mont"
          onclick="location.href='${pageContext.request.contextPath}/do/main'"
        >
          Main
        </div>
        <div
          id="btn_make"
          class="btn mont"
          onclick="location.href='${pageContext.request.contextPath}/do/register'"
        >
          Make puzzle
        </div>
      </div>
    </div>
  </body>
</html>