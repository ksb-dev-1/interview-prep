function maxProfit(prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];

    let profit = prices[i] - minPrice;

    if (profit > maxProfit) maxProfit = profit;
  }
  return maxProfit;
}

const prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));
