# 🚀 Backend Deployment Guide - Step by Step

## Quick Overview

Deploy your Spring Boot backend to make it accessible for your frontend. Here are the easiest options:

---

## Option 1: Railway (Easiest - Recommended) ⭐

### Step 1: Create Railway Account
1. Go to **https://railway.app**
2. Click **"Start a New Project"**
3. Sign up with **GitHub** (easiest way)

### Step 2: Create New Project
1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. If you haven't pushed backend to GitHub:
   - Click **"Empty Project"** instead
   - Then we'll upload the code

### Step 3: Upload Backend Code

**If backend is in GitHub:**
- Select your `Fitman-Backend` repository
- Railway will auto-detect Spring Boot

**If backend is local only:**
1. Click **"Empty Project"**
2. Click **"Deploy from GitHub repo"** → **"Configure GitHub App"**
3. Or use Railway CLI:
   ```bash
   # Install Railway CLI
   npm install -g @railway/cli
   
   # Login
   railway login
   
   # In Fitman-Backend directory
   cd ../Fitman-Backend
   railway init
   railway up
   ```

### Step 4: Add MySQL Database
1. In Railway project, click **"New"**
2. Select **"Database"**
3. Choose **"MySQL"**
4. Railway will create database automatically
5. **Copy the connection details** shown

### Step 5: Set Environment Variables
1. Go to your service → **"Variables"** tab
2. Click **"New Variable"**
3. Add these variables:

```
SPRING_DATASOURCE_URL=jdbc:mysql://containers-us-west-xxx.railway.app:3306/railway
SPRING_DATASOURCE_USERNAME=root
SPRING_DATASOURCE_PASSWORD=<password-from-railway>
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_razorpay_secret_key
JWT_SECRET=your-very-secure-secret-key-minimum-256-bits-long
GOOGLE_ANALYTICS_TRACKING_ID=G-XXXXXXXXXX
```

**How to get values:**
- **Database URL**: Railway shows this when you create MySQL
- **Razorpay Keys**: https://dashboard.razorpay.com/app/keys
- **JWT Secret**: Generate with: `openssl rand -base64 32`
- **GA ID**: From Google Analytics dashboard

### Step 6: Deploy
1. Railway **automatically deploys** when you push code
2. Or click **"Deploy"** button
3. Wait for build to complete (2-5 minutes)

### Step 7: Get Your Backend URL
1. Go to **"Settings"** → **"Networking"**
2. Click **"Generate Domain"**
3. Copy the URL: `https://your-app.railway.app`
4. This is your backend API URL!

### Step 8: Test Backend
Open in browser:
```
https://your-app.railway.app/api/public/plans
```

Should see JSON with membership plans.

---

## Option 2: Heroku

### Step 1: Install Heroku CLI
Download from: https://devcenter.heroku.com/articles/heroku-cli

### Step 2: Login
```bash
heroku login
```

### Step 3: Create App
```bash
cd ../Fitman-Backend
heroku create fitman-backend
```

### Step 4: Add MySQL Database
```bash
heroku addons:create cleardb:ignite
```

### Step 5: Get Database URL
```bash
heroku config:get CLEARDB_DATABASE_URL
```

### Step 6: Set Environment Variables
```bash
heroku config:set SPRING_DATASOURCE_URL="jdbc:mysql://..."
heroku config:set SPRING_DATASOURCE_USERNAME="root"
heroku config:set SPRING_DATASOURCE_PASSWORD="..."
heroku config:set RAZORPAY_KEY_ID="rzp_test_..."
heroku config:set RAZORPAY_KEY_SECRET="..."
heroku config:set JWT_SECRET="your-secret"
heroku config:set GOOGLE_ANALYTICS_TRACKING_ID="G-..."
```

### Step 7: Create Procfile
Create `Procfile` in `Fitman-Backend` root:
```
web: java -jar target/fitman-backend-1.0.0.jar
```

### Step 8: Build and Deploy
```bash
mvn clean package -DskipTests
git init
git add .
git commit -m "Initial commit"
heroku git:remote -a fitman-backend
git push heroku main
```

---

## Option 3: AWS (More Complex)

### Using AWS Elastic Beanstalk:
1. Install AWS CLI
2. Create Elastic Beanstalk application
3. Upload backend code
4. Configure RDS for MySQL
5. Set environment variables
6. Deploy

**Note**: AWS setup is more complex. Use Railway or Heroku for easier deployment.

---

## 🔑 Getting API Keys

### Razorpay Keys:
1. Go to: **https://dashboard.razorpay.com/**
2. Sign up or login
3. Go to **Settings** → **API Keys**
4. Click **Generate Test Keys**
5. Copy **Key ID** and **Key Secret**

### Google Analytics ID:
1. Go to: **https://analytics.google.com/**
2. Create account (if needed)
3. Create property
4. Get **Measurement ID** (format: G-XXXXXXXXXX)

### Generate JWT Secret:
```bash
# Windows PowerShell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 }))

# Or use online tool: https://www.random.org/strings/
```

---

## ✅ After Deployment

### 1. Test Your Backend
```bash
# Test public endpoint
curl https://your-backend.railway.app/api/public/plans
```

### 2. Update Frontend API URL
Edit `src/services/api.js`:
```javascript
const API_BASE_URL = 'https://your-backend.railway.app/api'
```

### 3. Update Backend CORS
Edit `Fitman-Backend/src/main/java/com/fitmannation/config/SecurityConfig.java`:
```java
configuration.setAllowedOrigins(Arrays.asList(
    "https://mahesh-molugu.github.io",
    "http://localhost:5173"
));
```

Then redeploy backend.

### 4. Rebuild and Redeploy Frontend
```bash
npm run build
npm run deploy
```

---

## 🧪 Testing Checklist

- [ ] Backend responds: `https://your-backend.com/api/public/plans`
- [ ] Frontend can connect to backend
- [ ] User registration works
- [ ] User login works
- [ ] Payment checkout opens
- [ ] Analytics tracking works

---

## 🆘 Troubleshooting

### Backend Not Starting
- Check logs in Railway/Heroku dashboard
- Verify all environment variables are set
- Check database connection
- Verify Java version (need 17+)

### CORS Errors
- Update CORS in `SecurityConfig.java`
- Add frontend URL to allowed origins
- Redeploy backend

### Database Connection Failed
- Verify database URL is correct
- Check username/password
- Ensure database is running
- Check firewall settings

### Payment Not Working
- Verify Razorpay keys are correct
- Use test keys for development
- Check Razorpay dashboard for errors
- Verify amount is in correct format

---

## 📞 Quick Reference

**Backend Location**: `../Fitman-Backend/`  
**Backend Port**: 8080 (local) or Railway/Heroku assigned port  
**API Base**: `/api`  
**Database**: MySQL  

**Test Endpoint**: `https://your-backend.com/api/public/plans`

---

**Start with Railway - it's the easiest!** 🚀


