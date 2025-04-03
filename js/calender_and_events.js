document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.getElementById("calendar");
    const eventList = document.getElementById("event-list");
  
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
  
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    daysOfWeek.forEach(day => {
      const dayHeader = document.createElement("div");
      dayHeader.className = "day-name";
      dayHeader.innerText = day;
      calendar.appendChild(dayHeader);
    });
  
    const events = [
      { date: "2025-04-05", title: "Friendly Match vs MMU", time: "5 PM", location: "APU Main Court" },
      { date: "2025-04-10", title: "Training Session", time: "6 PM", location: "Court 2" },
      { date: "2025-04-18", title: "Team Building BBQ", time: "7 PM", location: "APU Rooftop" }
    ];
  
    const eventMap = {};
    events.forEach(e => {
      eventMap[e.date] = e;
    });
  
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
    for (let i = 0; i < firstDay; i++) {
      const empty = document.createElement("div");
      calendar.appendChild(empty);
    }
  
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const day = document.createElement("div");
      day.className = "calendar-day";
      if (eventMap[dateStr]) {
        day.classList.add("has-event");
      }
  
      if (
        d === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear()
      ) {
        day.classList.add("today");
      }
  
      const dateNumber = document.createElement("div");
      dateNumber.className = "date-number";
      dateNumber.innerText = d;
      day.appendChild(dateNumber);
  
      if (eventMap[dateStr]) {
        const expandedInfo = document.createElement("div");
        expandedInfo.className = "event-preview";
        expandedInfo.innerHTML = `
          <strong>${eventMap[dateStr].title}</strong><br>
          ${eventMap[dateStr].time}<br>
          ${eventMap[dateStr].location}
        `;
        expandedInfo.style.display = "none";
        day.appendChild(expandedInfo);
  
        day.addEventListener("click", () => {
          const allPreviews = document.querySelectorAll(".event-preview");
          allPreviews.forEach(pre => (pre.style.display = "none"));
  
          expandedInfo.style.display = "block";
        });
      }
  
      calendar.appendChild(day);
    }
  
    // Populate Event List
    events.forEach(e => {
      const item = document.createElement("li");
      item.innerHTML = `<strong>${e.title}</strong><br>${e.date} at ${e.time} – ${e.location}`;
      eventList.appendChild(item);
    });
  });