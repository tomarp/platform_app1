function timerTemplate() {
    return `
        <div class="timer-container">
            <svg class="timer-svg" width="150" height="150">
                <circle class="timer-circle-bg" cx="75" cy="75" r="70"></circle>
                <circle class="timer-circle" cx="75" cy="75" r="70"></circle>
            </svg>
            <div class="timer-text" id="timer">0s</div>
        </div>
    `;
}

const pageTimers = {
    acclimation: 180
    survey1: 150
    baseline: 300,
    task1: 20,
    task2: 60,
    survey2_1: 240,
    survey2_2: 240
};

function getTimerValue(page) {
    return pageTimers[page] || 60; // Default to 60 seconds if not found
}

