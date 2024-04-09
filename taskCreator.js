const taskList = document.getElementById('taskList');
export function taskCreator(item, uniqueId) {
    let card = document.createElement('div');
    card.setAttribute('class', 'card ');
    card.setAttribute('id', uniqueId);
    let container = document.createElement('div');
    container.setAttribute('class', 'completedContainer');
    let completedTask = document.createElement('input');
    completedTask.setAttribute('type', 'checkbox')
    completedTask.setAttribute('class', 'p-2 rounded-2 completedTask my-auto')
    completedTask.setAttribute('data-completed_item', uniqueId)
    container.appendChild(completedTask);
    let task = document.createElement('h4');
    task.innerHTML = item.task;
    task.setAttribute('class', 'task my-auto');
    container.append(task);
    card.appendChild(container);
    let deleteTask = document.createElement('button');
    deleteTask.setAttribute('data-delete_item', uniqueId);
    deleteTask.innerHTML = 'Delete';
    deleteTask.setAttribute('class', 'p-2 rounded-2 deleteTask')
    card.appendChild(deleteTask);
    taskList.appendChild(card);

    if (item.status === "completed") {
        completedTask.checked = true;
        task.style.textDecorationLine = "line-through";
    }
    else {
        task.style.textDecorationLine = "none";
    }

}