/* ===========================
   APP.JS - Main Application Logic
   =========================== */

// Get projects from localStorage or use embedded data
function getProjects() {
    const stored = localStorage.getItem('projectsData');
    return stored ? JSON.parse(stored) : projectsData;
}

// Get tag color class based on tag name
function getTagColorClass(tag) {
    const lowerTag = tag.toLowerCase();
    if (lowerTag.includes('ds')) return 'tag-ds';
    if (lowerTag.includes('dev') || lowerTag.includes('development')) return 'tag-dev';
    if (lowerTag.includes('qa') || lowerTag.includes('testing')) return 'tag-qa';
    if (lowerTag.includes('design')) return 'tag-design';
    return 'tag-default';
}

// Render projects on portfolio page
function renderProjects() {
    const container = document.getElementById('projectsContainer');
    if (!container) return;

    const projects = getProjects();
    container.innerHTML = '';

    projects.forEach(project => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-6';

        const image = project.images && project.images.length > 0 
            ? `<img src="${project.images[0]}" alt="${project.name}" class="project-card-image">`
            : `<div class="project-card-image">📦</div>`;

        const badges = `
            ${project.badge ? `<span class="badge">${project.badge}</span>` : ''}
            ${project.badge2 ? `<span class="badge">${project.badge2}</span>` : ''}
        `;

        col.innerHTML = `
            <div class="project-card" onclick="navigateToProject(${project.id})">
                ${image}
                <div class="project-card-body">
                    <h5 class="project-card-title">${project.name}</h5>
                    <div class="project-card-badges">${badges}</div>
                    <p class="project-card-description">${project.description}</p>
                    <div class="tags-container" style="margin-top: auto;">
                        ${project.tags.map(tag => `
                            <span class="tag-chip ${getTagColorClass(tag)}">${tag}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        container.appendChild(col);
    });
}

// Navigate to project detail page
function navigateToProject(projectId) {
    window.location.href = `project.html?id=${projectId}`;
}

// Render skills section
function renderSkills() {
    const container = document.getElementById('skillsContainer');
    if (!container) return;

    const projects = getProjects();
    const allSkills = new Set();

    projects.forEach(project => {
        project.tags.forEach(tag => allSkills.add(tag));
    });

    const skills = Array.from(allSkills).sort();
    container.innerHTML = '';

    skills.forEach(skill => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-3';
        col.innerHTML = `
            <div class="card border-0 bg-light h-100">
                <div class="card-body text-center">
                    <h6 class="card-title">${skill}</h6>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

// Admin Login Handler
function initAdminLogin() {
    const adminBtn = document.getElementById('adminBtn');
    if (!adminBtn) return;

    adminBtn.addEventListener('click', () => {
        const adminModal = new bootstrap.Modal(document.getElementById('adminModal'));
        adminModal.show();
    });

    const adminLoginBtn = document.getElementById('adminLoginBtn');
    if (adminLoginBtn) {
        adminLoginBtn.addEventListener('click', () => {
            const password = document.getElementById('adminPassword').value;
            if (password === 'admin123') {
                window.location.href = 'admin.html';
            } else {
                alert('Incorrect password');
                document.getElementById('adminPassword').value = '';
            }
        });

        // Allow Enter key to submit
        document.getElementById('adminPassword').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                adminLoginBtn.click();
            }
        });
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderSkills();
    initAdminLogin();

    // Handle hero section profile photo click
    const profilePhoto = document.getElementById('profilePhoto');
    if (profilePhoto) {
        profilePhoto.addEventListener('click', () => {
            // Could expand to full screen view here
            console.log('Profile photo clicked');
        });
    }
});
