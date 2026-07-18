export function calculateTotalSalesWithTax(products, tax) {
  let total = 0;

  for (let i = 0; i < products.length; i++) {
    total += products[i].price * products[i].quantity;
  }
  total += (total / 100) * tax;
  return total;
}
