function delayLog() {
  for (var i = 0; i <= 10; i += 1) {
    setTimeout((function(i) {
      return function() {
        console.log(i);
      }
    })(i), i * 1000)}
}

function delayLog() {
  for (var i = 0; i <= 10; i += 1) {
    setTimeout(console.log, i * 1000, i)
  }
}
delayLog();
