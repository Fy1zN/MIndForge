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