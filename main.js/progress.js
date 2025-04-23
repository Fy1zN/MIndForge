// 📊 Add subject to Progress Tracker with interactive slider
function addSubjectToProgress(subjectName) {
    const progressGrid = document.querySelector('.progress-grid');

    const progressItem = document.createElement('div');
    progressItem.classList.add('progress-item');

    progressItem.innerHTML = `
      <p>${subjectName} <span class="progress-percent">0%</span></p>
      <input type="range" min="0" max="100" value="0" class="progress-range" />
      <div class="bar">
        <div class="fill" style="width: 0%;"></div>
      </div>
    `;

    progressGrid.appendChild(progressItem);

    // 🎯 Attach event to slider
    const rangeInput = progressItem.querySelector('.progress-range');
    const fillBar = progressItem.querySelector('.fill');
    const percentText = progressItem.querySelector('.progress-percent');

    rangeInput.addEventListener('input', () => {
        const val = rangeInput.value;
        fillBar.style.width = `${val}%`;
        percentText.textContent = `${val}%`;
    });
}