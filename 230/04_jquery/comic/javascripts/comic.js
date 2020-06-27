$(() => {
  const $blinds = $("[id^=blind");
  const delay = 1500;
  const speed = 250;

  function startAnimation() {
    $blinds.each(function(i) {
      const $blind = $blinds.eq(i)
      $blind.delay(delay * i + speed).animate({
        top: "+=" + $blind.height(),
        height: 0,
      }, speed);
    });
  }

  $('a').on('click', event => {
    event.preventDefault();
    $blinds.finish();
    $blinds.removeAttr('style');
    startAnimation();
  })

  startAnimation();
});
