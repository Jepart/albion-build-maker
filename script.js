// $(".item").click(function (e) {
//   typeItem = $(this).attr("name");
//   defineItem(typeItem, "T4_HEAD_PLATE_SET1", 4);
// });

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

    let spellItem = $("article[name=mainhand] > button.itemSelected");
    spellItem.attr(
      "style",
      `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
    );
    let findSlot = item.find((item) => item._id === slot);
    let findItem = findSlot["items"].find((item) => item._id === tag);

    var selectSpells = $("article[name=mainhand] > span");

    selectSpells.attr("style", "display:block;");
    $("article[name=mainhand]").find('div.list_spells').children().remove();
    $("article[name=mainhand]").find(".spells > button").attr("style", `background-image: none;`);
    findItem["craftingspelllist"]["craftspell"].forEach((e) => {
      if (e["slots"] == "1") {
        var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_1">`;
        selectSpells
          .parent()
          .find("span[name=spell_1] > div.list_spells")
          .append(string);
      } else if (e["slots"] == "2") {
        var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_2">`;
        selectSpells
          .parent()
          .find("span[name=spell_2] > div.list_spells")
          .append(string);
      } else if (e["slots"] == "3") {
        $(`article[name=mainhand] > span > button.spell_3`).attr(
          "style",
          `background-image: url("https://render.albiononline.com/v1/spell/${e["uniquename"]}");`
        );
      } else {
        var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_4">`;
        selectSpells
          .parent()
          .find("span[name=spell_4] > div.list_spells")
          .append(string);
      }
    });
    $("article[name=mainhand] > span > .list_spells > img").click(function (e) {
      var button = $(
        `article[name=mainhand] > span > button.${$(this).attr("spells")}`
      );
      console.log(button);
      var img = $(this).attr("src");
      button.attr("style", `background-image: url("${img}");`);
    });
  }
  if (slot == "offhand") {
    if (select.attr("twohand") == "true") {
      $(`.item[name=mainhand]`).attr("style", `background-image: none);`);
    }
  }
  // -----------------------
  if (slot == "head") {
    let spellItem = $("article[name=head] > button.itemSelected");
    spellItem.attr(
      "style",
      `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
    );
    let findSlot = item.find((item) => item._id === slot);
    let findItem = findSlot["items"].find((item) => item._id === tag);

    var selectSpells = $("article[name=head] > span");

    selectSpells.attr("style", "display:block;");
    $("article[name=head]").find('div.list_spells').children().remove();
    $("article[name=head]").find(".spells > button").attr("style", `background-image: none;`);
    findItem["craftingspelllist"]["craftspell"].forEach((e) => {
      if (e["uniquename"].indexOf("PASSIVE") == -1) {
        var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_1">`;
        console.log(selectSpells
          .parent());
        selectSpells
          .parent()
          .find("span[name=spell_1] > div.list_spells")
          .append(string);
      } else {
        var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_2">`;
        selectSpells
          .parent()
          .find("span[name=spell_2] > div.list_spells")
          .append(string);
      }
    });
    $("article[name=head] > span > .list_spells > img").click(function (e) {
      var button = $(
        `article[name=head] > span > button.${$(this).attr("spells")}`
      );
      var img = $(this).attr("src");
      button.attr("style", `background-image: url("${img}");`);
    });
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

    var selectSpells = $("article[name=armor] > span");

    selectSpells.attr("style", "display:block;");
    $("article[name=armor]").find('div.list_spells').children().remove();
    $("article[name=armor]").find(".spells > button").attr("style", `background-image: none;`);
    findItem["craftingspelllist"]["craftspell"].forEach((e) => {
      if (e["slots"] == "1") {
        var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_2">`;
        selectSpells
          .parent()
          .find("span[name=spell_2] > div.list_spells")
          .append(string);
      } else if (e["slots"] == "2") {
        var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_3">`;
        selectSpells
          .parent()
          .find("span[name=spell_3] > div.list_spells")
          .append(string);
      }  else {
        var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_1">`;
        selectSpells
          .parent()
          .find("span[name=spell_1] > div.list_spells")
          .append(string);
      }
    });
    $("article[name=armor] > span > .list_spells > img").click(function (e) {
      var button = $(
        `article[name=armor] > span > button.${$(this).attr("spells")}`
      );
      console.log(button);
      var img = $(this).attr("src");
      button.attr("style", `background-image: url("${img}");`);
    });
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

    var selectSpells = $("article[name=shoes] > span");

    selectSpells.attr("style", "display:block;");
    $("article[name=shoes]").find('div.list_spells').children().remove();
    $("article[name=shoes]").find(".spells > button").attr("style", `background-image: none;`);
    findItem["craftingspelllist"]["craftspell"].forEach((e) => {
      if (e["uniquename"].indexOf("PASSIVE") == -1) {
        var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_1">`;
        console.log(selectSpells
          .parent());
        selectSpells
          .parent()
          .find("span[name=spell_1] > div.list_spells")
          .append(string);
      } else {
        var string = `<img src="https://render.albiononline.com/v1/spell/${e["uniquename"]}" spells="spell_2">`;
        selectSpells
          .parent()
          .find("span[name=spell_2] > div.list_spells")
          .append(string);
      }
    });
    $("article[name=shoes] > span > .list_spells > img").click(function (e) {
      var button = $(
        `article[name=shoes] > span > button.${$(this).attr("spells")}`
      );
      var img = $(this).attr("src");
      button.attr("style", `background-image: url("${img}");`);
    });
  }
};

$("button.close,.darkScreen").click(function (e) {
  $("#selectItem,.darkScreen").fadeOut();
});
$("button.save").click(function (e) {
  let slotItem = $("#selectItem").attr("slot");
  let itemSelect = $("#selectItem > main > article > picture[select=true]");
  let itemName = itemSelect.attr("name");
  let itemTwoHand = itemSelect.attr("twohand");
  defineItem(slotItem, itemName, itemTwoHand);
  $("#selectItem,.darkScreen").fadeOut();
});
createItens = (slot = "mainhand") => {
  $(
    "datalist#suggestions > option,#selectItem > main > article>picture"
  ).remove();
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
  createItens($(this).attr("name"));
});
