$(".item").click(function (e) {
  typeItem = $(this).attr("name");
  defineItem(typeItem, "T4_HEAD_PLATE_SET1", 4);
});

// defineItem = (slot, tag,ench =0) => {
//     const select = $(`.item[name=${slot}]`);
//     select.attr('style', `background-image: url("https://render.albiononline.com/v1/item/${tag}@${ench}");`);

// };
$('button.close,.darkScreen').click(function (e) { 
  $('#selectItem,.darkScreen').fadeOut()
});
$('button.save').click(function (e) { 
  console.log($('#selectItem').attr('slot'));
});
createItens = (slot = "mainhand") => {

  $('datalist#suggestions > option,#selectItem > main > article>picture').remove()
  $('#selectItem').attr('slot',slot)
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
    $(this).append('<img src="https://www.svgrepo.com/show/404946/check-mark-button.svg" class="check">');
  });

  $("#itemSelect").on("input", function() {
    var searchText = $(this).val().toLowerCase();
    $("#selectItem > main > article > picture").each(function() {
      var languageTag = $(this).attr("language").toLowerCase();
      $(this).toggle(languageTag.includes(searchText));
    });
  });
  $('#selectItem,.darkScreen').fadeIn()

};

