var todos = ["Buy New Turtle"];

window.setTimeout(function () {
    // put all of your JS code from the lecture here

    var input = prompt("What would you like to do?");

    while (input !== "quit") {
        //handle input
        if (input === "list") {
            listTodos();
        } else if (input === "new") {
            addTodo();
        } else if (input === "delete") {
            deleteTodo();
        }
        //ask again for new input
        input = prompt("What would you like to do?");
    }

    console.log("Ok, you quit the app");

    function deleteTodo() {
        //ask for index to be  deleted
        var index = prompt("Enter index of Todo to delete");
        //delete that todo
        //splice()
        todos.splice(index, 1);
        console.log("Deleted Todo");
    }

    function addTodo() {
        //ask for new todo
        var newTodo = prompt("Enter new todo");
        //add to todos array
        todos.push(newTodo);
        console.log("Added Todo");
    }

    function listTodos() {
        console.log("**********");
        todos.forEach(function (todo, i) {
            console.log(i + ": " + todo);
        });
        console.log("**********");
    }

}, 500);

