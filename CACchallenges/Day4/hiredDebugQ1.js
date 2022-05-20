const solution = (prices, trades) => {
  const sharesHeld = [];
  let profit = 0;
  for (trade of trades) {
    const isPurchase = trade[1] > 0;
    const sharesTraded = trade[1];
    const price = prices[trade[0]];

    for (var i = 0; i < sharesTraded.length; i++) {
      if (isPurchase) {
        sharesHeld.push([price, sharesTraded]);
      } else {
        profit = (price - sharesHeld.shift()) * sharesTraded;
        console.log('profit', profit);
      }
    }
  }

  return profit;
};

console.log(
  solution(
    [10.25, 11, 10.75, 11.5],
    [
      [0, 10],
      [1, -5],
      [2, 10],
      [3, -15],
    ]
  )
);
