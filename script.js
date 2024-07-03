defineSwap = (num, tag) => {
  const select = $(`#swap > .itemSelectSwap > .item[num=${num}]`);
  select.attr(
    "style",
    `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
  );
};
substituirNomes = (string)=>{
  var niveis = [" do Adepto", " do Perito", " do Mestre", " do Grão-mestre", " do Ancião"];
  var substituicao = "";

  $.each(niveis, function(index, valor) {
      if (string.includes(valor)) {
          string = string.replace(valor, substituicao);
      }
  });

  return string;
}
defineItem = (slot, tag, twohand = "false") => {
  const select = $(`.item[name=${slot}]`);
  select.attr(
    "style",
    `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
  );
  if (slot == "mainhand") {
    let offhand = $(`.item[name=offhand]`);
    if (offhand.attr("twohand") == "true") {
      offhand.attr("style", `background-image: none;`);
    }
    offhand.attr("twohand", twohand);
    if (twohand == "true") {
      offhand.attr(
        "style",
        `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
      );
    }

    let spellItem = $(`article[name=${slot}] > button.itemSelected`);
    spellItem.attr(
      "style",
      `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
    );
    let findSlot = item.find((item) => item._id === slot);
    let findItem = findSlot["items"].find((item) => item._id === tag);

    var selectSpells = $(`article[name=${slot}] > .spellList`);
    selectSpells.find("span").attr("style", "display:block;");
    selectSpells.find('h5').text(substituirNomes(findItem['LocalizedNames']['PT-BR']))
    $(`article[name=${slot}]`).find("div.list_spells").children().remove();
    $(`article[name=${slot}]`)
      .find(".spells > button")
      .attr("style", `background-image: none;`);
    findItem["craftingspelllist"]["craftspell"].forEach((e) => {
      if (e["slots"] == "1") {
        var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_1">`;
        selectSpells
          .children("span[name=spell_1]")
          .find("div.list_spells")
          .append(string);
      } else if (e["slots"] == "2") {
        var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_2">`;
        selectSpells
          .children("span[name=spell_2]")
          .find("div.list_spells")
          .append(string);
      } else if (e["slots"] == "3") {
        selectSpells
          .children("span[name=spell_3]")
          .find("button")
          .attr(
            "style",
            `background-image: url("https://render.albiononline.com/v1/spell/${e["uniquename"]}");`
          );
      } else {
        var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_4">`;
        selectSpells
          .children("span[name=spell_4]")
          .find("div.list_spells")
          .append(string);
      }
    });
    $(`article[name=${slot}] > .spellList > span > .list_spells > img`).click(
      function (e) {
        var button = $(
          `article[name=${slot}] > .spellList > span > button.${$(this).attr(
            "spells"
          )}`
        );
        var img = $(this).attr("src");
        button.attr("style", `background-image: url("${img}");`);
      }
    );
  }
  if (slot == "offhand") {
    if (select.attr("twohand") == "true") {
      $(`.item[name=mainhand]`).attr("style", `background-image: none);`);
    }
  }
  // -----------------------
  if (slot == "head") {
    let spellItem = $(`article[name=${slot}] > button.itemSelected`);
    spellItem.attr(
      "style",
      `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
    );
    let findSlot = item.find((item) => item._id === slot);
    let findItem = findSlot["items"].find((item) => item._id === tag);

    var selectSpells = $(`article[name=${slot}] > .spellList`);
    selectSpells.find("span").attr("style", "display:block;");
    selectSpells.find('h5').text(substituirNomes(findItem['LocalizedNames']['PT-BR']))
    $(`article[name=${slot}]`).find("div.list_spells").children().remove();
    $(`article[name=${slot}]`)
      .find(".spells > button")
      .attr("style", `background-image: none;`);
    findItem["craftingspelllist"]["craftspell"].forEach((e) => {
      if (e["uniquename"].indexOf("PASSIVE") == -1) {
        var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_1">`;
        console.log(selectSpells.parent());
        selectSpells
          .children("span[name=spell_1]")
          .find("div.list_spells")
          .append(string);
      } else {
        var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_2">`;
        selectSpells
          .children("span[name=spell_2]")
          .find("div.list_spells")
          .append(string);
      }
    });
    $(`article[name=${slot}] > .spellList > span > .list_spells > img`).click(
      function (e) {
        var button = $(
          `article[name=${slot}] > .spellList > span > button.${$(this).attr(
            "spells"
          )}`
        );
        var img = $(this).attr("src");
        button.attr("style", `background-image: url("${img}");`);
      }
    );
  }
  // -----------------------
  if (slot == "armor") {
    let spellItem = $("article[name=armor] > button.itemSelected");
    spellItem.attr(
      "style",
      `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
    );
    let findSlot = item.find((item) => item._id === slot);
    let findItem = findSlot["items"].find((item) => item._id === tag);

    var selectSpells = $(`article[name=${slot}] > .spellList`);
    selectSpells.find("span").attr("style", "display:block;");
    selectSpells.find('h5').text(substituirNomes(findItem['LocalizedNames']['PT-BR']))
    $("article[name=armor]").find("div.list_spells").children().remove();
    $("article[name=armor]")
      .find(".spells > button")
      .attr("style", `background-image: none;`);
    findItem["craftingspelllist"]["craftspell"].forEach((e) => {
      if (tag.indexOf("ARMOR_PLATE") == -1) {
        selectSpells.parent().find("span[name=spell_3]").fadeOut();
        if (e["uniquename"].indexOf("PASSIVE") == -1) {
          console.log(tag);
          var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_1">`;
          selectSpells
            .children("span[name=spell_1]")
            .find("div.list_spells")
            .append(string);
        } else {
          var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_2">`;
          selectSpells
            .children("span[name=spell_2]")
            .find("div.list_spells")
            .append(string);
        }
      } else {
        selectSpells.parent().find("span[name=spell_3]").fadeIn();
        if (e["slots"] == "1") {
          var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_2">`;
          selectSpells
            .children("span[name=spell_2]")
            .find("div.list_spells")
            .append(string);
        } else if (e["slots"] == "2") {
          var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_3">`;
          selectSpells
            .children("span[name=spell_3]")
            .find("div.list_spells")
            .append(string);
        } else {
          var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_1">`;
          selectSpells
            .children("span[name=spell_1]")
            .find("div.list_spells")
            .append(string);
        }
      }
    });
    $(`article[name=${slot}] > .spellList > span > .list_spells > img`).click(
      function (e) {
        var button = $(
          `article[name=${slot}] > .spellList > span > button.${$(this).attr(
            "spells"
          )}`
        );
        var img = $(this).attr("src");
        button.attr("style", `background-image: url("${img}");`);
      }
    );
  }
  // -----------------------
  if (slot == "shoes") {
    let spellItem = $("article[name=shoes] > button.itemSelected");
    spellItem.attr(
      "style",
      `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
    );
    let findSlot = item.find((item) => item._id === slot);
    let findItem = findSlot["items"].find((item) => item._id === tag);

    var selectSpells = $(`article[name=${slot}] > .spellList`);
    selectSpells.find("span").attr("style", "display:block;");
    selectSpells.find('h5').text(substituirNomes(findItem['LocalizedNames']['PT-BR']))
    $("article[name=shoes]").find("div.list_spells").children().remove();
    $("article[name=shoes]")
      .find(".spells > button")
      .attr("style", `background-image: none;`);
    findItem["craftingspelllist"]["craftspell"].forEach((e) => {
      if (e["uniquename"].indexOf("PASSIVE") == -1) {
        var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_1">`;
        selectSpells
          .children("span[name=spell_1]")
          .find("div.list_spells")
          .append(string);
      } else {
        var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_2">`;
        selectSpells
          .children("span[name=spell_2]")
          .find("div.list_spells")
          .append(string);
      }
    });
    $(`article[name=${slot}] > .spellList > span > .list_spells > img`).click(
      function (e) {
        var button = $(
          `article[name=${slot}] > .spellList > span > button.${$(this).attr(
            "spells"
          )}`
        );
        var img = $(this).attr("src");
        button.attr("style", `background-image: url("${img}");`);
      }
    );
  }
  // -----------------------
  if (slot == "cape") {
    let spellItem = $(`article[name=${slot}] > button.itemSelected`);
    spellItem.attr(
      "style",
      `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
    );
    let findSlot = item.find((item) => item._id === slot);
    let findItem = findSlot["items"].find((item) => item._id === tag);
    $(`article[name=${slot}] > h5`).text(substituirNomes(findItem['LocalizedNames']['PT-BR']))
  }
  if (slot == "potion") {
    let spellItem = $(`article[name=${slot}] > button.itemSelected`);
    spellItem.attr(
      "style",
      `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
    );
    let findSlot = item.find((item) => item._id === slot);
    let findItem = findSlot["items"].find((item) => item._id === tag);
    $(`article[name=${slot}] > h5`).text(substituirNomes(findItem['LocalizedNames']['PT-BR']))
  }
  if (slot == "food") {
    let spellItem = $(`article[name=${slot}] > button.itemSelected`);
    spellItem.attr(
      "style",
      `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
    );
    let findSlot = item.find((item) => item._id === slot);
    let findItem = findSlot["items"].find((item) => item._id === tag);
    $(`article[name=${slot}] > h5`).text(substituirNomes(findItem['LocalizedNames']['PT-BR']))
  }
  if (slot == "offhand") {
    let spellItem = $(`article[name=${slot}] > button.itemSelected`);
    spellItem.attr(
      "style",
      `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
    );
    let findSlot = item.find((item) => item._id === slot);
    let findItem = findSlot["items"].find((item) => item._id === tag);
    $(`article[name=${slot}] > h5`).text(substituirNomes(findItem['LocalizedNames']['PT-BR']))
  }
};

