function hidden() {
  let input = document
    .getElementById("todo")
    .addEventListener("click", function (e) {
      const container = e.target.parentNode;
      console.log(container);
    });
}
hidden();
