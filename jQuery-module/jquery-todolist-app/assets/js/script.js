// Check Off Specific To-do's by clicking
$("ul").on("click", "li", function (e) {
    $(this).toggleClass("completed");
});

// Click on X to delete To-do item
$("ul").on("click", "span", function (e) {
    $(this).parent().fadeOut(100, function () {
        $(this).remove();
    });
    event.stopPropagation;
});

$("input[type='text'").keypress(function (e) {
    if (e.which === 13) {
        // grabbing new to -do text from input
        var todoText = ($(this).val());
        // clear input field
        $(this).val("");
        // create new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt fa-fw'></i></span> " + todoText + "</li>");
    }
})

$("#addTodo").click(function (e) {
    $("input[type='text'").fadeToggle();
});