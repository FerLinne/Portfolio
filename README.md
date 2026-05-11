# Portfolio Website

A modern, responsive portfolio website with project showcase, admin panel, and image carousel. Fully editable through GitHub or the admin panel.

## Features

**Core Features:**
- Responsive design (mobile-first approach with Bootstrap 5)
- Project showcase with image carousel
- Detailed project pages
- Skills extraction from project tags
- Smooth animations and transitions
- Google Fonts (DM Sans + DM Mono)
- Modern color palette and UI

**Admin Panel:**
- Add/edit/delete projects
- Multi-image upload per project
- Profile photo management
- All changes saved to browser localStorage

**Responsive Layout:**
- Works on all devices (mobile, tablet, desktop)
- Bootstrap 5 grid system
- Optimized images and lazy loading
- Touch-friendly controls

## Using Your Portfolio

### Add or Edit Projects

**Method 1: Direct GitHub Editing (Recommended)**

1. Go to your repository on GitHub
2. Open `index.html`
3. Click the pencil icon to edit
4. Find the `const projectsData = [...]` section
5. Add or edit projects in the array:

```javascript
{
    id: 3,
    name: "Your Project Name",
    description: "Short description",
    longDescription: "Longer detailed description",
    tags: ["HTML", "CSS", "JavaScript"],
    badge: "Dev",
    badge2: "UI/UX",
    link: "https://...",
    images: ["images/project-1.png", "images/project-2.png"]
}
```

6. Commit changes → Website updates live in seconds!

### Upload Images

1. Go to your GitHub repository
2. Navigate to the `images/` folder
3. Click "Add file" → "Upload files"
4. Drag and drop images or select from your computer
5. Commit the changes
6. Update image paths in your project data

### Update Profile Information

In `index.html`, find the hero section and edit:

```html
<h1 class="display-4 fw-bold mb-3">Your Name</h1>
<p class="lead text-muted mb-4">Your Title | Your Tagline</p>
```

Update contact links:

```html
<a href="mailto:your.email@example.com" class="contact-link">Email</a>
<a href="https://github.com/yourprofile" target="_blank" class="contact-link">GitHub</a>
```

## Customization

### Change Colors

Edit the color variables in `css/style.css`:

```css
:root {
    --bg: #f9f8f5;        /* Background */
    --text: #111111;      /* Text color */
    --muted: #888888;     /* Secondary text */
    --card: #ffffff;      /* Card background */
    --border: #e5e3de;    /* Border color */
    
    --tag-ds: #ede9fe;       /* DS tag background */
    --tag-dev: #e6fcf5;      /* Dev tag background */
    --tag-qa: #fff4e6;       /* QA tag background */
    --tag-design: #fce7f3;   /* Design tag background */
}
```

### Change Fonts

Currently using **DM Sans** (body) and **DM Mono** (code/tags). To change:

1. Edit the Google Fonts import in `index.html` `<head>`
2. Update CSS font-family declarations in `css/style.css`

### Add Dark Mode

Add a toggle button and use CSS variables:

```css
body.dark-mode {
    --bg: #1a1a1a;
    --text: #ffffff;
    --card: #2d2d2d;
    /* etc */
}
```

## Project Data Structure

Each project object contains:

```javascript
{
    id: 1,                  // Unique number
    name: "Project Name",
    description: "One-line summary",
    longDescription: "Detailed description for detail page",
    tags: ["Tag1", "Tag2"], // Technology tags
    badge: "Dev",           // Category badge (optional)
    badge2: "UI/UX",        // Secondary badge (optional)
    link: "https://...",    // Project URL
    images: ["images/..."]  // Array of image paths
}
```

## Image Paths

Use relative paths for local images:

```
"images/project-1.png"
"images/profile.jpg"
```

Or external URLs:

```
"https://cdn.example.com/image.png"
"https://raw.githubusercontent.com/USERNAME/REPO/main/images/project-1.png"
```

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Compress images before uploading (use TinyPNG, ImageOptim)
2. **Lazy Loading**: Images lazy load automatically with `loading="lazy"`
3. **CDN**: Bootstrap and Google Fonts loaded from CDN
4. **Caching**: GitHub Pages automatically caches assets

## Troubleshooting

**Images not loading?**
- Verify image paths are correct relative to repository
- Use lowercase filenames without spaces
- Check that images are in `images/` folder
- Use GitHub raw links if relative paths don't work

**Admin panel not working?**
- Clear browser localStorage: `localStorage.clear()` in console
- Reload page
- Make sure JavaScript is enabled

**Carousel not working?**
- Check browser console (F12) for JavaScript errors
- Verify image paths exist
- Try different browser
