/* ===========================
   ADMIN.JS - Admin Panel Logic
   =========================== */

let projectsData = [];
let selectedImageFiles = [];
let editingProjectId = null;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

// Check admin access
function checkAdminAccess() {
    const isAdminLoggedIn = sessionStorage.getItem('adminLoggedIn');
    if (!isAdminLoggedIn) {
        window.location.href = 'index.html';
    }
}

// Load projects from localStorage
function loadProjects() {
    const stored = localStorage.getItem('projectsData');
    projectsData = stored ? JSON.parse(stored) : projectsData;
}

// Save projects to localStorage
function saveProjects() {
    localStorage.setItem('projectsData', JSON.stringify(projectsData));
}

// Render projects list
function renderProjectsList() {
    const container = document.getElementById('projectsList');
    container.innerHTML = '';

    if (projectsData.length === 0) {
        container.innerHTML = '<p class="text-muted">No projects yet. Add your first project!</p>';
        return;
    }

    projectsData.forEach(project => {
        const item = document.createElement('div');
        item.className = 'admin-project-item';
        item.innerHTML = `
            <div class="admin-project-info flex-grow-1">
                <h6 class="mb-1">${project.name}</h6>
                <small class="text-muted">${project.description}</small>
                <small class="d-block mt-1">
                    Tags: ${project.tags.join(', ') || 'None'}
                </small>
                <small class="d-block text-muted">
                    Images: ${project.images ? project.images.length : 0}
                </small>
            </div>
            <div class="admin-actions">
                <button class="btn btn-sm btn-warning" onclick="editProject(${project.id})">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteProject(${project.id})">Delete</button>
            </div>
        `;
        container.appendChild(item);
    });
}

// Open project form
function openProjectForm() {
    editingProjectId = null;
    selectedImageFiles = [];
    document.getElementById('projectForm').reset();
    document.getElementById('formTitle').textContent = 'Add New Project';
    document.getElementById('projectId').value = '';
    document.getElementById('imagePreview').innerHTML = '';
    
    const modal = new bootstrap.Modal(document.getElementById('projectFormModal'));
    modal.show();
}

// Edit project
function editProject(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    editingProjectId = projectId;
    selectedImageFiles = project.images || [];

    document.getElementById('projectId').value = project.id;
    document.getElementById('projectName').value = project.name;
    document.getElementById('projectDescription').value = project.description;
    document.getElementById('projectLongDescription').value = project.longDescription || '';
    document.getElementById('projectLink').value = project.link;
    document.getElementById('projectBadge').value = project.badge || '';
    document.getElementById('projectBadge2').value = project.badge2 || '';
    document.getElementById('projectTags').value = project.tags ? project.tags.join(', ') : '';

    // Show existing images
    renderImagePreview();

    document.getElementById('formTitle').textContent = 'Edit Project';
    const modal = new bootstrap.Modal(document.getElementById('projectFormModal'));
    modal.show();
}

// Delete project
function deleteProject(projectId) {
    if (confirm('Are you sure you want to delete this project?')) {
        projectsData = projectsData.filter(p => p.id !== projectId);
        saveProjects();
        renderProjectsList();
    }
}

// Handle image file selection
document.getElementById('projectImages').addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    
    files.forEach(file => {
        if (file.size > MAX_FILE_SIZE) {
            alert(`File ${file.name} is too large (max 5MB)`);
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            // Store as data URL for demo purposes
            selectedImageFiles.push({
                name: file.name,
                path: event.target.result
            });
            renderImagePreview();
        };
        reader.readAsDataURL(file);
    });

    // Clear input
    e.target.value = '';
});

// Render image preview
function renderImagePreview() {
    const container = document.getElementById('imagePreview');
    container.innerHTML = '';

    if (selectedImageFiles.length === 0) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'grid';

    selectedImageFiles.forEach((file, index) => {
        const item = document.createElement('div');
        item.className = 'image-preview-item';
        
        const imageSrc = file.path || file;
        
        item.innerHTML = `
            <img src="${imageSrc}" alt="Preview">
            <button type="button" class="remove-btn" onclick="removeImage(${index})">✕</button>
        `;
        
        container.appendChild(item);
    });
}

// Remove image from preview
function removeImage(index) {
    selectedImageFiles.splice(index, 1);
    renderImagePreview();
}

// Save project
function saveProject() {
    const name = document.getElementById('projectName').value.trim();
    const description = document.getElementById('projectDescription').value.trim();
    const link = document.getElementById('projectLink').value.trim();
    const tags = document.getElementById('projectTags').value.trim().split(',').map(t => t.trim()).filter(t => t);

    if (!name || !description || !link) {
        alert('Please fill in all required fields');
        return;
    }

    if (selectedImageFiles.length === 0) {
        alert('Please select at least one image');
        return;
    }

    const projectData = {
        id: editingProjectId || Date.now(),
        name: name,
        description: description,
        longDescription: document.getElementById('projectLongDescription').value.trim(),
        link: link,
        badge: document.getElementById('projectBadge').value || null,
        badge2: document.getElementById('projectBadge2').value || null,
        tags: tags,
        images: selectedImageFiles.map(f => typeof f === 'string' ? f : f.path)
    };

    if (editingProjectId) {
        // Update existing project
        const index = projectsData.findIndex(p => p.id === editingProjectId);
        if (index !== -1) {
            projectsData[index] = projectData;
        }
    } else {
        // Add new project
        projectsData.push(projectData);
    }

    saveProjects();
    renderProjectsList();

    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('projectFormModal'));
    modal.hide();

    alert('Project saved successfully!');
}

// Upload profile photo
function uploadProfilePhoto() {
    const input = document.getElementById('profilePhotoInput');
    const files = input.files;

    if (files.length === 0) {
        alert('Please select a photo');
        return;
    }

    const file = files[0];
    if (file.size > MAX_FILE_SIZE) {
        alert('File is too large (max 5MB)');
        return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
        const photoData = event.target.result;
        localStorage.setItem('profilePhoto', photoData);

        // Update preview
        const img = document.getElementById('profilePhotoImg');
        img.src = photoData;
        img.style.display = 'block';
        document.getElementById('profilePhotoPlaceholder').style.display = 'none';

        alert('Profile photo updated!');
        input.value = '';
    };
    reader.readAsDataURL(file);
}

// Logout
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        sessionStorage.removeItem('adminLoggedIn');
        window.location.href = 'index.html';
    }
}

// Load profile photo if exists
function loadProfilePhoto() {
    const photoData = localStorage.getItem('profilePhoto');
    if (photoData) {
        const img = document.getElementById('profilePhotoImg');
        img.src = photoData;
        img.style.display = 'block';
        document.getElementById('profilePhotoPlaceholder').style.display = 'none';
    }
}

// Initialize admin page
document.addEventListener('DOMContentLoaded', () => {
    // Redirect to index if not logged in
    // This is a simple check - in production, use proper authentication
    const password = prompt('Enter admin password:');
    if (password !== 'admin123') {
        window.location.href = 'index.html';
        return;
    }

    sessionStorage.setItem('adminLoggedIn', 'true');

    loadProjects();
    renderProjectsList();
    loadProfilePhoto();
});

// Listen for changes in other tabs/windows
window.addEventListener('storage', () => {
    loadProjects();
    renderProjectsList();
});
