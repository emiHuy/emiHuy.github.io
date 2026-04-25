const loaders = {
    about:      loadAboutWindow,
    projects:   loadProjectsWindow,
    skills:     loadSkillsWindow,
    experience: loadExperienceWindow,
    contact:    loadContactWindow,
}

// Open window
function openWindow(key) {
    const overlay = document.getElementById('overlay');
    const win = document.getElementById('window');
    const title = document.getElementById('window-title');
    const body = document.getElementById('window-body');

    // Update window title and reset the body
    title.textContent = stringMap.titles[key];
    body.innerHTML = '';
    // Load window
    loaders[key]?.(body);

    // Reset position to the center each time it opens
    win.style.position = 'fixed';
    win.style.left = `${(window.innerWidth  - win.offsetWidth)  / 2}px`;
    win.style.top = `${(window.innerHeight - win.offsetHeight) / 2}px`;

    // Make window visible
    overlay.classList.add('open');
}

// Close window
function closeWindow() {
    document.getElementById('overlay').classList.remove('open');
}

// Drag window by the header
function makeDraggable(win) {
    const header = win.querySelector('.window-header');
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    // Set to dragging when user applies mouse on header
    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        const rect = win.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        win.style.transition = 'none';
        header.style.cursor = 'grabbing';
    });

    // Update window position as user's mouse moves
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const winWidth = win.offsetWidth;
        const winHeight = win.offsetHeight;

        let newLeft = e.clientX - offsetX;
        let newTop = e.clientY - offsetY;

        const maxLeft = window.innerWidth - winWidth;
        const maxTop = window.innerHeight - winHeight;

        // Clamp within viewport
        newLeft = Math.max(0, Math.min(newLeft, maxLeft));
        newTop  = Math.max(0, Math.min(newTop, maxTop));

        // Set window's position
        win.style.left = `${newLeft}px`;
        win.style.top = `${newTop}px`;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        header.style.cursor = 'grab';
    });
}

// Close window every time overlay is clicked
function handleOverlayClick(e) {
  if (e.target === document.getElementById('overlay')) closeWindow();
}

// Update clock to current time
function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

makeDraggable(document.getElementById('window'));
updateClock();
setInterval(updateClock, 1000); // updates clock every second