$("button.close,.darkScreen").click(function (e) {
  $("#selectItem,.darkScreen").fadeOut();
});
$("button.save").click(function (e) {
  let slotItem = $("#selectItem").attr("slot");
  let slotNum = $("#selectItem").attr("num");
  let itemSelect = $("#selectItem > main > article > picture[select=true]");
  let itemName = itemSelect.attr("name");
  let itemTwoHand = itemSelect.attr("twohand");
  if (slotItem == "all") {
    defineSwap(slotNum, itemName);
  } else {
    defineItem(slotItem, itemName, itemTwoHand);
  }
  $("#selectItem,.darkScreen").fadeOut();
});
createItens = (slot = "mainhand", num = "") => {
  if (slot !== $("#selectItem").attr("slot")) {
    $(
      "datalist#suggestions > option,#selectItem > main > article>picture"
    ).remove();
    var recreate = true;
  } else {
    var recreate = false;
  }
  if (slot == "all") {
    $("#selectItem").attr("slot", slot);
    $("#selectItem").attr("num", num);
    if (recreate) {
      item.forEach((e) => {
        e["items"].forEach((item) => {
          try {
            console.log(item["_id"]);
            string = `<picture name="${item["_id"]}" language="${item["LocalizedNames"]["PT-BR"]}">
            <img src="https://render.albiononline.com/v1/item/${item["_id"]}"/>            
            </picture>`;
            $("#selectItem > main > article").append(string);
            $("datalist#suggestions").append(
              `<option value="${item["LocalizedNames"]["PT-BR"]}">`
            );
          } catch (error) {}
        });
      });
    }
  } else {
    if (recreate) {
      $("#selectItem").attr("slot", slot);
      item.forEach((e) => {
        if (e["_id"] == slot) {
          e["items"].forEach((item) => {
            let twohand = slot == "mainhand" ? item["twohanded"] : false;
            try {
              string = `<picture name="${item["_id"]}" twohand="${twohand}" language="${item["LocalizedNames"]["PT-BR"]}">
            <img src="https://render.albiononline.com/v1/item/${item["_id"]}"/>            
            </picture>`;
              $("#selectItem > main > article").append(string);
              $("datalist#suggestions").append(
                `<option value="${item["LocalizedNames"]["PT-BR"]}">`
              );
            } catch (error) {}
          });
        }
      });
    }
  }
  $("#selectItem > main > article > picture").click(function (e) {
    $("img.check").remove();
    $("picture[select=true]").attr("select", "false");
    $(this).attr("select", "true");
    $(this).append(
      '<img src="https://www.svgrepo.com/show/404946/check-mark-button.svg" class="check">'
    );
  });

  $("#itemSelect").on("input", function () {
    var searchText = $(this).val().toLowerCase();
    $("#selectItem > main > article > picture").each(function () {
      var languageTag = $(this).attr("language").toLowerCase();
      $(this).toggle(languageTag.includes(searchText));
    });
  });
  $("#selectItem,.darkScreen").fadeIn();
};
$("section#set > button").click(function (e) {
  createItens($(this).attr("name"), $(this).attr("num"));
});

