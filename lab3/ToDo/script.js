function addItem(el) {
    if (el.value.trim() === '') {
        // alert('Please enter a task.');
        return;
    }
    let task = document.createElement('div');
    task.className = 'task';
    task.innerHTML = `
    <input type="checkbox" onclick = "overline(this)" class="checkbox"></input>
    <input type="text" class="text" value="${el.value}" readonly>
    <div class="actions">
            <button class="delete" onclick="deleteItem(this)"><img src="https://icon-library.com/images/icon-delete/icon-delete-16.jpg"alt=""></button>
        </div>
    `;
    document.querySelector(".content").appendChild(task);
    el.value = '';
}

// function to delete a task
function deleteItem(btn) {
    const task = btn.closest('.task');
    document.querySelector(".content").removeChild(task);
}

// function to mark a task as completed
function overline(el){
    el.closest('.task').classList.toggle('checked')
}