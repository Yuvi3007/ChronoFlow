document.addEventListener('DOMContentLoaded', () => {
  const taskTable = document.getElementById('task-table');
  const tableBody = document.querySelector('#task-table tbody');
  const successMessage = document.getElementById('success-message');
  const clockAnimation = document.getElementById('clock-animation');
  const priorityBtn = document.getElementById('priority-btn');
  const priorityOptions = document.getElementById('priority-options');
  const timeBtn = document.getElementById('time-btn');
  const startDateBtn = document.getElementById('start-date-btn');
  const startDateInput = document.getElementById('start-date');
  const taskTimeInput = document.getElementById('task-time');
  const searchTask = document.getElementById('search-task');
  const filterPriority = document.getElementById('filter-priority');
  const filterStatus = document.getElementById('filter-status');
  let selectedPriority = '';

  // Hide priority options, date, and time inputs initially
  priorityOptions.style.display = 'none';
  startDateInput.style.display = 'none';
  taskTimeInput.style.display = 'none';

  // Disable Search and Filter initially
  searchTask.disabled = true;
  filterPriority.disabled = true;
  filterStatus.disabled = true;

  // Toggle priority options visibility
  priorityBtn.addEventListener('click', () => {
    priorityOptions.style.display = priorityOptions.style.display === 'block' ? 'none' : 'block';
  });

  // Set selected priority and update button text
  document.querySelectorAll('.priority-level').forEach(button => {
    button.addEventListener('click', () => {
      selectedPriority = button.dataset.priority;
      priorityBtn.textContent = button.textContent;
      priorityOptions.style.display = 'none';
    });
  });

  // Show date picker when "Select Start Date" is clicked
  startDateBtn.addEventListener('click', () => {
    startDateInput.style.display = 'block';
    startDateInput.focus();
  });

  // Show time picker when "Select Time" is clicked
  timeBtn.addEventListener('click', () => {
    taskTimeInput.style.display = 'block';
    taskTimeInput.focus();
  });

  // Add task to table
  document.getElementById('add-task-btn').addEventListener('click', () => {
    const requirements = document.getElementById('task-requirements').value;
    const startDate = startDateInput.value;
    const time = taskTimeInput.value;

    if (!requirements || !startDate || !time || !selectedPriority) {
      alert('Please fill in all fields before adding a task!');
      return;
    }

    // Create new row
    const taskRow = document.createElement('tr');
    taskRow.innerHTML = `
      <td>${requirements}</td>
      <td>${selectedPriority}</td>
      <td>${startDate}</td>
      <td>${time}</td>
      <td><button class="mark-completed-btn">Mark Completed</button></td>
      <td><button class="delete-btn">Delete</button></td>
    `;
    tableBody.appendChild(taskRow);

    // Show the table if it's the first task
    taskTable.style.display = 'table';

    // Display success message and clock animation
    successMessage.style.display = 'block';
    clockAnimation.style.display = 'block';
    setTimeout(() => {
      successMessage.style.display = 'none';
      clockAnimation.style.display = 'none';
    }, 2000);

    // Enable Search and Filter
    searchTask.disabled = false;
    filterPriority.disabled = false;
    filterStatus.disabled = false;

    // Reset form fields and variables
    document.getElementById('task-requirements').value = '';
    priorityBtn.textContent = 'Select Priority';
    selectedPriority = '';
    startDateInput.value = '';
    taskTimeInput.value = '';
    startDateInput.style.display = 'none';
    taskTimeInput.style.display = 'none';

    // Add event listener for marking tasks as completed
    taskRow.querySelector('.mark-completed-btn').addEventListener('click', () => {
      taskRow.style.backgroundColor = '#e7f7e5';
      taskRow.style.textDecoration = 'line-through';
      taskRow.querySelector('.mark-completed-btn').disabled = true;

      // Display congratulations message
      const congratulationsMessage = document.createElement('div');
      congratulationsMessage.textContent = "Congratulations, task is completed!!!";
      congratulationsMessage.classList.add('congratulations-message');
      document.querySelector('.task-manager-container').appendChild(congratulationsMessage);

      setTimeout(() => {
        congratulationsMessage.classList.add('fadeOut');
        setTimeout(() => congratulationsMessage.remove(), 500);
      }, 2000);

      // Show fireworks animation
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    });

    // Add event listener for deleting tasks
    taskRow.querySelector('.delete-btn').addEventListener('click', () => {
      taskRow.remove();
      if (tableBody.children.length === 0) {
        taskTable.style.display = 'none';
        // Disable Search and Filter when no tasks are present
        searchTask.disabled = true;
        filterPriority.disabled = true;
        filterStatus.disabled = true;
      }
    });
  });

  // Search and Filter functionality
  searchTask.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const rows = tableBody.querySelectorAll('tr');
    rows.forEach(row => {
      const taskName = row.querySelector('td').textContent.toLowerCase();
      row.style.display = taskName.includes(searchTerm) ? '' : 'none';
    });
  });

  filterPriority.addEventListener('change', (e) => {
    const selectedPriority = e.target.value;
    const rows = tableBody.querySelectorAll('tr');
    rows.forEach(row => {
      const rowPriority = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
      row.style.display = selectedPriority === '' || rowPriority === selectedPriority ? '' : 'none';
    });
  });

  filterStatus.addEventListener('change', (e) => {
    const status = e.target.value;
    const rows = tableBody.querySelectorAll('tr');
    rows.forEach(row => {
      const taskCompleted = row.style.textDecoration === 'line-through';
      row.style.display = (status === '' || 
                           (status === 'completed' && taskCompleted) ||
                           (status === 'not-completed' && !taskCompleted)) ? '' : 'none';
                        
    });
  });
});











