$(".item").click(function (e) {
  typeItem = $(this).attr("name");
  defineItem(typeItem, "T4_HEAD_PLATE_SET1", 4);
});

// defineItem = (slot, tag,ench =0) => {
//     const select = $(`.item[name=${slot}]`);
//     select.attr('style', `background-image: url("https://render.albiononline.com/v1/item/${tag}@${ench}");`);

// };
createItens = (slot = "head") => {
  $('datalist#suggestions > option').remove()
  item.forEach((e) => {
    if (e["_id"] == slot) {
      e["items"].forEach((item) => {
        string = `<picture name="${item['_id']}" language="${item['LocalizedNames']['PT-BR']}">
                  <img src="https://render.albiononline.com/v1/item/${item['_id']}"/>            
                  </picture>`
        $("#selectItem > main > article").append(string);
        $('datalist#suggestions').append(`<option value="${item['LocalizedNames']['PT-BR']}">`)
      });
    }
  });
  $("#selectItem > main > article > picture").click(function (e) {
    $("img.check").remove();
    $("picture[select=true]").attr("select", "false");
    $(this).attr("select", "true");
    $(this).append('<img src="/assets/check.svg" class="check">');
  });

  $("#itemSelect").on("input", function() {
    var searchText = $(this).val().toLowerCase();
    $("#selectItem > main > article > picture").each(function() {
      var languageTag = $(this).attr("language").toLowerCase();
      $(this).toggle(languageTag.includes(searchText));
    });
});

};

