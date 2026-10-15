# Vince Wackie R. Espera — Portfolio

Personal portfolio website for a Computer Science graduate with focus on data science, software development, and quality assurance. Built as a clean, minimal static site hosted on GitHub Pages.

**Live site:** https://FerLinne.github.io/Portfolio

---

## Tech Stack

- **HTML** — structure
- **CSS** — custom styling, no frameworks (see `css/styles.css`)
- **Vanilla JavaScript** — project/certificate loading, carousel, overlays
- **Google Fonts** — DM Sans (body) + DM Mono (labels, tags, mono)
- **GitHub Pages** — free static hosting

---

## Project Structure

```
Portfolio/
├── index.html              # Main portfolio page
├── css/
│   └── styles.css          # All styles
├── projects.json           # Project data (edit this to add projects)
├── certificates.json       # Certificates and credentials
└── images/
    ├── Profile.jpg         # Profile photo
    ├── Projects/
    │   ├── Harvestcrops/   # HarvestCrop screenshots
    │   └── HerbaScan/      # HerbaScan screenshots
    ├── Certifications/     # Certificate images
    └── resume/
        └── MyResume.pdf    # Downloadable resume
```

---

## How to Add a New Project

Open `projects.json` on GitHub and add a new object to the array:

```json
{
  "id": 3,
  "title": "Your Project Title",
  "description": "Full description shown on the detail page. Include what it does and your specific role.",
  "tags": ["Python", "MySQL", "Streamlit"],
  "badge": "dev",
  "badge2": "",
  "link": "https://github.com/FerLinne/your-repo",
  "status": "Completed",
  "type": "Personal",
  "year": "2025",
  "images": [
    "images/Projects/YourProject/screenshot1.jpg",
    "images/Projects/YourProject/screenshot2.jpg"
  ]
}
```

**Badge options:**
| Value | Color | Use for |
|-------|-------|---------|
| `dev` | Green | Development projects |
| `ds` | Purple | Data science projects |
| `qa` | Orange | QA / testing work |
| `design` | Pink | UI/UX or design work |

**Type options:** `Academic`, `Personal`, `Freelance`

After saving, commit the changes — the site updates within 1–2 minutes.

---

## How to Add a Certificate

Open `certificates.json` on GitHub and add a new object:

```json
{
  "id": 5,
  "title": "Certificate Name",
  "issuer": "Issuing Organization",
  "date": "Month Year",
  "category": "certification",
  "image": "images/Certifications/cert-name.jpg"
}
```

Then upload the certificate image to the `images/Certifications/` folder on GitHub.

---

## How to Update Your Profile Photo

1. Upload your new photo to `images/` on GitHub
2. In `index.html`, find this line and update the filename:
```html
<img src="images/Profile.jpg" alt="Vince Espera"/>
```

---

## How to Update Your Resume

1. Upload your new PDF to `images/resume/` on GitHub, named `MyResume.pdf`
2. The download button in the portfolio will automatically serve the new file

---

## Sections

| Section | Source |
|---------|--------|
| Hero (photo, bio, pills) | `index.html` — edit directly |
| Projects | `projects.json` |
| Education | `index.html` — edit directly |
| Skills | `index.html` — edit directly |
| Certificates | `certificates.json` |
| Contact | `index.html` — edit directly |

---

## Contact Links

To update contact links, open `index.html` and search for the contact section. Update the `href` values:

```html
<a href="mailto:your@email.com">...</a>
<a href="https://github.com/yourhandle">...</a>
<a href="https://linkedin.com/in/yourprofile">...</a>
```

---

## Deployment

This site is hosted on **GitHub Pages** from the `main` branch root folder. Any push to `main` automatically redeploys the site within 1–2 minutes.

To check deployment status: **Repository → Actions tab**

---

## Author

**Vince Wackie R. Espera**
[github.com/FerLinne](https://github.com/FerLinne) · [LinkedIn](https://www.linkedin.com/in/vince-wackie-espera-24503b363/)
