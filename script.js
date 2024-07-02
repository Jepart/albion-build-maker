// $(".item").click(function (e) {
//   typeItem = $(this).attr("name");
//   defineItem(typeItem, "T4_HEAD_PLATE_SET1", 4);
// });

defineItem = (slot, tag, twohand = 'false') => {
  const select = $(`.item[name=${slot}]`);
  select.attr(
    "style",
    `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
  );
  if (slot == "mainhand") {
    let offhand = $(`.item[name=offhand]`);
    offhand.attr('twohand',twohand)
    if(twohand == 'true'){
      offhand.attr(
        "style",
        `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
      );
    }
    let spellItem = $('article[name=mainhand] > button.itemSelected')
    spellItem.attr(
      "style",
      `background-image: url("https://render.albiononline.com/v1/item/${tag}");`
    );
    let findSlot = item.find(item => item._id === slot)
    let findItem = findSlot['items'].find(item => item._id === tag)
    
  }
  if (slot == "offhand") {
    if (select.attr('twohand') == 'true'){
      $(`.item[name=mainhand]`).attr(
        "style",
        `background-image: none);`
      );
    }
  }
};

$("button.close,.darkScreen").click(function (e) {
  $("#selectItem,.darkScreen").fadeOut();
});
$("button.save").click(function (e) {
  let slotItem = $("#selectItem").attr("slot");
  let itemSelect = $("#selectItem > main > article > picture[select=true]")
  let itemName = itemSelect.attr("name");
  let itemTwoHand = itemSelect.attr("twohand");
  defineItem(slotItem, itemName,itemTwoHand);
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
        let twohand = (slot == 'mainhand')?item['twohanded']:false
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
