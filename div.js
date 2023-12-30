$(document).ready(function () {
    let cursor = $(".cursor");
    let cursorContainer = $(".cursor-container");

    $(document).on("mousemove", function (e) {
        cursor.css({
            top: e.clientY + "px",
            left: e.clientX + "px",
        });

        let bubble = $("<div class='bubble'></div>");
        bubble.css({
            top: e.clientY + "px",
            left: e.clientX + "px",
        });

        cursorContainer.append(bubble);

        // Remove bubble after animation completes
        bubble.on("animationend", function () {
            $(this).remove();
        });
    });

    $(document).on("click", function (e) {
        // Perform actions when the user clicks on the screen
        // For example, open a modal, navigate to a page, etc.

        // Create a larger burst for the click event
        let clickBubble = $("<div class='bubble'></div>");
        clickBubble.css({
            top: e.clientY + "px",
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