modifyBackground = () => {
  var bg = $("#boxModifyBackgroud > input").val();
  if (bg !== "") {
    $("body").css("background-image", `url(${bg})`);
  }
};
closeBoxBg = () => {
  $("#ShadowModify,#boxModifyBackgroud").fadeOut();
};
ShowBoxBg = () => {
  $("#ShadowModify,#boxModifyBackgroud").fadeIn();
};
showConfig = () => {
  var config = $("#config");
  if (config.attr("stats") == "active") {
    config.attr("stats", "disable");
  } else {
    config.attr("stats", "active");
  }
};
onTitle = () => {
  $("textarea.title").toggle();
  var button = $("div[name=title]>button");
  button.attr("stats", button.attr("stats") == "hide" ? "show" : "hide");
};
onSkill = () => {
  $("aside[name=skill]").toggle();
  var button = $("div[name=skill]>button");
  button.attr("stats", button.attr("stats") == "hide" ? "show" : "hide");
};
onOther = () => {
  $("aside[name=other]").toggle();
  var button = $("div[name=skill]>button");
  button.attr("stats", button.attr("stats") == "hide" ? "show" : "hide");
};
onSubtract = () => {
  var buttons = $(".itemSelectSwap > button");
  buttons.last().remove();
  if (buttons.length - 1 == 0) {
    console.log(buttons);
    $("#swap").fadeOut();
  }
};
onSum = () => {
  var max = 12;
  var num = $(".itemSelectSwap > button").length + 1;
  if (num == 1) {
    $("#swap").fadeIn();
  }

  if (num <= max) {
    var string = `<button class="item" name="all" num="all_${num}"></button>`;
    $(".itemSelectSwap").append(string);
    $("#swap > .itemSelectSwap > button").click(function (e) {
      createItens($(this).attr("name"), $(this).attr("num"));
    });
  }
};
