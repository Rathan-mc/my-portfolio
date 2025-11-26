# Rathan M C – Full‑Stack & DevOps Portfolio

This is a React + Vite portfolio website designed to showcase your skills as a **full‑stack developer** and **DevOps engineer**.  
It is ready to be deployed using **Git**, **GitHub Actions**, and **Netlify**.

## 1. Project Setup

```bash
# install dependencies
npm install

# run locally
npm run dev

# build for production
npm run build
```

Open the dev server URL (usually `http://localhost:5173`) in your browser.

## 2. Add Your Photos

All public assets are inside the `public/` folder.

- Replace `public/profile-placeholder.txt` with your actual profile photo, for example:

  1. Delete `profile-placeholder.txt`
  2. Add `profile.jpg`
  3. Update `src/components/Hero.jsx` and change the `src` from `/profile-placeholder.txt` to `/profile.jpg`

- Replace `public/cert1-placeholder.txt` and `public/cert2-placeholder.txt` with your certification images, for example:

  1. Delete the placeholder files
  2. Add `aws-devops-cert.jpg`, `azure-devops-cert.jpg`, etc.
  3. Update `src/components/Certifications.jsx` image `src` paths accordingly

## 3. Deploy to Netlify (with Git & GitHub Actions)

### Step 1: Push to GitHub

1. Create a new GitHub repository
2. Initialize git and push:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### Step 2: Create a Netlify Site

1. Log in to Netlify
2. Create a **New site from Git**
3. Connect your GitHub repository
4. Build command: `npm run build`
5. Publish directory: `dist`

Netlify will now automatically deploy on every push to `main`.

### Step 3: Configure GitHub Actions → Netlify

This repo includes a workflow file: `.github/workflows/deploy.yml`.

To enable it:

1. In Netlify, generate a **Personal Access Token** and copy your **Site ID**.
2. In your GitHub repo, go to **Settings → Secrets and variables → Actions → New repository secret** and add:
   - `NETLIFY_AUTH_TOKEN` – your Netlify access token
   - `NETLIFY_SITE_ID` – your Netlify site ID

On the next push to `main`, GitHub Actions will:

- Install dependencies
- Build the React app
- Deploy the built `dist/` folder to Netlify

This demonstrates your DevOps skills using **GitHub Actions + Netlify**.

## 4. Customize Content

Most content lives in the `src/components` folder:

- `Hero.jsx` – name, title, intro, quick info
- `Skills.jsx` – skills & tech stack
- `Experience.jsx` – work history & education
- `Projects.jsx` – project descriptions and impact
- `DevOpsPipeline.jsx` – DevOps process & tooling
- `Certifications.jsx` – certification list and images
- `Contact.jsx` – contact info & form (Formspree)
- `Footer.jsx` – footer text

Update text to match your latest experience whenever needed.

## 5. Contact Form (Formspree)

The contact form is already wired to your Formspree endpoint:

```html
<form action="https://formspree.io/f/mrbwzdjj" method="POST">
```

You can change the endpoint any time in `src/components/Contact.jsx`.

---

You now have a **production‑ready portfolio** that clearly showcases:

- Full‑stack skills using **C#/.NET**, **React**, and databases
- DevOps skills using **Git**, **GitHub Actions**, **Azure DevOps**, **Jenkins**, **Docker**, and **Netlify**

Happy shipping!
