export function readMore(elemento) {
  var leiamais_limit = 100;

  $(".leiamais")
    .each(function () {
      var html = $(this).html();
      if (html.length > leiamais_limit)
        $(this).html(
          html.substring(0, leiamais_limit) +
            '<a href="#" class="leiamais-btn">... [leia mais]</a><span class="leiamais-tail">' +
            html.substring(leiamais_limit) +
            "</span>"
        );
    })
    .on("click", ".leiamais-btn", function () {
      $(this).hide().siblings(".leiamais-tail").show();
    });
}
