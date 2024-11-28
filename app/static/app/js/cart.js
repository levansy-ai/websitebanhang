var updateBtns = document.getElementsByClassName("update-cart");
for (i = 0; i < updateBtns.length; i++) {
  updateBtns[i].addEventListener("click", function () {
    var productId = this.dataset.productId;
    var action = this.dataset.action;
    console.log("product.Id", productId, "action", action);
    console.log("user: ", user);
    if (user === "AnonymousUser") {
      console.log("user not logged in");
    } else {
      console.log("user logged in, success add");
    }
  });
}
