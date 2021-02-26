//variables to do the exercise.
const productCost = 32000;
const productSellingPrice = 88000;

class profitCalculator {
  constructor(productCost) {
    this.totalcost = this.getTotalCostValue(productCost);
  }
  getTotalCostValue(productCost) {
    return productCost * 1.2;
  }
  getProfitOrLossUnit(productSellingPrice) {
    return productSellingPrice - this.totalcost;
  }

  getTotalProfitOrLoss(productSellingPrice, howMany) {
    return this.getProfitOrLossUnit(productSellingPrice) * howMany;
  }
}

const ProfitCar = new profitCalculator(productCost);

console.log(`preço do carro é R$: ${ProfitCar.getTotalProfitOrLoss(88000, 1000)}`);
