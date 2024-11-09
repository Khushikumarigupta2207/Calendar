document.addEventListener("DOMContentLoaded", () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    let currentDate = new Date();
  
    function renderCalendar() {
      const month = currentDate.getMonth();
      const year = currentDate.getFullYear();
  
      document.getElementById('month-year').textContent = `${monthNames[month]} ${year}`;
  
      const firstDay = new Date(year, month, 1).getDay();
      const lastDate = new Date(year, month + 1, 0).getDate();
  
      const daysContainer = document.getElementById('calendar-days');
      daysContainer.innerHTML = "";
  
      dayNames.forEach(day => {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day-name");
        dayElement.textContent = day;
        daysContainer.appendChild(dayElement);
      });
  
      for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        daysContainer.appendChild(emptyCell);
      }
  
      for (let date = 1; date <= lastDate; date++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        if (date === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
          dayElement.classList.add("today");
        }
        dayElement.textContent = date;
        daysContainer.appendChild(dayElement);
      }
    }
  
    function prevMonth() {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar();
    }
  
    function nextMonth() {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar();
    }
  
    renderCalendar();
  
    // Expose the navigation functions to the global scope
    window.prevMonth = prevMonth;
    window.nextMonth = nextMonth;
  });