"use-strict";

module.exports = {
  PRODUCT: (name) => `//div[@class="cart-items products"]//a[text()='${name}']`,
  QUANTITY: `//select[@name='QTY']/option[@value="1"]`,
};
