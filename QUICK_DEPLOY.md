# Quick Deployment to GitHub Pages

## ⚡ Quick Steps

### 1. Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `Fitman-nation` (or your preferred name)
3. Make it **Public** (required for free GitHub Pages)
4. **Don't** initialize with README, .gitignore, or license
5. Click **Create repository**

### 2. Update Configuration

**IMPORTANT:** Before deploying, update these files with your actual GitHub username and repository name:

#### Update `vite.config.js`:
```js
base: '/YOUR_REPO_NAME/',  // Change Fitman-nation to your actual repo name
```

#### Update `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
```

**Example:** If your username is `john` and repo is `Fitman-nation`:
- `vite.config.js`: `base: '/Fitman-nation/'`
- `package.json`: `"homepage": "https://john.github.io/Fitman-nation"`

### 3. Push to GitHub

Run these commands (replace with your GitHub username and repo URL):

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 4. Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
- Build your project
- Deploy to the `gh-pages` branch
- Make your site live!

### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Branch: **gh-pages**
5. Folder: **/ (root)**
6. Click **Save**

### 6. Access Your Site

Your site will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

It may take 1-2 minutes to go live after deployment.

---

## 🔄 Updating Your Site

After making changes:
```bash
git add .
git commit -m "Update content"
git push
npm run deploy
```

---

## ❓ Troubleshooting

**404 Errors on Routes:**
- The `public/404.html` file should handle this automatically
- If issues persist, check the `base` path in `vite.config.js`

**Assets Not Loading:**
- Verify the `base` path matches your repository name exactly
- Make sure there's a trailing slash: `/Fitman-nation/`

**Build Errors:**
- Run `npm install` to ensure all dependencies are installed
- Check for any linting errors: `npm run lint`








