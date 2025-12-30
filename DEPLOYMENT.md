# GitHub Pages Deployment Guide

## Prerequisites
1. A GitHub account
2. Git installed on your machine
3. Your project pushed to a GitHub repository

## Step 1: Update Repository Name in package.json

Before deploying, update the `homepage` field in `package.json` with your actual GitHub username and repository name:

```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
```

For example, if your username is `john` and repo is `Fitman-nation`:
```json
"homepage": "https://john.github.io/Fitman-nation"
```

## Step 2: Update Base Path in vite.config.js

If your repository is NOT named `Fitman-nation`, update the `base` in `vite.config.js`:

```js
base: '/YOUR_REPO_NAME/',
```

For example:
```js
base: '/Fitman-nation/',
```

If your repository IS the main GitHub Pages site (username.github.io), use:
```js
base: '/',
```

## Step 3: Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit - FitMan Nation website"
```

## Step 4: Create GitHub Repository and Push

1. Go to GitHub and create a new repository
2. Add the remote and push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 5: Deploy to GitHub Pages

Run the deployment command:

```bash
npm run deploy
```

This will:
1. Build your project
2. Deploy the `dist` folder to the `gh-pages` branch
3. Make your site available at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select branch: **gh-pages**
5. Select folder: **/ (root)**
6. Click **Save**

Your site will be live in a few minutes!

## Troubleshooting

### 404 Errors on Routes
If you get 404 errors when navigating to routes, you need to:
1. Create a `404.html` file in the `public` folder that redirects to `index.html`
2. Or use the GitHub Pages redirect workaround

### Base Path Issues
- If assets aren't loading, check the `base` path in `vite.config.js`
- Make sure it matches your repository name

### Build Errors
- Make sure all dependencies are installed: `npm install`
- Check for any linting errors: `npm run lint`

## Updating Your Site

After making changes:
1. Commit your changes: `git add . && git commit -m "Update content"`
2. Push to main: `git push`
3. Deploy: `npm run deploy`

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Update the domain in GitHub Pages settings








