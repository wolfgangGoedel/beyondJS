function pipe3() {
  var fns = arguments;
  return function(x) {
    var acc = x;
    for (var i = 0; i < fns.length; i++) {
      acc = fns[i].call(null, acc);
    }
    return acc;
  };
}

const pipe6 = (...fns) => x => fns.reduce((acc, f) => f(acc), x);
