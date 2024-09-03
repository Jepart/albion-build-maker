defineSwap = (num, tag) => {
  const select = $(`#swap > .itemSelectSwap > .item[num=${num}]`);
  select
    .attr(
      "style",
      `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
    )
    .attr("tag", tag);
};
substituirNomes = (string) => {
  var niveis = [
    " do Adepto",
    " do Perito",
    " do Mestre",
    " do Grão-mestre",
    " do Ancião",
  ];
  var substituicao = "";

  $.each(niveis, function (index, valor) {
    if (string.includes(valor)) {
      string = string.replace(valor, substituicao);
    }
  });

  return string;
};
defineItem = (
  slot,
  tag,
  spell1 = null,
  spell2 = null,
  spell3 = null,
  spell4 = null
) => {
  const select = $(`.item[name=${slot}]`);
  select.attr(
    "style",
    `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
  );
  let noenchanted = tag.split('@')
  if (slot == "mainhand") {
    let spellItem = $(`article[name=${slot}] > button.itemSelected`);
    spellItem.attr("tag", tag);

    spellItem.attr(
      "style",
      `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
    );
    let findSlot = item.find((item) => item._id === slot);
    let findItem = findSlot["items"].find((item) => item._id === noenchanted[0]);
    let twohand = findItem["twohanded"] ? true : false;
    let offhand = $(`.item[name=offhand]`);
    offhand.attr("twohand", twohand);
    if (twohand) {
        $('aside[name=other] > article[name=offhand] > button.itemSelected').attr('tag',"")
        offhand.attr(
          "style",
          `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
        )
    }

    var selectSpells = $(`article[name=${slot}] > .spellList`);
    selectSpells.find("span").attr("style", "display:block;");
    selectSpells
      .find("h5")
      .text(substituirNomes(findItem["LocalizedNames"]["PT-BR"]));
    $(`article[name=${slot}]`).find("div.list_spells").children().remove();
    $(`article[name=${slot}]`)
      .find(".spells > button")
      .attr("style", `background-image: none;`);
    var spell_1 = 1;
    var spell_2 = 1;
    var spell_3 = 1;
    var spell_4 = 1;
    findItem["craftingspelllist"]["craftspell"].forEach((e) => {
      if (e["slots"] == "1") {
        var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_1" numspell="${spell_1}">`;

        selectSpells
          .children("span[name=spell_1]")
          .find("div.list_spells")
          .append(string);

        if (spell1 == spell_1) {
          selectSpells
            .children("span[name=spell_1]")
            .find("button")
            .attr(
              "style",
              `background-image: url("https://render.albiononline.com/v1/spell/${e["uniquename"]}");`
            )
            .attr("numSpell", spell_1);
        }
        spell_1++;
      } else if (e["slots"] == "2") {
        var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_2" numspell="${spell_2}">`;
        if (spell2 == spell_2) {
          selectSpells
            .children("span[name=spell_2]")
            .find("button")
            .attr(
              "style",
              `background-image: url("https://render.albiononline.com/v1/spell/${e["uniquename"]}");`
            )
            .attr("numSpell", spell_1);
        }
        spell_2++;
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
        var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_4" numspell="${spell_4}">`;
        if (spell4 == spell_4) {
          selectSpells
            .children("span[name=spell_4]")
            .find("button")
            .attr(
              "style",
              `background-image: url("https://render.albiononline.com/v1/spell/${e["uniquename"]}");`
            )
            .attr("numSpell", spell_1);
        }
        spell_4++;
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
        button.attr("numspell", $(this).attr("numspell"));
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
    spellItem.attr("tag", tag);
    spellItem.attr(
      "style",
      `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
    );
    let findSlot = item.find((item) => item._id === slot);
    let findItem = findSlot["items"].find((item) => item._id === noenchanted[0]);

    var selectSpells = $(`article[name=${slot}] > .spellList`);
    selectSpells.find("span").attr("style", "display:block;");
    selectSpells
      .find("h5")
      .text(substituirNomes(findItem["LocalizedNames"]["PT-BR"]));
    $(`article[name=${slot}]`).find("div.list_spells").children().remove();
    $(`article[name=${slot}]`)
      .find(".spells > button")
      .attr("style", `background-image: none;`);

    var spell_1 = 1;
    var spell_2 = 1;
    var spell_3 = 1;
    var spell_4 = 1;
    
    findItem["craftingspelllist"]["craftspell"].forEach((e) => {
      if (e["uniquename"].indexOf("PASSIVE") == -1) {
        var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_1" numspell="${spell_1}">`;

        if (spell1 == spell_1) {
          selectSpells
            .children("span[name=spell_1]")
            .find("button")
            .attr(
              "style",
              `background-image: url("https://render.albiononline.com/v1/spell/${e["uniquename"]}");`
            )
            .attr("numSpell", spell_1);
        }
        spell_1++;
        selectSpells
          .children("span[name=spell_1]")
          .find("div.list_spells")
          .append(string);
      } else {
        var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_2" numspell="${spell_2}">`;
        if (spell2 == spell_2) {
          selectSpells
            .children("span[name=spell_2]")
            .find("button")
            .attr(
              "style",
              `background-image: url("https://render.albiononline.com/v1/spell/${e["uniquename"]}");`
            )
            .attr("numSpell", spell_2);
        }
        spell_2++;
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
        button.attr("numspell", $(this).attr("numspell"));
      }
    );
  }
  // -----------------------
  if (slot == "armor") {
    let spellItem = $("article[name=armor] > button.itemSelected");
    spellItem.attr("tag", tag);
    spellItem.attr(
      "style",
      `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
    );
    let findSlot = item.find((item) => item._id === slot);
    let findItem = findSlot["items"].find((item) => item._id === noenchanted[0]);

    var selectSpells = $(`article[name=${slot}] > .spellList`);
    selectSpells.find("span").attr("style", "display:block;");
    selectSpells
      .find("h5")
      .text(substituirNomes(findItem["LocalizedNames"]["PT-BR"]));
    $("article[name=armor]").find("div.list_spells").children().remove();
    $("article[name=armor]")
      .find(".spells > button")
      .attr("style", `background-image: none;`);

    var spell_1 = 1;
    var spell_2 = 1;
    var spell_3 = 1;
    var spell_4 = 1;
    findItem["craftingspelllist"]["craftspell"].forEach((e) => {
      if (tag.indexOf("ARMOR_PLATE") == -1) {
        selectSpells.parent().find("span[name=spell_3]").fadeOut();
        if (e["uniquename"].indexOf("PASSIVE") == -1) {
          var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_1" numspell="${spell_1}">`;
          if (spell1 == spell_1) {
            selectSpells
              .children("span[name=spell_1]")
              .find("button")
              .attr(
                "style",
                `background-image: url("https://render.albiononline.com/v1/spell/${e["uniquename"]}");`
              )
              .attr("numSpell", spell_1);
          }
          spell_1++;
          selectSpells
            .children("span[name=spell_1]")
            .find("div.list_spells")
            .append(string);
        } else {
          var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_2" numspell="${spell_2}">`;
          if (spell2 == spell_2) {
            selectSpells
              .children("span[name=spell_2]")
              .find("button")
              .attr(
                "style",
                `background-image: url("https://render.albiononline.com/v1/spell/${e["uniquename"]}");`
              )
              .attr("numSpell", spell_2);
          }
          spell_2++;
          selectSpells
            .children("span[name=spell_2]")
            .find("div.list_spells")
            .append(string);
        }
      } else {
        selectSpells.parent().find("span[name=spell_3]").fadeIn();
        if (e["slots"] == "1") {
          var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_2" numspell="${spell_2}">`;
          if (spell2 == spell_2) {
            selectSpells
              .children("span[name=spell_2]")
              .find("button")
              .attr(
                "style",
                `background-image: url("https://render.albiononline.com/v1/spell/${e["uniquename"]}");`
              )
              .attr("numSpell", spell_2);
          }
          spell_2++;
          selectSpells
            .children("span[name=spell_2]")
            .find("div.list_spells")
            .append(string);
        } else if (e["slots"] == "2") {
          var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_3" numspell="${spell_3}">`;
          if (spell3 == spell_3) {
            selectSpells
              .children("span[name=spell_3]")
              .find("button")
              .attr(
                "style",
                `background-image: url("https://render.albiononline.com/v1/spell/${e["uniquename"]}");`
              )
              .attr("numSpell", spell_3);
          }
          spell_3++;
          selectSpells
            .children("span[name=spell_3]")
            .find("div.list_spells")
            .append(string);
        } else {
          var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_1" numspell="${spell_1}">`;
          if (spell1 == spell_1) {
            selectSpells
              .children("span[name=spell_1]")
              .find("button")
              .attr(
                "style",
                `background-image: url("https://render.albiononline.com/v1/spell/${e["uniquename"]}");`
              )
              .attr("numSpell", spell_1);
          }
          spell_1++;
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
        button.attr("numspell", $(this).attr("numspell"));
      }
    );
  }
  // -----------------------
  if (slot == "shoes") {
    let spellItem = $("article[name=shoes] > button.itemSelected");
    spellItem.attr("tag", tag);
    spellItem.attr(
      "style",
      `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
    );
    let findSlot = item.find((item) => item._id === slot);
    let findItem = findSlot["items"].find((item) => item._id === noenchanted[0]);

    var selectSpells = $(`article[name=${slot}] > .spellList`);
    selectSpells.find("span").attr("style", "display:block;");
    selectSpells
      .find("h5")
      .text(substituirNomes(findItem["LocalizedNames"]["PT-BR"]));
    $("article[name=shoes]").find("div.list_spells").children().remove();
    $("article[name=shoes]")
      .find(".spells > button")
      .attr("style", `background-image: none;`);

    var spell_1 = 1;
    var spell_2 = 1;
    var spell_3 = 1;
    var spell_4 = 1;
    findItem["craftingspelllist"]["craftspell"].forEach((e) => {
      if (e["uniquename"].indexOf("PASSIVE") == -1) {
        var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_1" numspell="${spell_1}">`;
        if (spell1 == spell_1) {
          selectSpells
            .children("span[name=spell_1]")
            .find("button")
            .attr(
              "style",
              `background-image: url("https://render.albiononline.com/v1/spell/${e["uniquename"]}");`
            )
            .attr("numSpell", spell_1);
        }
        spell_1++;
        selectSpells
          .children("span[name=spell_1]")
          .find("div.list_spells")
          .append(string);
      } else {
        var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_2" numspell="${spell_2}">`;
        if (spell2 == spell_2) {
          selectSpells
            .children("span[name=spell_2]")
            .find("button")
            .attr(
              "style",
              `background-image: url("https://render.albiononline.com/v1/spell/${e["uniquename"]}");`
            )
            .attr("numSpell", spell_1);
        }
        spell_2++;
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
        var numspell = $(this).attr("numspell");
        button.attr("numspell", numspell);
      }
    );
  }
  // -----------------------
  if (slot == "cape") {
    let spellItem = $(`article[name=${slot}] > button.itemSelected`);
    spellItem.attr("tag", tag);
    spellItem.attr(
      "style",
      `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
    );
    let findSlot = item.find((item) => item._id === slot);
    let findItem = findSlot["items"].find((item) => item._id === noenchanted[0]);
    $(`article[name=${slot}] > h5`).text(
      substituirNomes(findItem["LocalizedNames"]["PT-BR"])
    );
  }
  if (slot == "potion") {
    let spellItem = $(`article[name=${slot}] > button.itemSelected`);
    spellItem.attr("tag", tag);
    spellItem.attr(
      "style",
      `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
    );
    let findSlot = item.find((item) => item._id === slot);
    let findItem = findSlot["items"].find((item) => item._id === noenchanted[0]);
    $(`article[name=${slot}] > h5`).text(
      substituirNomes(findItem["LocalizedNames"]["PT-BR"])
    );
  }
  if (slot == "food") {
    let spellItem = $(`article[name=${slot}] > button.itemSelected`);
    spellItem.attr("tag", tag);
    spellItem.attr(
      "style",
      `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
    );
    let findSlot = item.find((item) => item._id === slot);
    let findItem = findSlot["items"].find((item) => item._id === noenchanted[0]);
    $(`article[name=${slot}] > h5`).text(
      substituirNomes(findItem["LocalizedNames"]["PT-BR"])
    );
  }
  if (slot == "offhand") {
    let spellItem = $(`article[name=${slot}] > button.itemSelected`);
    spellItem.attr("tag", tag);
    spellItem.attr(
      "style",
      `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
    );
    let findSlot = item.find((item) => item._id === slot);
    let findItem = findSlot["items"].find((item) => item._id === noenchanted[0]);
    $(`article[name=${slot}] > h5`).text(
      substituirNomes(findItem["LocalizedNames"]["PT-BR"])
    );
  }
};

