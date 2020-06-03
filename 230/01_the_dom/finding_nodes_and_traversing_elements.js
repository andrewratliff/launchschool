let wordCount = 0;

const h2Elements = document.getElementsByTagName('h2');

Array.prototype.slice.call(h2Elements).forEach(element => {
  const words = element.textContent.split(' ');

  wordCount += words.length;
});

let contents = document.getElementById('toc');
contents = document.getElementsByClassName('toc');
contents = document.querySelector('#toc');

let links = links = document.querySelectorAll('.toc a');

for (let i = 0; i < links.length; i += 2) {
  links[i].style.color = 'green';
};

const thumbcaptions = document.querySelectorAll('.thumbcaption');

const captionText = [];

Array.prototype.slice.call(thumbcaptions).forEach(caption => {
  captionText.push(caption.textContent.trim());
});

let classifications = (function () {
  const keys = [
  'Kingdom',
  'Phylum',
  'Clade',
  'Class',
  'Order',
  'Suborder',
  'Family',
  'Genus',
  'Species'
];

const tds = document.querySelectorAll('table.biota td');
const classifications = {};

Array.prototype.slice.call(tds).forEach(td => {
  keys.forEach(key => {
    if (td.textContent.includes(key)) {
      classifications[key] = td.nextElementSibling.textContent;
    }
  })
});

return classifications;

})();
