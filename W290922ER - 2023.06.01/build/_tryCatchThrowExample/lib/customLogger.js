const $log = document.getElementById("log");
const $stopResumeBtn = document.getElementById("pause-resume-btn");
let lastLog = Date.now();
let isStopped = false;
let queue = [];
let currentId = 1;
init();
function init() {
    updateButtonState(isStopped);
    $stopResumeBtn.addEventListener("click", () => {
        stopResumeLog(!isStopped);
    });
}
export function stopResumeLog(toState = !isStopped) {
    isStopped = toState;
    updateButtonState(isStopped);
}
function updateButtonState(isStopped) {
    if (!isStopped) {
        $stopResumeBtn.innerHTML = "PAUSE";
        $stopResumeBtn.classList.add("btn-warning");
        $stopResumeBtn.classList.remove("btn-success");
    }
    if (isStopped) {
        $stopResumeBtn.innerHTML = "RESUME (waiting 0)";
        $stopResumeBtn.classList.add("btn-success");
        $stopResumeBtn.classList.remove("btn-warning");
    }
}
function renderQueueLength() {
    $stopResumeBtn.innerHTML = `RESUME (waiting ${queue.length})`;
}
export function log(...data) {
    let currentLastLog = lastLog;
    lastLog = Date.now();
    const event = {
        id: currentId++,
        time: new Date(),
        data,
        passed: lastLog - currentLastLog,
    };
    queue.push(event);
    if (isStopped) {
        renderQueueLength();
        return;
    }
    emptyQueue();
}
function emptyQueue() {
    for (const event of queue) {
        $log.insertAdjacentHTML("afterbegin", renderLog(event));
    }
    queue = [];
}
function normalizeNumber(num) {
    return Math.floor(num / 10) * 10;
}
function renderLog({ id, time, data, passed }) {
    return `
    <div class="log-item mb-2 py-3 row">
        <span class="text-center log-time col-1 text-warning fw-bold">
            ${id}
        </span>
        <span class="text-center log-time col-2 text-primary fw-bold">
            ${time.toLocaleTimeString()}
        </span>
        <span class="text-center log-data col-7">${data
        .map((item) => `<span class="me-2">${item}</span>`)
        .join("")}</span>
        <span class="text-center log-passed col-2 text-danger fw-bold">
            +${normalizeNumber(passed)}ms
        </span>
    </div>
    `;
}
export function bgInfo(value) {
    return `<span class="bg-info">${value}</span>`;
}
export function bgSuccess(value) {
    return `<span class="bg-success text-white">${value}</span>`;
}
export function bgDanger(value) {
    return `<span class="bg-danger text-white">${value}</span>`;
}
export function bgWarning(value) {
    return `<span class="bg-warning">${value}</span>`;
}
log.bgDanger = bgDanger;
log.bgWarning = bgWarning;
log.bgSuccess = bgSuccess;
log.bgInfo = bgInfo;
