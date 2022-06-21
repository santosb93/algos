const throttle = (cb, t) => {
  let throttleTimer = false;
  return () => {
    if (throttleTimer) return;
    throttleTimer = true;
    cb();
    setTimeout(() => {
      throttleTimer = false;
    }, t);
  };
};

const cb = () => console.log('hi');
let test = throttle(cb, 1000);
console.log(test);
setInterval(test, 100);
