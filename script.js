$(document).ready(function () {
  let cursor = $(".cursor");
  let cursorContainer = $(".cursor-container");

  $(document).on("mousemove", function (e) {
    let scrollY = window.scrollY || window.pageYOffset;
    cursor.css({
      top: e.clientY + scrollY + "px",
      left: e.clientX + "px",
    });

    let bubble = $("<div class='bubble'></div>");
    bubble.css({
      top: e.clientY + scrollY + "px",
      left: e.clientX + "px",
    });

    cursorContainer.append(bubble);

    // Remove bubble after animation completes
    bubble.on("animationend", function () {
      $(this).remove();
    });
  });

  $(document).on("click", function (e) {
    let scrollY = window.scrollY || window.pageYOffset;
    let clickBubble = $("<div class='bubble'></div>");
    clickBubble.css({
      top: e.clientY + scrollY + "px",
      left: e.clientX + "px",
      width: "40px",
      height: "40px",
    });

    // Remove click bubble after animation completes
    clickBubble.on("animationend", function () {
      $(this).remove();
    });
  });
});