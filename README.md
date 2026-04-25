# emiHuy's Portfolio
A minimal, interactive personal portfolio website built, with vanilla HTML, CSS, and JavaScript, to showcase my experience, projects, skills, and journey as a CS student.

**Live link:** https://emihuy.github.io

## Features
 
- **Icon grid navigation** — click icons to open modal windows for About, Experience, Projects, Skills, and Contact
- **Draggable windows** — each window can be repositioned by dragging its header
- **Live clock** — displays current local time in the bottom bar
- **Contact form** — integrated with [Web3Forms](https://web3forms.com) for serverless form submission
- **Data-driven rendering** — all content is defined in `data.js` and rendered dynamically

## Project Structure
 
```
├── index.html      # HTML structure and icon grid
├── styles.css      # All styling and CSS variables
├── main.js         # Window open/close, dragging, clock logic
├── window.js       # Window content loaders and reusable components
└── data.js         # Site content (profile, experience, projects, skills, contact)
```

## Tech Stack
 
- HTML5 / CSS3 / Vanilla JavaScript
- No frameworks or build tools
- Web3Forms (contact form API)