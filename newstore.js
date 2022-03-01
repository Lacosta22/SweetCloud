// Example cart array (typical data structure)
let cart = [
    {
        id: 1,
        name: "Product 1",
        quantity: 1
    },
    {
        id: 2,
        name: "Product 2",
        quantity: 2
    }
]

// Function to handle updates
const update_cart = ( id, quantity, name ) => {
    let item = cart.find( item => item.id === id )
    // Product is already in cart, need to increment
    if ( item ) { 
        item.quantity = item.quantity + quantity
    }
    // Product is not in cart, need to add it
    else {
        cart.push({
            id,
            name,
            quantity
        })
    }
}

// Update a product in the cart
update_cart(1, 2, "Product 1")
console.log(cart)

// Add a new product to the cart
update_cart(3, 2, "Product 3")
console.log(cart)

window.addEventListener("load", resetForm, false);

"use strict";

function clearCookies() {
   var cookieString = document.cookie;
   var cookieArray = cookieString.split("; ");
   var expiresDate = new Date();
   expiresDate.setDate(expiresDate.getDate() - 7);
   for (var i = 0; i < cookieArray.length; i++) {
      document.cookie = cookieArray[i] + "; expires=" + expiresDate.toUTCString();
   }
}

if (window.addEventListener) {
   window.addEventListener("load", clearCookies, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", clearCookies);
}
