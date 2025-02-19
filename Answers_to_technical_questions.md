
# Answers to Technical Questions

### Q1 - How long did you spend on the coding test?  
I spent around 8 hours on the coding test. This included planning the structure, coding the core functionalities, styling the UI, and testing to ensure everything worked smoothly.  
I also took some time to make the design clean and user-friendly.  

### Q2 - What was the most useful feature that was added to the latest version of your chosen language?  
One very useful JavaScript method is `forEach()`, which is used to iterate over arrays. It provides a cleaner and more readable alternative to traditional for loops. I have used it multiple times to iterate over loops.

```js
// ****************** below is the code snippet****************///
document.querySelectorAll('.priority-level').forEach(button => {
  button.addEventListener('click', () => {
    selectedPriority = button.dataset.priority;
    priorityBtn.textContent = button.textContent;
    priorityOptions.style.display = 'none';
  });
});
```

### Q3 - How would you track down a performance issue in production? Have you ever had to do this?  

1. **Monitoring and Logging:**  
   Start by checking application logs and monitoring dashboards for error spikes, slow response times, or resource exhaustion (like CPU or memory usage). Tools like New Relic, Datadog, or ELK Stack are commonly used for this purpose.

2. **Identifying the Bottleneck:**  
   - Use browser developer tools (like Chrome DevTools) to analyze network requests, JavaScript execution time, and rendering performance.  
   - Analyze server performance using tools like Node.js Performance Hooks or APM (Application Performance Monitoring) tools.

3. **Reproducing the Issue:**  
   If possible, replicate the issue in a staging environment under similar load conditions to narrow down the root cause. This helps in confirming whether it's related to server capacity, code inefficiency, or database bottlenecks.

4. **Profiling and Debugging:**  
   - Use profiling tools like Node.js Inspector or Chrome Profiler to analyze memory leaks, CPU usage, or slow function calls.  
   - Check database query performance using explain plans or database-specific profiling tools.

5. **Optimization and Testing:**  
   Once the bottleneck is identified:  
   - Optimize the code, database queries, or server configurations.  
   - Test the fixes in a staging environment before deploying them to production.  

### Q4 - If you had more time, what additional features or improvements would you consider adding to the task management application?  

1. **User Authentication and Authorization:**  
   Implement user authentication to allow multiple users to manage their tasks securely. This could be achieved using OAuth or JWT (JSON Web Tokens) for secure login and session management.

2. **Persistent Data Storage:**  
   Currently, tasks are stored using localStorage, which is limited to the browser. Integrating a backend with a database (like MongoDB or Firebase) would enable cloud storage, ensuring data persistence across devices and sessions.

3. **Recurring Tasks and Reminders:**  
   Add support for recurring tasks (e.g., daily, weekly) and set reminders using notifications or email alerts to keep users informed of upcoming deadlines.

4. **Collaboration and Sharing:**  
   Enable users to share tasks or collaborate with others by assigning tasks or sharing project boards, improving teamwork and productivity.

5. **Enhanced Search and Filters:**  
   Improve search and filter functionality by adding more criteria such as due dates, tags, and custom labels, making it easier for users to find specific tasks.

6. **Drag-and-Drop Interface:**  
   Implement a drag-and-drop feature to allow users to rearrange tasks easily, enhancing the user experience by making task management more intuitive and interactive.

7. **Progress Tracking and Analytics:**  
   Provide insights into task completion trends, time spent on tasks, and productivity analytics to help users manage their time more effectively.

8. **Mobile Responsiveness and PWA (Progressive Web App):**  
   Optimize the application for mobile devices and convert it into a Progressive Web App (PWA) for offline functionality and native app-like experience.

9. **Dark Mode and Custom Themes:**  
   Include a dark mode option and customizable themes to enhance user experience and accessibility.

10. **Accessibility Enhancements:**  
   Ensure the application is fully accessible by implementing ARIA (Accessible Rich Internet Applications) attributes and ensuring keyboard navigability for users with disabilities.
