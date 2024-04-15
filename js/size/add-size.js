function postSize(size) {
  fetch("http://127.0.0.1:5000/size/", {
    method: "POST",
    body: JSON.stringify(size),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => res.json())
    .then((res) => showNotification());
}

let sizeForm = $("#size-form");
sizeForm.submit((event) => {
  let size = getSizeData();
  postSize(size);

  event.preventDefault();
  event.currentTarget.reset();
});

function getSizeData() {
  return {
    name: $("input[name='name']").val(),
    price: $("input[name='price']").val(),
  };
}

function showNotification() {
  let sizeAlert = $("#size-alert");
  sizeAlert.toggle();
  setTimeout(() => sizeAlert.toggle(), 5000);
}
