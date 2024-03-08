(() => {
  const total = (prices: number[]): number => {
    let sum = 0;

    prices.forEach(element => {
      sum += element;
    });

    return sum;
  }
})();
