$(() => {
  const $slideshow = $("#slideshow");
  const $nav = $slideshow.find("ul");

  $nav.on("click", "a", function(event) {
    event.preventDefault();

    const $li = $(event.currentTarget).closest("li");
    const idx = $li.index();

    $slideshow.find("figure").stop().filter(":visible").fadeOut(300);
    $slideshow.find("figure").eq(idx).delay(300).fadeIn(300);
    $nav.find(".active").removeClass("active");
    $li.addClass("active");
  });
});
