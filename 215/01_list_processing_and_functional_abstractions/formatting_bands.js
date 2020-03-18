let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

let capitalizeString = string => {
  return string.
    split(' ').
    map(word => word.charAt(0).toUpperCase() + word.slice(1)).
    join(' ');
};

let removePeriods = string => {
  const regex = /\./gi;
  return string.replace(regex, '');
};

let formattedName = name => removePeriods(capitalizeString(name));

let processBands = bands => {
  return bands.map(band => {
    return {
      name: formattedName(band.name),
      country: 'Canada',
      active: band.active,
    }
  });
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]
