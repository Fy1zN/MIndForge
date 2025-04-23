document.addEventListener("DOMContentLoaded", () => {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    const dayIndex = day === 0 ? null : day; // Skip Sunday
    let timeLabel = "";

    if (hour < 12) {
        timeLabel = "Morning";
    } else if (hour < 17) {
        timeLabel = "Afternoon";
    } else {
        timeLabel = "Evening";
    }

    const allSlots = document.querySelectorAll(".timetable-grid .slot");

    if (dayIndex) {
        // Highlight current time row + current day column
        allSlots.forEach((slot, index) => {
            const row = Math.floor(index / 7);
            const col = index % 7;

            const isTimeMatch = slot.textContent.trim() === timeLabel;
            const isDayCol = row > 0 && col === dayIndex;

            if (isTimeMatch) {
                slot.classList.add("highlight-time");
            }

            if (isDayCol && row >= 1 && row <= 3) {
                slot.classList.add("highlight-now");
            }
        });
    }
});