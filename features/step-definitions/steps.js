const { Given, When, Then } = require("@wdio/cucumber-framework");

const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");
const HomePage = require("../pageobjects/homePage");
const EyecarePage = require("../pageobjects/eyeCarePage");
const productPage = require("../pageobjects/productPage");
const cartPage = require("../pageobjects/cartPage");

const pages = {
  login: LoginPage,
};

Given(/^I open the Estee Lauder page$/, async () => {
  await LoginPage.open();
});

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//   await LoginPage.login(username, password);
// });

When(/^I hover over skincare$/, async () => {
  let skincare = await $(HomePage.SKINCARE);
  await skincare.moveTo();
});

Then(/^I can see Eyecare under By Category section$/, async () => {
  let eyecare = await $(HomePage.EYECARE);
  await eyecare.waitForExist({
    timeout: 5000,
    timeoutMsg: `Eyecare product not found`,
  });
});

Then(/^I click on Eyecare$/, async () => {
  let eyecare = await $(HomePage.EYECARE);
  await eyecare.waitForExist({
    timeout: 5000,
    timeoutMsg: `Eyecare product not found`,
  });
  await eyecare.click();
});

Then(/^I can see (.+) product on the page$/, async (product) => {
  let revitalizing = await $(EyecarePage[product]);
  console.log(EyecarePage[product]);
  await revitalizing.waitForExist({
    timeout: 10000,
    timeoutMsg: `revitalizing product not found`,
  });
});
Then(/^I click on eyecare (.+) product$/, async (product) => {
  let revitalizing = await $(EyecarePage[product]);

  await revitalizing.waitForExist({
    timeout: 10000,
    timeoutMsg: `revitalizing product not found`,
  });
  await revitalizing.scrollIntoView({ block: "center" });
  await revitalizing.click();
});
Then(/^I click on add to cart$/, async () => {
  let addToCart = await $(productPage.ADD_TO_BAG);

  await addToCart.click();
});

Then(/^I verify the cart pop has the same product$/, async () => {
  let CartPopup = await $(productPage.CART_POPUP);

  await CartPopup.waitForExist({
    timeout: 5000,
    timeoutMsg: "cart pop up details mismatch",
  });
});

Then(/^I verify the cart pop has the same product$/, async () => {
  let CartPopup = await $(productPage.CART_POPUP);

  await CartPopup.waitForExist({
    timeout: 5000,
    timeoutMsg: "cart pop up details mismatch",
  });
});

Then(/^I click on cart icon$/, async () => {
  let cartIcon = await $(productPage.CART_ICON);
  await cartIcon.click();
});

Then(/^I can see the (.+) product$/, async (name) => {
  let productName = await $(cartPage.PRODUCT(name));
  await productName.waitForExist({
    timeout: 5000,
    timeoutMsg: "product details mismatch",
  });
  await expect(productName).toHaveTextContaining(name);
});

Then(/^I can see the quantity as (.+)$/, async (quantity) => {
  let item_quantity = await $(cartPage.QUANTITY);
  await expect(item_quantity).toHaveTextContaining("");
});
