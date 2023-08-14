const button = document.getElementById('btn');
const tasksWrapper = document.getElementById('tasks');


const tasks = [];

button.addEventListener('click', ()=>{
    tasksWrapper.innerHTML="";
    const input = document.getElementById('task').value;
    document.getElementById('task').value = "";

    const task = {
        taskTitle: input,
        isDone: false
    }

    tasks.push(task)


    tasks.forEach((task)=>{

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'task-wrapper');
        wrapper.innerHTML = `<div> ${task.taskTitle} </div>`;
        
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');

        wrapper.appendChild(checkbox);

        tasksWrapper.appendChild(wrapper)

    })

    console.log(tasks);
})