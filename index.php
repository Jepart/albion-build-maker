<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Albion Boss</title>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
    <style>
      body {
        --zoom: 1.0;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      div#boss {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
      main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
      }
      main > picture {
        width: calc(120px * var(--zoom));
        height: calc(120px * var(--zoom));
      }
      main > picture > img {
        width: 100%;
        height: 100%;
      }
      section#set {
        width: calc(480px * var(--zoom));
        height: calc(520px * var(--zoom));
        background-repeat: no-repeat;
        background-size: 100%;
        background-image: url("https://assets.albiononline.com/assets/images/characterbuilder/gear.png?u5a24aacb");
      }
      aside {
        background-color: rebeccapurple;
        width: 600px;
        height: 500px;
      }
      .info{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
      .item{
        top: 190px;
        left: 188px;
        position: absolute;
        width: 100px;
        height: 100px;
        border: none;
        color: transparent;
        cursor: pointer;
      }
      .item[name=head]{
        top: 190px;
        left: 188px;
      }
      .item[name=armor]{
        top: 190px;
        left: 188px;
      }
      .item[name=mainhand]{
        top: 190px;
        left: 188px;
      }
      .item[name=head]{
        top: 190px;
        left: 188px;
      }
      .item[name=head]{
        top: 190px;
        left: 188px;
      }
      .item[name=head]{
        top: 190px;
        left: 188px;
      }
      .item[name=head]{
        top: 190px;
        left: 188px;
      }
    </style>
  </head>
  <body>
    <select id="Boss">
      <option value="Pool Normal" selected>Pool Normal</option>
      <option value="Boss guerreiro">Boss guerreiro</option>
      <option value="BOSS Construtor">BOSS Construtor</option>
      <option value="BOSS Final">BOSS Final</option>
    </select>
    <div id="boss">
      <main>
        <picture
          ><img
            src="https://cdn.discordapp.com/icons/1178047720221581322/cc11d07041cf5ee8ae8b226dbae32bc0.webp"
            alt=""
        /></picture>
        <span>Build : Pool Normal</span>
        <div class="info">
          <section id="set">
            <button class="item" name="head"></button>
            <button class="item" name="armor"></button>
            <button class="item" name="mainhand"></button>
            <button class="item" name="sechand"></button>
            <button class="item" name="food"></button>
            <button class="item" name="boots"></button>
            <button class="item" name="potion"></button>
          </section>
          <aside>
            <h3>Objectivos:</h3>
            <input type="text" />
          </aside>
        </div>
      </main>
    </div>
  </body>
  <script>
    $(document).ready(function () {
      $("#Boss").change(function () {
        var selectedText = $(this).find("option:selected").text();
        $("#boss > main > span").text(`Pool : ${selectedText}`);
      });
    });
  </script>
</html>
