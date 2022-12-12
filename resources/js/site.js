import checkout from "./vendor/shopify/checkout";
import cart, { setCartCount } from "./vendor/shopify/cart";
import productForm from "./vendor/shopify/products";

new checkout();
new setCartCount();
new productForm();
new cart();
