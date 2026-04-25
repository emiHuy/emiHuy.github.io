
// ---- Container window loaders ----

// Load the "About" window
function loadAboutWindow(body) {
    const profile = content.about;
    body.appendChild(createHeader());
    body.appendChild(createEducation());
    body.appendChild(createInterests());
    body.appendChild(createLanguages());

    // Crate header section
    function createHeader() {
        const headerInfo = profile.header;
        const header = document.createElement('div');
        header.className = 'profile-header';

        // Create avatar image
        const avatar = document.createElement('div');
        avatar.className = 'avatar';
        avatar.innerHTML = `
            <svg width="65" height="65" viewBox="0 0 24 24" fill="none" stroke="rgb(133, 133, 133)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="8" r="4"/><path d="${headerInfo.avatar}"/>
            </svg>
        `;
        header.appendChild(avatar);

        // Add profile information
        const profileInfo = document.createElement('div');
        profileInfo.className = 'profile-info';
        profileInfo.innerHTML = `
            <div class="profile-name">${headerInfo.name}</div>
            <div class="profile-title">${headerInfo.description}</div>
        `;

        // Add city tag
        const cityTag = createTag(headerInfo.city);
        profileInfo.appendChild(cityTag);
        header.appendChild(profileInfo);

        return header;
    }

    // Create education section
    function createEducation() {
        const edu = profile.education;
        const section = document.createElement('section');
        section.appendChild(createLabel('Education'));

        const div = document.createElement('div');
        div.className = 'edu-item';
        div.innerHTML = `
            <div class="edu-degree">${edu.program}</div>
            <div class="edu-school">${edu.university}</div>
            <div class="edu-date">${edu.start} - ${edu.end ? edu.end : "Present"}</div>
        `
        section.appendChild(div);
        return section;
    }

    // Create interests section
    function createInterests() {
        const interests = profile.interests;
        const section = document.createElement('section');
        section.appendChild(createLabel('Interests'));
        section.appendChild(createTags(interests));
        return section;
    }

    // Create languages section
    function createLanguages() {
        const languages = profile.languages;
        const section = document.createElement('section');
        section.appendChild(createLabel('Languages'));

        let string = '<p> I can speak and understand ';
        let count = 0;
        for (const l of languages) {
            // Make the language accented
            string += `<span class="accented">${l.language}</span> (${l.level})`;
            count += 1;
            if (count === languages.length-1 && languages.length > 1) {
                string += ' and ';
            }
            else if (count !== languages.length) {
                string += ', ';
            }
        }
        string += '.</p>';
        const p = document.createElement('p');
        p.innerHTML = string;
        section.appendChild(p);
        return section;
    }  
}

// Load "Experience" window
function loadExperienceWindow(body) {
    for (const exp of content.experience) {
        body.appendChild(createExperience(exp));
    }

    // Create experience card
    function createExperience(exp) {
        const card = document.createElement('div');
        card.className = 'exp-card';
        card.innerHTML = `
            <div class="exp-top">
                <span class="exp-role">${exp.role}</span>
                <span class="exp-date">${exp.start} — ${exp.end ? exp.end : 'Present'}</span>
            </div>
            <div class="exp-company">${exp.company}</div>
            <ul class="exp-bullets">
            ${exp.description.map(b => `<li>${b}</li>`).join('')}
            </ul>
        `;
        card.appendChild(createTags(exp.tags));
        if (!exp.end) card.classList.add('current');
        return card;
    }
}