$("button.close,.darkScreen").click(function (e) {
  $("#selectItem,.darkScreen").fadeOut();
});
$("button.save").click(function (e) {
  let slotItem = $("#selectItem").attr("slot");
  let slotNum = $("#selectItem").attr("num");
  let itemSelect = $("#selectItem > main > article > picture[select=true]");
  let enchanted = $("main > section > div.enchanted").attr('enchanted')
  let itemName = itemSelect.attr("name");
  let itemTwoHand = itemSelect.attr("twohand");
  if (slotItem == "all") {
    defineSwap(slotNum, `${itemName}@${enchanted}`);
  } else {
    defineItem(slotItem, `${itemName}@${enchanted}`, itemTwoHand);
  }
  $("#selectItem,.darkScreen").fadeOut();
});
$("div.enchanted > button").click(function (e) {
  $('div.enchanted').attr('enchanted',$(this).val())
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
onIcon = () => {
  $("picture.icon").toggle();
  var button = $("div[name=icon]>button");
  button.attr("stats", button.attr("stats") == "hide" ? "show" : "hide");
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
  var button = $("div[name=other]>button");
  button.attr("stats", button.attr("stats") == "hide" ? "show" : "hide");
};
onSubtract = () => {
  var buttons = $(".itemSelectSwap > button");
  buttons.last().remove();
  if (buttons.length - 1 == 0) {
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

function getUrlParameters(url) {
  var params = {};
  var parser = document.createElement("a");
  parser.href = url;
  var query = parser.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    params[pair[0]] = decodeURIComponent(pair[1]);
  }
  return params;
}

getUrlBuild = () => {
  var getParams = getUrlParameters(window.location.href);
  try { 
  $.map(getParams, function (elementOrValue, indexOrKey) {
    var a = elementOrValue.split("|");
    if (indexOrKey == "title") {
      $("textarea.title").val(elementOrValue);
    } else if (indexOrKey != "swap") {
      defineItem(indexOrKey, a[0], a[1], a[2], a[3], a[4]);
    } else {
      a.forEach(function (v, i) {
        onSum();
        defineSwap(`all_${i + 1}`, v);
      });
    }
  });
} catch (error) {
  u = 1
}
};

$("section#share >button#open").click(function (e) {
  var selectShare = $("section#share");
  if (selectShare.attr("name") == "close") {
    selectShare.attr("name", "open");
  } else {
    selectShare.attr("name", "close");
  }
});
$("section#share >button#go").click(function (e) {
  gerarLink();
});

gerarLink = () => {
  var linkBase = window.location.origin;
  var param = [];
  var skill = $("aside[name=skill] > article");
  param.push("title=" + encodeURIComponent($("textarea.title").val()));
  $.map($("aside[name=skill] > article"), function (e, i) {
    var temp = [];
    if ($(e).find("button.itemSelected").attr("tag") != undefined) {
      temp.push(
        $(e).attr("name") + "=" + $(e).find("button.itemSelected").attr("tag")
      );
      temp.push(
        $(e).find(".spellList > span[name=spell_1] > button").attr("numspell")
      );
      temp.push(
        $(e).find(".spellList > span[name=spell_2] > button").attr("numspell")
      );
      temp.push(
        $(e).find(".spellList > span[name=spell_3] > button").attr("numspell")
      );
      temp.push(
        $(e).find(".spellList > span[name=spell_4] > button").attr("numspell")
      );
      param.push(temp.join("|"));
    }
  });
  $.map($("aside[name=other] > article"), function (e, i) {
    var temp = [];
    if ($(e).find("button.itemSelected").attr("tag") != undefined) {
      name = $(e).attr("name")
      tag = $(e).find("button.itemSelected").attr("tag")
      temp.push(name);
      temp.push(tag);
      if(name != "offhand" && tag != ''){
        param.push(temp.join("="));
      }

    }
  });

  
  var temp = [];
  if ($("section#swap > .itemSelectSwap > button").length > 0) {
    $.map($("section#swap > .itemSelectSwap > button"), function (e, i) {
      temp.push($(e).attr("tag"));
    });
    param.push("swap=" + temp.join("|"));
  }

  $("section#share > input").val(
    linkBase + "/albion-build-maker/?" + param.join("&")
  );
};

// getUrlBuild()
$(document).ready(function() {
  $('#copyButton').click(function() {
    // Seleciona o input e copia seu valor para a área de transferência
    var inputText = $('#linkShare')[0];
    inputText.select();
    inputText.setSelectionRange(0, 99999)
    document.execCommand('copy');
  });
});
