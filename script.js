function addTask() {
    event.preventDefault();

   
    
    var Name = document.getElementById("name").value;
    var taskToName = document.getElementById("toname").value;
    var taskByName = document.getElementById("byname").value;
    var taskDescription = document.getElementById("tdesc").value;
    var taskDate = document.getElementById("tdate").value;
    var taskPriority = document.getElementById("priority").value;

    
    var taskElement = document.createElement("table");
    taskElement.className = "task";

    
    var taskContent = 
    `
    <tr>
    <th>Task </th>
    <th>Assigned To </th>
    <th>Assigned By </th>
    <th>Description </th>
    <th>Target Date </th>
    <th>Priority </th>
    </tr>
        <tr>
        <td>${Name} </td>
        <td>${taskToName}  </td>
        <td>${taskByName}  </td>
        <td rowspan="6">${taskDescription}</td>
        <td>${taskDate}  </td>
        <td>${taskPriority}  </td>
        
        <td><button class="delete-task">Done</button></td>
        </tr>
    `;

    taskElement.innerHTML = taskContent;


    var taskList = document.getElementById("task-list");
    taskList.appendChild(taskElement);


    document.getElementById("form").reset();

 
    var deleteButton = taskElement.getElementsByClassName("delete-task")[0];
    deleteButton.addEventListener("click", function() {
        taskList.removeChild(taskElement);
    });
}


document.getElementById("form").addEventListener("submit", addTask);