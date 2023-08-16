const button = document.getElementById('btn');
const tasksWrapper = document.getElementById('tasks');



let tasks = JSON.parse(localStorage.getItem("TASKS")) || [];

const onWrapperClick = (task) => {
  const filteredTasks = tasks.filter((filterTask) => {
    return filterTask.taskTitle !== task.taskTitle;
  });
  tasksWrapper.innerHTML = "";
  addTasksToScreen(filteredTasks);
  localStorage.setItem("TASKS", JSON.stringify(filteredTasks));
  tasks = filteredTasks;
};

const onCheckboxClick = (event, task) => {
  const index = tasks.findIndex((value) => value.taskTitle === task.taskTitle);
  tasks[index].isDone = !tasks[index].isDone;
  localStorage.setItem("TASKS", JSON.stringify(tasks));
  event.stopPropagation();
};

const addTaskToScreen = (task) => {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "task-wrapper");
  wrapper.innerHTML = "<div>" + task.taskTitle + "</div>";

  wrapper.addEventListener("click", (e) => {
    onWrapperClick(task);
  });

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  task.isDone && checkbox.setAttribute("checked", "");

  checkbox.addEventListener("click", (event) => {
    onCheckboxClick(event, task);
  });

  wrapper.appendChild(checkbox);

  tasksWrapper.appendChild(wrapper);
};

const addTasksToScreen = (screenTasks) => {
  screenTasks.forEach((task) => {
    addTaskToScreen(task);
  });
};

addTasksToScreen(tasks);

button.addEventListener("click", () => {
  tasksWrapper.innerHTML = "";
  const input = document.getElementById("task").value;
  document.getElementById("task").value = "";

  const task = {
    taskTitle: input,
    isDone: false,
  };
  tasks.push(task);
  addTasksToScreen(tasks);
  console.log(tasks);
  localStorage.setItem("TASKS", JSON.stringify(tasks));
});