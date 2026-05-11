/* ===========================
   PROJECT-DETAIL.JS - Project Detail Page Logic
   =========================== */

let currentImageIndex = 0;
let currentProject = null;

// Get URL parameters
function getUrlParameter(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

// Get projects from localStorage
function getProjects() {
    const stored = localStorage.getItem('projectsData');
    return stored ? JSON.parse(stored) : projectsData;
}

// Get tag color class
function getTagColorClass(tag) {
    const lowerTag = tag.toLowerCase();
    if (lowerTag.includes('ds')) return 'tag-ds';
    if (lowerTag.includes('dev') || lowerTag.includes('development')) return 'tag-dev';
    if (lowerTag.includes('qa') || lowerTag.includes('testing')) return 'tag-qa';
    if (lowerTag.includes('design')) return 'tag-design';
    return 'tag-default';
}

// Load and render project details
function loadProjectDetail() {
    const projectId = parseInt(getUrlParameter('id'));
    const projects = getProjects();
    const project = projects.find(p => p.id === projectId);

    if (!project) {
        document.body.innerHTML = '<div class="alert alert-danger m-5">Project not found</div>';
        return;
    }

    currentProject = project;
    currentImageIndex = 0;

    // Update title and badges
    document.getElementById('projectTitle').textContent = project.name;

    const badgesContainer = document.getElementById('badgesContainer');
    badgesContainer.innerHTML = '';
    if (project.badge) {
        const badgeEl = document.createElement('span');
        badgeEl.className = 'project-badge me-2';
        badgeEl.textContent = project.badge;
        badgesContainer.appendChild(badgeEl);
    }
    if (project.badge2) {
        const badgeEl = document.createElement('span');
        badgeEl.className = 'project-badge';
        badgeEl.textContent = project.badge2;
        badgesContainer.appendChild(badgeEl);
    }

    // Update descriptions
    document.getElementById('projectDescription').textContent = project.description;
    document.getElementById('projectLongDescription').textContent = project.longDescription || project.description;

    // Update link
    document.getElementById('visitLink').href = project.link;

    // Render tags
    const tagsContainer = document.getElementById('tagsContainer');
    tagsContainer.innerHTML = '';
    project.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = `tag-chip ${getTagColorClass(tag)}`;
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });

    // Render carousel
    renderCarousel();
    initCarouselControls();
}

// Render image carousel
function renderCarousel() {
    if (!currentProject || !currentProject.images || currentProject.images.length === 0) {
        document.getElementById('carouselContainer').style.display = 'none';
        return;
    }

    const carouselImages = document.getElementById('imageCarousel');
    carouselImages.innerHTML = '';

    currentProject.images.forEach((imagePath, index) => {
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = `${currentProject.name} - Image ${index + 1}`;
        img.style.display = index === currentImageIndex ? 'block' : 'none';
        img.style.animation = 'fadeIn 0.3s ease-in-out';
        carouselImages.appendChild(img);
    });

    // Render dots
    const dotsContainer = document.getElementById('dotsContainer');
    dotsContainer.innerHTML = '';

    currentProject.images.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `dot ${index === currentImageIndex ? 'active' : ''}`;
        dot.onclick = () => goToImage(index);
        dotsContainer.appendChild(dot);
    });

    // Hide controls if only one image
    if (currentProject.images.length <= 1) {
        document.getElementById('prevBtn').style.display = 'none';
        document.getElementById('nextBtn').style.display = 'none';
    }
}

// Initialize carousel controls
function initCarouselControls() {
    document.getElementById('prevBtn').addEventListener('click', prevImage);
    document.getElementById('nextBtn').addEventListener('click', nextImage);
}

// Navigation functions
function prevImage() {
    if (currentProject && currentProject.images) {
        currentImageIndex = (currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length;
        renderCarousel();
    }
}

function nextImage() {
    if (currentProject && currentProject.images) {
        currentImageIndex = (currentImageIndex + 1) % currentProject.images.length;
        renderCarousel();
    }
}

function goToImage(index) {
    currentImageIndex = index;
    renderCarousel();
}

// Share project
function shareProject() {
    if (navigator.share) {
        navigator.share({
            title: currentProject.name,
            text: currentProject.description,
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Project link copied to clipboard!');
        });
    }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadProjectDetail);
