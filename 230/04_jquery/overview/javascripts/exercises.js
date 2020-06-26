// $(document).ready(() => {
//   console.log('');
// })

// $(window).on('load', () => {
//   console.log('window loaded');
// })

// $(() => {
//   console.log('blah');
// });

$(() => {
  const $content = $('#content');

  // getter
  // console.log($content.css('fontSize'));
  // setter
  // $content.css('fontSize', '8px');
  // console.log($content.css('fontSize'));

  // $content.css({
  //   fontSize: '16px',
  // })

  $('li').each(function() { console.log($(this).attr('data-id')) });
})