// Load "Projects" window
function loadProjectsWindow(body) {
    content.projects.forEach((project, index) => body.appendChild(createProjectCard(project, index)));

    // Create project card
    function createProjectCard(project, i) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="card-title-row">
                <span class="card-num">0${i+1}</span>
                <span class="card-title">${project.title}</span>
            </div>
            <div class="card-link">
            ${project.private
                ? '<span class="link-btn disabled">Private</span>'
                : `<a class="link-btn" href="${project.url}" target="_blank">View ↗</a>`}
            </div>
            <p class="card-desc">${project.description}</p>
        `;
        card.appendChild(createTags((project.features || []), 'card-features'));
        card.appendChild(createTags(project.tags || [], 'card-tools'));
        return card;
    }
}

// Load "Skills" window
function loadSkillsWindow(body) {
    const skills = content.skills;
    const categories = stringMap.skills;

    const div = document.createElement('div');
    div.className = 'skills';

    for (const key of Object.keys(skills)) {
        div.appendChild(createLabel(categories[key]));
        div.appendChild(createTags(skills[key]));
    }

    body.appendChild(div);
}

// Load "Contact" window
function loadContactWindow(body) {
    const contacts = content.contact;
    for (const c of contacts) {
        body.appendChild(createContactItem(c));
    }
    body.appendChild(createContactForm());

    // Create contact
    function createContactItem({ label, value, url, colour, svgPath }) {
        const div = document.createElement('div');
        div.className = 'contact-row';
        div.innerHTML = `
            <a href="${url}" target="_blank" class="contact-link">
                <svg class="contact-icon" viewBox="0 0 24 24">
                    <path d="${svgPath}" />
                </svg>
                <span class="contact-val">${value}</span>
            </a>
        `;
        return div;
    }

    // Create contact form
    function createContactForm() {
        const div = document.createElement('div');
        div.className = 'contact-form';
        div.innerHTML = `
            <p>Send me a message!</p>
            <div class="form-group">
                <input type="text" id="form-name" placeholder="Name" />
            </div>
            <div class="form-group">
                <input type="email" id="form-email" placeholder="Email" required/>
            </div>
            <div class="form-group">
                <textarea id="form-message" placeholder="Message" rows="7"></textarea>
            </div>
            <div class="form-footer">
                <span class="form-status" id="form-status"></span>
                <button id="form-submit">Send</button>
            </div>
        `;

        // Submit form to Web3Forms API
        div.querySelector('#form-submit').addEventListener('click', async () => {
            const from_name = 'My Portfolio Website';
            const subject = 'New Message';

            const name = div.querySelector('#form-name').value.trim();
            const email = div.querySelector('#form-email').value.trim();
            const message = div.querySelector('#form-message').value.trim();
            const status = div.querySelector('#form-status');
            const btn = div.querySelector('#form-submit');

            // Make sure all fields are filled
            if (!name || !email || !message) {
                status.textContent = 'Please fill in all fields.';
                status.classList.add('form-error');
                status.classList.remove('form-success');
                return;
            }

            btn.textContent = 'Sending...';
            btn.disabled = true;

            // Send data
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: '372c018c-489a-4e9a-b596-ed8bc237abae',
                    from_name, subject, name, email, message
                })
            });
            const data = await res.json();

            if (data.success) {
                // Indicate success and reset form values
                status.textContent = 'Message sent!';
                status.classList.remove('form-error');
                status.classList.add('form-success');
                btn.textContent = 'Send';
                btn.disabled = false;
                div.querySelector('#form-name').value = '';
                div.querySelector('#form-email').value = '';
                div.querySelector('#form-message').value = '';
            } else {
                // Indicate error
                status.textContent = 'Something went wrong. Try again.';
                status.classList.add('form-error');
                status.classList.remove('form-success');
                btn.textContent = 'Send';
                btn.disabled = false;
            }
        });

        return div;
    }
}

// === Reusable components ===

// Create tag
function createTag(tag) {
    const span = document.createElement('span');
    span.className = 'tag';
    span.textContent = tag;
    return span;
}

// Create multiple tags in the same container
function createTags(tags, extraClass='') {
    const div = document.createElement('div');
    div.className = 'row';
    if (extraClass) div.classList.add(extraClass);
    for (const t of tags) {
        div.appendChild(createTag(t));
    }
    return div;
}

// Crate label
function createLabel(label) {
    const div = document.createElement('div');
    div.className = 'label',
    div.textContent = label;
    return div;
}