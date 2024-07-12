document.addEventListener('DOMContentLoaded', () => {
    const addTodoButton = document.getElementById('add-todo');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const crybanancatPopup = document.getElementById('crybanancat-popup');
    const crybanancatSound = document.getElementById('crybanancat-sound');
    const chipichapaPopup = document.getElementById('chipichapa-popup');
    const chipichapaSound = document.getElementById('chipichapa-sound');

    addTodoButton.addEventListener('click', addTodo);

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') return;

        const todoItem = document.createElement('li');
        const todoTextSpan = document.createElement('span');
        todoTextSpan.textContent = todoText;
        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.addEventListener('click', markTodoDone);

        todoItem.appendChild(todoTextSpan);
        todoItem.appendChild(doneButton);
        todoList.appendChild(todoItem);

        todoInput.value = '';
        showPopup(crybanancatPopup, crybanancatSound);
    }

    function markTodoDone(event) {
        const todoItem = event.target.parentElement;
        todoItem.remove();
        showPopup(chipichapaPopup, chipichapaSound);
    }

    function showPopup(popup, sound) {
        popup.style.display = 'block';
        sound.play();
        popup.style.animation = 'revolve 3s linear infinite';
        setTimeout(() => {
            popup.style.display = 'none';
            popup.style.animation = ''; // Reset animation
        }, 3000);
    }
});
