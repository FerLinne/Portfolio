# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Host it free on GitHub Pages and edit your projects directly through the browser.

## Features

✨ **Core Features:**
- Responsive design (mobile-first approach with Bootstrap 5)
- Project showcase with image carousel
- Detailed project pages
- Skills extraction from project tags
- Smooth animations and transitions
- Google Fonts (DM Sans + DM Mono)
- Modern color palette and UI

🔐 **Admin Panel (Password Protected):**
- Password: `admin123`
- Add/edit/delete projects
- Multi-image upload per project
- Profile photo management
- All changes saved to browser localStorage
- Easy direct GitHub file editing for permanent changes

📱 **Responsive Layout:**
- Works on all devices (mobile, tablet, desktop)
- Bootstrap 5 grid system
- Optimized images and lazy loading
- Touch-friendly controls

## Quick Start

### 1. Local Development

#### Option A: Using VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html` → "Open with Live Server"
3. Website opens at `http://localhost:5500`

#### Option B: Using Python
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```
Then visit `http://localhost:8000`

#### Option C: Using Node.js
```bash
npx http-server .
```

### 2. GitHub Pages Deployment

#### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Create new repository: `username.github.io` (or `portfolio`)
3. Make it public

#### Step 2: Push Code to GitHub
```bash
cd Portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

#### Step 3: Enable GitHub Pages
1. Go to repository Settings
2. Scroll to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Branch: `main`, Folder: `/ (root)`
5. Click Save

#### Step 4: Your site is live!
- If repo is `username.github.io`: https://username.github.io
- If repo is `portfolio`: https://username.github.io/portfolio

## File Structure

```
portfolio/
├── index.html              Main portfolio page
├── project.html            Project detail template
├── admin.html              Admin panel (password: admin123)
├── css/
│   └── style.css           All styles (colors, fonts, components)
├── js/
│   ├── app.js              Main logic (projects, skills, admin login)
│   ├── project-detail.js   Carousel and project detail page logic
│   └── admin.js            Admin panel functionality
├── images/                 Project and profile images
├── .gitignore              (optional) Exclude certain files
└── README.md               This file
```

## Editing Your Portfolio

### Method 1: Direct GitHub Editing (Easiest)

1. Open your repository on GitHub
2. Navigate to `index.html`
3. Click the ✏️ pencil icon to edit
4. Scroll to the `const projectsData = [...]` section
5. Add/edit projects in the JavaScript array:

```javascript
{
    id: 3,
    name: "Your Project Name",
    description: "Short description",
    longDescription: "Longer detailed description",
    tags: ["HTML", "CSS", "JavaScript"],
    badge: "Dev",           // or "QA · Testing", "Design", etc.
    badge2: "UI/UX",        // optional
    link: "https://...",
    images: ["images/project-1.png", "images/project-2.png"]
}
```

6. Commit changes → Website updates live in seconds!

### Method 2: Using Admin Panel

1. Go to your website, click **Admin** button
2. Enter password: `admin123`
3. Click **+ Add New Project**
4. Fill form (multi-image upload supported)
5. Click Save

**Note:** Admin panel saves to browser localStorage (device-only). For permanent changes, use Method 1 (GitHub editing).

### Method 3: Upload Images

1. In your GitHub repo, go to `images/` folder
2. Click "Add file" → "Upload files"
3. Drag images into the browser
4. Commit changes
5. Update image paths in `index.html`'s project data

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

### Change Profile Info

In `index.html`, update the profile section:

```html
<h1 class="display-4 fw-bold mb-3">Your Name</h1>
<p class="lead text-muted mb-4">Your Title | Your Tagline</p>
```

And update contact links:

```html
<a href="mailto:your.email@example.com" class="contact-link">📧 Email</a>
<a href="https://github.com/yourprofile" target="_blank" class="contact-link">🐙 GitHub</a>
```

### Change Fonts

Currently using **DM Sans** (body) and **DM Mono** (code/tags). To change:

1. Edit the Google Fonts import in HTML `<head>`
2. Update CSS font-family declarations in `css/style.css`

### Add Dark Mode

Add a toggle button and CSS variables approach:

```css
body.dark-mode {
    --bg: #1a1a1a;
    --text: #ffffff;
    --card: #2d2d2d;
    /* etc */
}
```

## Project Data Structure

Each project object has:

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

### For Local Files (relative to root):
```
"images/project-1.png"
"images/profile.jpg"
```

### For External URLs (CDN, Imgur, etc.):
```
"https://cdn.example.com/image.png"
```

### For GitHub Raw Links:
```
"https://raw.githubusercontent.com/USERNAME/REPO/main/images/project-1.png"
```

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)

## Performance Tips

1. **Optimize Images**: Compress images before uploading (use TinyPNG, ImageOptim)
2. **Lazy Loading**: Images lazy load automatically with `loading="lazy"`
3. **CDN**: Bootstrap and Google Fonts loaded from CDN
4. **Caching**: GitHub Pages automatically caches assets

## Troubleshooting

### Site not showing up after push?
- Wait 1-2 minutes for GitHub Pages to build
- Check repository Settings → Pages → Source
- Clear browser cache (Ctrl+Shift+Delete)
- Check console (F12) for errors

### Images not loading?
- Verify image paths are correct relative to repository
- Use lowercase filenames without spaces
- Check that images are in `images/` folder
- Use GitHub raw links if relative paths don't work

### Admin panel not working?
- Clear browser localStorage: `localStorage.clear()` in console
- Reload page
- Make sure JavaScript is enabled

### Carousel not working?
- Check browser console (F12) for JavaScript errors
- Verify image paths exist
- Try different browser

## Deployment to Custom Domain

1. Go to repository Settings → Pages
2. Under "Custom domain", enter your domain (e.g., myportfolio.com)
3. Point your domain's DNS to GitHub Pages IP:
   ```
   A record: 185.199.108.153
   A record: 185.199.109.153
   A record: 185.199.110.153
   A record: 185.199.111.153
   ```
4. Add DNS verification TXT record as shown in GitHub

## SEO Optimization

Add meta tags to `index.html` `<head>`:

```html
<meta name="description" content="Portfolio of [Your Name] - [Your Title]">
<meta name="keywords" content="portfolio, web developer, designer">
<meta name="author" content="Your Name">
<meta property="og:title" content="Your Name Portfolio">
<meta property="og:description" content="Portfolio of [Your Name]">
<meta property="og:image" content="https://yoursite.com/images/profile.jpg">
```

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Contact form with email integration
- [ ] Testimonials/reviews section
- [ ] Search functionality
- [ ] Filtering by technology tag
- [ ] Social media integration
- [ ] CMS integration (Contentful, Netlify CMS)

## License

Feel free to use this template for your portfolio!

## Questions?

- Check [GitHub Pages Docs](https://pages.github.com)
- View [Bootstrap Docs](https://getbootstrap.com/docs)
- Read [MDN Web Docs](https://developer.mozilla.org)

---

**Happy portfolio building! 🚀**
