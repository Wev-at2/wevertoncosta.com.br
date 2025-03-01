export function menuScroll() {
    $(document).ready(function () {
        $('a[href^="#"]').on("click", function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            if ($target.length) {
                $("html, body")
                    .stop()
                    .animate(
                        {
                            scrollTop: $target.offset().top,
                        },
                        900,
                        "swing",
                        function () {
                            window.location.hash = target;
                        }
                    );
            }
        });
    });

    $(".scroll").on("click", function (e) {
        e.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top,
            },
            1000
        );
    });

    $(window).scroll(function () {
        var sticky = $(".sticky"),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass("fixed");
        else sticky.removeClass("fixed");
    });
}
