var todos = [];

var input = prompt("What you like to do for today");
while(input !== "quit")
{
    if(input === "list")   
    {
        listtodos();

    }
    else if(input === "new")
    {
       newtodos();

    }
    else if(input === "delete")
    {
       deletetodos(); 
    }
    input = prompt("What you like to do for today");
    
}
console.log("OK,TATA BYE BYE KATAM");

function listtodos(){
    console.log("****************")
    todos.forEach(function(todos , i ) {
        console.log(i + ":- " + todos);  
    });

    console.log("****************")
    
}
function newtodos(){
    var newToDo = prompt("Enter new todo");
    todos.push(newToDo);
    console.log("Added Todo")
}
function deletetodos()
{
    var index = prompt("Enter index of todo to delete")
        todos.splice(index,1);
        console.log("Deleted Todo");

}