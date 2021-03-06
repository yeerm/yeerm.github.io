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
    <link rel="stylesheet" href="../resources/css/reset.css" />
    <link rel="stylesheet" href="../resources//css/style.css" />
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
          <div id="puzzle_title" class="mont">
            <p>animals</p>
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
            </div>
            <div class="col">
              <div class="anwser"></div>
            </div>
            <div class="col">
              <div class="anwser"></div>
            </div>
            <div class="col">
              <div class="anwser"></div>
            </div>
            <div class="col">
              <div class="anwser"></div>
            </div>
            <div class="col">
              <div class="anwser"></div>
            </div>
            <div class="col">
              <div class="anwser"></div>
            </div>
            <div class="col">
              <div class="anwser"></div>
            </div>
            <div class="col">
              <div class="anwser"></div>
            </div>
          </div>
        </div>
      </main>
      <div class="btn_wrap">
        <div
          id="btn_register"
          class="btn mont"
          onclick="location.href='${pageContext.request.contextPath}/do/main'"
        >
          Register
        </div>
      </div>
    </div>
  </body>
</html>