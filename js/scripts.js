$(document).ready(function () {
  $("#list").sortable(); // Drag & drop

  $("#add").on("click", function () {
    let inputValue = $("#input").val().trim();
    if (inputValue === "") return;

    let li = $("<li></li>").text(inputValue);
    let deleteBtn = $('<button class="delete">X</button>');

    deleteBtn.on("click", function (e) {
      e.stopPropagation(); // Don't toggle "done"
      li.remove();
    });

    li.on("dblclick", function () {
      li.toggleClass("done");
    });

    li.append(deleteBtn);
    $("#list").append(li);
    $("#input").val("");
  });
});
