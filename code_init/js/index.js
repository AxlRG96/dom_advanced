let $cart = document.querySelector("#cart tbody");
let $calc = document.getElementById("calc");

function updateSubtot(product) {
  // Iteration 1.1
  //console.log(product)
  let price = parseFloat(product.querySelector(".pu span").textContent);
  let qty = parseFloat(product.querySelector(".qty input").value);
  let subtotal = price * qty;
  console.log("Subtotal= ", subtotal);
  product.querySelector(".subtot span").innerHTML = subtotal;
  return subtotal;
}

function calcAll() {
  // Iteration 1.2
  let allProducts = Array.from(document.querySelectorAll(".product"));
  //console.log(allProducts)
  let total = 0;
  for (numProduct in allProducts) {
    total = updateSubtot(allProducts[numProduct]) + total;
  }
  document.querySelector("h2 span").innerHTML = total;
  console.log("Total = ", total);
}

$calc.onclick = calcAll;
