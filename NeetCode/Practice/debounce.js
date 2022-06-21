const debounce = (cb, t) => {
  let debounceTimer = null;
  return () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      cb();
    }, t);
  };
};

const cb = () => console.log('hi');
let test = debounce(cb, 1000);

const repeat = setInterval(() => {
  test();
}, 200);

setTimeout(() => {
  clearInterval(repeat);
}, 1000);
