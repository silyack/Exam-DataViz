let counter = 0;

function updateCounter() {
    document.getElementById('counter').innerText = counter;
}

function increase() {
    counter++;
    updateCounter();
}

function decrease() {
    counter--;
    updateCounter();
}

function reset() {
    counter = 0;
    updateCounter();
}

// Initial display
updateCounter();

// Sélection des boutons
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const resetBtn = document.getElementById('reset-btn');

// Attachement des événements de clic aux boutons
increaseBtn.addEventListener('click', increase);
decreaseBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);
