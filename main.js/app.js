// 🌗 Dark Mode Toggle with Emoji Swap
const toggleBtn = document.getElementById('darkModeToggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Toggle icon emoji
    toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '🌞';
});
// add subject and update in progress bar and tt
document.getElementById('addSubject').addEventListener('click', () => {
    const input = document.getElementById('subjectInput');
    const value = input.value.trim();
    const error = document.getElementById('subjectError');

    if (value !== "") {
        // Add to subject list
        const li = document.createElement('li');
        li.textContent = `📘 ${value}`;
        document.getElementById('subjectList').appendChild(li);

        // Add to progress tracker
        const progressGrid = document.querySelector('.progress-grid');
        const progressItem = document.createElement('div');
        progressItem.classList.add('progress-item');
        progressItem.innerHTML = `
        <p>${value} ❌</p>
        <div class="bar">
          <div class="fill" style="width: 0%;"></div>
        </div>
      `;
        progressGrid.appendChild(progressItem);

        // Add to timetable (fill first available empty slot)
        const slots = document.querySelectorAll('.slot');
        for (let i = 0; i < slots.length; i++) {
            if (slots[i].textContent.trim() === '—') {
                slots[i].textContent = value;
                break;
            }
        }

        input.value = "";
        error.style.display = "none";
    } else {
        error.style.display = "block";
        setTimeout(() => {
            error.style.display = "none";
        }, 2000);
    }
});

// 💬 Daily Quote Fetch + Refresh
function loadQuote() {
    const quoteEl = document.getElementById('quote');
    const loaderEl = document.getElementById('quoteLoader');
    loaderEl.style.display = 'inline';
    quoteEl.style.opacity = 0.5;
    fetch('https://zenquotes.io/api/random')
        .then(res => res.json())
        .then(data => {
            quoteEl.textContent = `"${data[0].q}" – ${data[0].a}`;
        })
        .catch(() => {
            quoteEl.textContent = "drink beer save water";
        })
        .finally(() => {
            loaderEl.style.display = 'none';
            quoteEl.style.opacity = 1;
        });
}

document.addEventListener('DOMContentLoaded', loadQuote);
document.getElementById('refreshQuote').addEventListener('click', loadQuote);

// Add upcoming deadlines
document.addEventListener('DOMContentLoaded', () => {
    const deadlines = [
        { task: "Computer Science Assignment", date: "April 30" },
        { task: "Maths Quiz", date: "May 3" },
        { task: "English Essay Submission", date: "May 5" },
        { task: "Physics Lab Report", date: "May 7" }
    ];

    const deadlineList = document.querySelector('.deadlines ul');
    deadlineList.innerHTML = "";

    deadlines.forEach(d => {
        const li = document.createElement('li');
        li.textContent = `📌 ${d.task} - ${d.date}`;
        deadlineList.appendChild(li);
    });
});