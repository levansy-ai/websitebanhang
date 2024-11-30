var user = document.getElementById("user").dataset.username || "AnonymousUser"; // Cần định nghĩa `user`
var updateBtns = document.getElementsByClassName("update-cart");
Array.from(updateBtns).forEach((button) => {
  button.addEventListener("click", function () {
    var productId = this.dataset.productId;
    var action = this.dataset.action;
    console.log("product.Id", productId, "action", action);
    console.log("user: ", user);
    if (user === "AnonymousUser") {
      console.log("user not logged");
    } else {
      updateUserOrder(productId, action);
    }
  });
});

function updateUserOrder(productId, action) {
  console.log("user logged in, success add");
  var url = "update_item/";
  var csrftoken = document.querySelector("[name=csrfmiddlewaretoken]").value; // Lấy `csrftoken` từ form
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrftoken,
    },
    body: JSON.stringify({ productId: productId, action: action }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log("data", data);
    })
    .catch((error) => {
      console.error("Fetch error: ", error);
    });
}
