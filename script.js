function addNewToDo()
{
    let task = document.getElementById('new-todo').value;

    const data = {
        "description": task,
        "done": false
    };

    postData('', data).then(response => response.json())
        .then(data => { 
            showTask(data);
        }) 
        .catch(error => {console.log(error)});
}

function getAllTasks()
{
    getData('').then(response => response.json())
        .then(data => { 
            data.forEach(task => {
                showTask(task);
            });
        }) 
        .catch(error => {console.log(error)});
}

function markDone(id)
{
    const data = {
        "done": true
    };

    putData(id, data).then(response => response.json())
        .then(data => { 
            showTask(data);
        }) 
        .catch(error => {console.log(error)});
}

function deleteTask(id)
{
    deleteData(id)
        .then(data => { 
            var elem = document.getElementById(id);
            elem.parentNode.removeChild(elem);
        }) 
        .catch(error => {console.log(error)});
}

function showTask(task) 
{
    // I want to show done tasks at the end of the list
    var elem = document.getElementById(task['_id']);
    if (elem) {
        elem.parentNode.removeChild(elem);
    }

    let ul = document.getElementById('tasks');
    let li = document.createElement("li");
    li.setAttribute("id", task['_id']);

    let strike = '';
    let doneBtn = ' <button onclick="markDone(\''+task['_id']+'\')" style="background:green;color:white;">Done!</button>';
    if (task['done'] === true){
        strike = '<s>';
        doneBtn = '';
    }

    li.innerHTML = strike + task['description'] + doneBtn +' <button onclick="deleteTask(\''+task['_id']+'\')" style="background:red; color:white;">DELETE</button>';
    ul.appendChild(li)
}