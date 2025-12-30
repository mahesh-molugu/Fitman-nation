# Complete Deployment Guide - Frontend & Backend

## 🚀 Deployment Overview

This guide covers deploying both the React frontend and Spring Boot backend.

---

## Part 1: Backend Deployment

### Option A: Deploy to Railway (Recommended - Free Tier Available)

1. **Create Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your repository

3. **Add MySQL Database**
   - Click "New" → "Database" → "MySQL"
   - Railway will provide connection details

4. **Configure Environment Variables**
   ```
   SPRING_DATASOURCE_URL=jdbc:mysql://mysql.railway.internal:3306/railway
   SPRING_DATASOURCE_USERNAME=root
   SPRING_DATASOURCE_PASSWORD=<provided_password>
   RAZORPAY_KEY_ID=your_razorpay_key
   RAZORPAY_KEY_SECRET=your_razorpay_secret
   JWT_SECRET=your_secure_jwt_secret
   GOOGLE_ANALYTICS_TRACKING_ID=your_ga_id
   ```

5. **Deploy**
   - Railway auto-detects Spring Boot
   - Builds and deploys automatically
   - Get your backend URL (e.g., `https://your-app.railway.app`)

### Option B: Deploy to Heroku

1. **Install Heroku CLI**
   ```bash
   # Download from heroku.com
   ```

2. **Create Procfile**
   ```bash
   echo "web: java -jar target/fitman-backend-1.0.0.jar" > Procfile
   ```

3. **Login and Create App**
   ```bash
   heroku login
   heroku create fitman-backend
   ```

4. **Add MySQL Addon**
   ```bash
   heroku addons:create cleardb:ignite
   ```

5. **Set Environment Variables**
   ```bash
   heroku config:set RAZORPAY_KEY_ID=your_key
   heroku config:set RAZORPAY_KEY_SECRET=your_secret
   heroku config:set JWT_SECRET=your_secret
   ```

6. **Deploy**
   ```bash
   git push heroku main
   ```

### Option C: Deploy to AWS/Azure/GCP

See backend `SETUP_INSTRUCTIONS.md` for cloud deployment details.

---

## Part 2: Frontend Deployment

### Option A: GitHub Pages (Current - Free)

Already deployed at: `https://mahesh-molugu.github.io/Fitman-nation`

**Update API URL for Production:**

1. Create `.env.production`:
   ```
   VITE_API_URL=https://your-backend-domain.com/api
   ```

2. Update `vite.config.js`:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/Fitman-nation/',
     define: {
       'import.meta.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL || 'https://your-backend-domain.com/api')
     }
   })
   ```

3. Rebuild and deploy:
   ```bash
   npm run build
   npm run deploy
   ```

### Option B: Deploy to Netlify (Recommended)

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Deploy**
   - Click "New site from Git"
   - Connect GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Base directory: (leave empty)

3. **Environment Variables**
   - Go to Site settings → Environment variables
   - Add: `VITE_API_URL=https://your-backend-domain.com/api`

4. **Custom Domain** (Optional)
   - Add your domain in Domain settings

### Option C: Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Set Environment Variables**
   - In Vercel dashboard → Settings → Environment Variables
   - Add: `VITE_API_URL`

---

## Part 3: Integration Steps

### Step 1: Update Frontend API URL

1. Create `.env` file in frontend root:
   ```
   VITE_API_URL=https://your-backend.railway.app/api
   ```

2. Or update in `src/services/api.js`:
   ```javascript
   const API_BASE_URL = 'https://your-backend.railway.app/api'
   ```

### Step 2: Update CORS in Backend

Update `SecurityConfig.java`:
```java
configuration.setAllowedOrigins(Arrays.asList(
    "https://mahesh-molugu.github.io",
    "https://your-frontend-domain.com"
));
```

### Step 3: Test Integration

1. **Test Authentication:**
   ```javascript
   // In browser console
   fetch('https://your-backend.com/api/public/plans')
     .then(r => r.json())
     .then(console.log)
   ```

2. **Test Payment:**
   - Try enrolling in a program
   - Should open Razorpay checkout

---

## Part 4: Production Checklist

### Backend
- [ ] Change JWT secret to strong random key
- [ ] Use production Razorpay keys
- [ ] Configure production database
- [ ] Update CORS origins
- [ ] Enable HTTPS
- [ ] Set up logging
- [ ] Configure backups

### Frontend
- [ ] Update API URL to production
- [ ] Update Google Analytics ID
- [ ] Test all API calls
- [ ] Verify payment flow
- [ ] Test on mobile devices
- [ ] Optimize images
- [ ] Enable compression

### Both
- [ ] Test end-to-end flow
- [ ] Monitor error logs
- [ ] Set up monitoring
- [ ] Configure alerts

---

## Quick Deploy Commands

### Backend (Railway)
```bash
# Push to GitHub (Railway auto-deploys)
git add .
git commit -m "Deploy backend"
git push origin main
```

### Frontend (GitHub Pages)
```bash
# Update API URL in .env.production
npm run build
npm run deploy
```

### Frontend (Netlify)
```bash
# Push to GitHub (Netlify auto-deploys)
git add .
git commit -m "Update frontend"
git push origin main
```

---

## Testing Production

1. **Test API:**
   ```
   https://your-backend.com/api/public/plans
   ```

2. **Test Frontend:**
   ```
   https://your-frontend.com
   ```

3. **Test Payment:**
   - Use Razorpay test mode
   - Test with test cards

---

## Support

For issues:
- Check backend logs
- Check frontend console
- Verify CORS settings
- Verify API URLs
- Check environment variables

---

**Your application is ready for production!** 🎉



