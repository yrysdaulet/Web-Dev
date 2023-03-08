function addItem(el,time) {
    if (el.value.trim() === '') {
        return;
    }
    let task = document.createElement('div');
    task.className = 'task';
    task.innerHTML = `
    <input type="checkbox" onclick="overline(this)" class="checkbox"></input>
    <input type="text" class="text" value="${el.value}" readonly>
    <div class="actions">
        <button class="delete" onclick="deleteItem(this)"><img src="https://icon-library.com/images/icon-delete/icon-delete-16.jpg" alt=""></button>
    </div>
    <div class="timer"></div>
    `;
    document.querySelector(".content").appendChild(task);
    // el.value = '';

    const timer = task.querySelector('.timer');

    const deadline = new Date();
    deadline.setMinutes(deadline.getMinutes() + 10);

    const timerInterval = setInterval(() => {
        const remainingTime = deadline.getTime() - new Date().getTime();

        if (remainingTime < 0) {
            task.style.backgroundColor = 'red';
        }

        if (remainingTime > 0) {
            const minutes = Math.floor(remainingTime / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
            timer.innerHTML = `${minutes}m ${seconds}s`;
        } else {
            timer.innerHTML = 'Time is up!';
            clearInterval(timerInterval);
        }
    }, 1000);
}


function deleteItem(btn) {
    const task = btn.closest('.task');
    document.querySelector(".content").removeChild(task);
}

function overline(el){
    el.closest('.task').classList.toggle('checked')
}