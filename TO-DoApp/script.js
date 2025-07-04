let task = document.getElementById("task-box") 
        let button = document.querySelector('.ad-button')  // Fix: सही method
        let tasks = document.getElementById('task')

        button.addEventListener('click', () => {
            const value = task.value;
            if (value.trim() !== '') {  // Fix: Empty check
                tasks.textContent = value;
                task.value = '';  // Fix: Input clear
            } else {
                alert('Please enter a task!');
            }
        });

        // Bonus: Enter key support
        task.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                button.click();
            }
        });